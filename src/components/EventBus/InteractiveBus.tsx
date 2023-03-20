import { Message, Method } from "@components/Monitor/types";
import { bus, EVENTS } from "@hooks/useEventBus";
import { useEffect, useState, useRef, useContext } from "react";
import { cloneDeep } from "lodash";
import { IconMember } from "@douyinfe/semi-icons";
import Style from './style.module.scss';
import DraggablePanel from "@components/DraggablePanel";
import Msgs from "@components/Monitor/msgs";
import { Avatar, Spin } from "@douyinfe/semi-ui";
import { BASE_URL } from '@utils/axios';
import { AppContext } from "Provider";
import mint from "@utils/mint-filter";
import { chatgpt, voiceGen } from "@services/index"
import { ReplyCondition } from "@hooks/useApp";
// import TestMsgs from "@components/Monitor/douyin_test_msgs";

// 礼物 user id => Message 的 map
const gifts: Record<string, Message & { coins: number }> = {};
// 轮询时间间隔
const LOOP_INTERVAL = 3000;
// 轮询 ID
let LOOP_ID: any = 0;
// 播放口播前的空闲次数
const IDLE_TIMES = 5;
// 当前空闲次数
let CURRENT_IDLE_TIMES = 0;

export const InteractiveBus = () => {
    const [msgs, setMsgs] = useState<Message[]>([]);
    // const [msgs, setMsgs] = useState<Message[]>(TestMsgs);
    const msgsRef = useRef(msgs);
    const [currentMsg, _setCurrentMsg] = useState<Nullable<Message>>(null);
    const setCurrentMsg = useRef(_setCurrentMsg);
    const [currentAnswer, _setCurrentAnswer] = useState<string>('');
    const setCurrentAnswer = useRef(_setCurrentAnswer);
    const [isLoading, setIsLoading] = useState(false);
    const audioRef = useRef<Nullable<HTMLAudioElement>>(null);
    const [visible, setVisible] = useState<boolean>(false);
    const { voice, style, speed, pitch, randomMotion, defaultAudioSrc } = useContext(AppContext);
    // 语音的地址
    const [src, setSrc] = useState<string>('');
    const { replyCondition } = useContext(AppContext);

    const pushMsg = (msg: Message) => {
        const tmp = cloneDeep(msgsRef.current);
        tmp.push(msg);
        msgsRef.current = tmp;
        setMsgs(tmp);
    };

    const getMsg = (): Message | undefined => {
        const tmp = cloneDeep(msgsRef.current);
        if (tmp.length) {
            const msg = tmp.shift();
            msgsRef.current = tmp;
            setMsgs(tmp);
            return msg
        }
        return undefined;
    }

    const onMessage = (msg: Message) => {
        // 送礼消息
        if (msg.common?.method === Method.WebcastGiftMessage && msg.user?.id && replyCondition !== ReplyCondition.None) {
            if (gifts[msg.user.id]) {
                gifts[msg.user.id].coins += 1;
            } else {
                gifts[msg.user.id] = { ...msg, coins: 1 };
            }
            pushMsg(msg);
        }
        // 文字消息 && 有送礼物
        if (
            msg.common?.method === Method.WebcastChatMessage &&
            msg.user?.id &&
            (gifts[msg.user.id] || replyCondition === ReplyCondition.None) &&
            msg.content &&
            // 敏感词检测
            mint.verify(msg.content)
        ) {
            pushMsg(msg);
        }
    };

    const Loop = async () => {
        if (LOOP_ID) {
            clearTimeout(LOOP_ID);
        }
        // 清空状态
        setIsLoading(false);
        setCurrentAnswer.current('');
        setCurrentMsg.current(null);
        const msg = getMsg();
        if (msg === undefined) {
            // 随机动作
            randomMotion();
            // 空闲次数 +1
            CURRENT_IDLE_TIMES += 1;
            // 空闲 IDLE_TIMES 时播放口播内容
            if (CURRENT_IDLE_TIMES % IDLE_TIMES === 0) {
                CURRENT_IDLE_TIMES = 0;
                if (defaultAudioSrc && audioRef.current) {
                    setSrc(defaultAudioSrc);
                    audioRef.current.play();
                    audioRef.current.oncanplay = () => {
                        audioRef.current?.play();
                    };
                    audioRef.current.onended = () => {
                        LOOP_ID = setTimeout(Loop, LOOP_INTERVAL);
                    }
                } else {
                    LOOP_ID = setTimeout(Loop, LOOP_INTERVAL);        
                }
                return;
            }
            // 递归循环
            LOOP_ID = setTimeout(Loop, LOOP_INTERVAL);
            return;
        }
        // 礼物消息，显示弹幕，播放感谢xxx送来的礼物，你可以向我提一个问题噢
        if (msg?.common?.method === Method.WebcastGiftMessage) {
            // 构造文案
            const text = `感谢${msg.user?.nickName}送来的${msg.gift?.name}, 你可以向我提一个问题哦`;
            // 打接口
            const res = await voiceGen({ text, voice, style, speed, pitch });
            const path = res?.data?.path;
            setSrc(`${BASE_URL}${path}`);
            if (!audioRef.current) return;
            audioRef.current.oncanplay = () => {
                // 设置当前消息
                setCurrentMsg.current(msg);
                // 随机动作
                randomMotion();
                audioRef.current?.play();
            };
            audioRef.current.onended = () => {
                LOOP_ID = setTimeout(Loop, LOOP_INTERVAL);
            }
            return;
        }
        // 提问消息，清除提问权限，显示弹幕，播放语音
        if (msg?.common?.method === Method.WebcastChatMessage) {
            // 更新提问权限
            if (gifts[msg.user!.id]) {
                gifts[msg.user!.id].coins -= 1;
                if (gifts[msg.user!.id].coins <= 0) {
                    delete gifts[msg.user!.id];
                }
            }
            // 问题文本
            const text = msg.content;
            // 设置当前消息
            setCurrentMsg.current(msg);
            // loading 状态
            setIsLoading(true);
            // chatgpt
            const cid = window.localStorage.getItem('cid');
            const pid = window.localStorage.getItem('pid');
            const res = await chatgpt({ msg: text!.trim(), cid, pid });
            const { cid: nCid, pid: nPid, text: chatgptText } = res.data;
            window.localStorage.setItem('cid', nCid);
            window.localStorage.setItem('pid', nPid);
            const result = await voiceGen({ text: chatgptText, voice, style, speed, pitch });
            const { path } = result.data;
            setSrc(`${BASE_URL}${path}`);
            if (!audioRef.current) return;
            audioRef.current.oncanplay = () => {
                // loading 结束
                setIsLoading(false);
                // 随机动作
                randomMotion();
                // 设置当前消息
                setCurrentAnswer.current(chatgptText);
                audioRef.current?.play();
            };
            audioRef.current.onended = () => {
                LOOP_ID = setTimeout(Loop, LOOP_INTERVAL);
            }
            return;
        }
        // Loop by default
        LOOP_ID = setTimeout(Loop, LOOP_INTERVAL);
    };

    useEffect(() => {
        bus.on(EVENTS.ON_RECIEVE_MSG, onMessage);
        Loop();

        return () => {
            bus.removeListener(EVENTS.ON_RECIEVE_MSG, onMessage);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <IconMember className={Style.interactive} onClick={() => setVisible(!visible)} />
            <DraggablePanel title="待回答的问题" width={300} height={400} style={{ display: visible ? 'flex' : 'none', left: '310px' }}>
                <div className={Style.container}>
                    <div className={Style.msgs}>
                        <Msgs msgs={msgs.filter((item) => item.common?.method === Method.WebcastChatMessage)} />
                    </div>
                </div>
            </DraggablePanel>
            <audio ref={audioRef} controls={false} src={src} />
            {currentMsg !== null && (
                <div className={Style.danmu}>
                    {currentMsg?.common?.method === Method.WebcastChatMessage && (
                        <>
                            <div className={Style.question}>
                                <Avatar size="small" alt={currentMsg.user?.nickName} src={currentMsg.user?.AvatarThumb.urlListList[0]} style={{ margin: 4 }} />
                                {`${currentMsg.user?.nickName}:${currentMsg.content}`}
                            </div>
                            <div className={Style.answer}>
                                {isLoading && <Spin spinning={isLoading} />}
                                {currentAnswer}
                            </div>
                        </>
                    )}
                    {currentMsg?.common?.method === Method.WebcastGiftMessage && (
                        <div className={Style.question}>
                            <Avatar size="small" alt={currentMsg.user?.nickName} src={currentMsg.user?.AvatarThumb.urlListList[0]} style={{ margin: 4 }} />
                            {currentMsg.common?.describe}
                            <Avatar size="small" alt={currentMsg.gift?.describe} src={currentMsg.gift?.image.urlListList[0]} />
                        </div>
                    )}
                </div>
            )}
        </>
    );
}

export default InteractiveBus;
