import DraggablePanel from '@components/DraggablePanel';
import { IconTiktokLogo } from '@douyinfe/semi-icons'
import Style from './index.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Button, Input, Notification } from '@douyinfe/semi-ui';
import Msgs from './msgs';
import { Message } from './types';
import { bus, EVENTS } from '@hooks/useEventBus';

const MAX_CACHED_MSGS_LENGTH = 20;

export const Monitor = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('');
    const wssRef = useRef<Nullable<WebSocket>>(null);
    const [msgList, _setMsgList] = useState<Message[]>([]);
    const [monitoring, setMonitoring] = useState<boolean>(false);
    const msgListRef = useRef(msgList);
    const setMsgList = (msgs: Message[]) => {
        msgListRef.current = msgs;
        _setMsgList(msgs);
    }

    useEffect(() => {
        return () => {
            wssRef.current?.close();
            setMonitoring(false);
        }
    }, []);

    const go = () => {
        if (!!wssRef.current) {
            wssRef.current.close();
            wssRef.current = null;
            setMonitoring(false);
        } else {
            // https://live.douyin.com/139902822326
            if (url.search(/^https:\/\/live.douyin.com\/[0-9]*$/) < 0) {
                Notification.error({ title: '错误', content: '请输入正确的直播间地址', })
                return;
            }
            wssRef.current = new WebSocket('ws://42.193.254.253:3000/dy');
            setMonitoring(true);
            wssRef.current.binaryType = "arraybuffer";

            wssRef.current.addEventListener("open", function (e) {
                wssRef.current?.send(JSON.stringify({ url, proxyIp: '' }));
            })

            wssRef.current.addEventListener("message", function (e) {
                const msg = JSON.parse(e.data) as Message;
                // console.log("message", msg?.common?.method);
                if (msg.code) { return }
                bus.emit(EVENTS.ON_RECIEVE_MSG, msg);
                const tmp = JSON.parse(JSON.stringify(msgListRef.current)) as Message[];
                if (tmp.length < MAX_CACHED_MSGS_LENGTH) {
                    tmp.unshift(msg);
                } else {
                    tmp.pop();
                    tmp.unshift(msg);
                }
                setMsgList(tmp);
            })

            wssRef.current.addEventListener("close", function (e) {
                console.log("close", e)
                setMonitoring(false);
            })

            wssRef.current.addEventListener("error", function (e) {
                console.log("error=>", e)
                Notification.error({ title: '错误', content: '监控停止' });
                setMonitoring(false);
            })
        }
    };

    return (
        <>
            <IconTiktokLogo className={Style.monitor} onClick={() => setVisible(!visible)} />
            <DraggablePanel title="消息列表" width={300} height={400} style={{ display: visible ? 'flex' : 'none' }}>
                <div className={Style.container}>
                    <div className={Style.input}>
                        <Input value={url} onChange={(v) => setUrl(v)} placeholder="直播间地址" />
                        <Button type="primary" theme="solid" onClick={go} style={{ marginLeft: '6px' }}>
                            {monitoring ? '停止' : '开始'}
                        </Button>
                    </div>
                    <div className={Style.msgs}>
                        <Msgs msgs={msgList} />
                    </div>
                </div>
            </DraggablePanel>
        </>
    );
};

export default Monitor;