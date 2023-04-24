import DraggablePanel from '@components/DraggablePanel';
import { IconTiktokLogo } from '@douyinfe/semi-icons'
import Style from './index.module.scss';
import { useState, useEffect, useRef } from 'react';
import { Button, Input, Notification } from '@douyinfe/semi-ui';
import Msgs from './msgs';
import { MessageOrigin, PushFrame, Response } from './types';
import { bus, EVENTS } from '@hooks/useEventBus';
import { inflate } from 'pako';
import { cloneDeep } from 'lodash';

const MAX_CACHED_MSGS_LENGTH = 20;
let intervalId: any = -1;

export const Monitor = () => {
    const PushFramePB = window.PB.lookupType('douyin.PushFrame');
    const ResponsePB = window.PB.lookupType('douyin.Response');
    const [visible, setVisible] = useState<boolean>(false);
    const [url, setUrl] = useState<string>('');
    const wssRef = useRef<Nullable<WebSocket>>(null);
    const [msgList, _setMsgList] = useState<MessageOrigin[]>([]);
    const [monitoring, setMonitoring] = useState<boolean>(false);
    const msgListRef = useRef(msgList);
    const setMsgList = (msgs: MessageOrigin[]) => {
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
            wssRef.current = new WebSocket(url);
            setMonitoring(true);
            // wssRef.current.binaryType = "arraybuffer";

            wssRef.current.addEventListener("message", function (e) {
                const reader = new FileReader();
                reader.readAsArrayBuffer(e.data);
                reader.onload = function () {
                    const buf = new Uint8Array(reader.result as ArrayBuffer);
                    const frame = PushFramePB.decode(buf) as unknown as PushFrame;
                    const { logId, payload } = frame;
                    const decompressed = inflate(payload);
                    const response = ResponsePB.decode(decompressed) as unknown as Response;
                    if (response.needAck) {
                        // @ts-ignore
                        const frame: PushFrame = {
                            logId,
                            headersList: [],
                            payloadType: response.internalExt,
                        };
                        wssRef.current?.send(PushFramePB.encode(frame).finish())
                    }
                    const tmp = cloneDeep(msgListRef.current);
                    response.messagesList.forEach((msg) => {
                        bus.emit(EVENTS.ON_RECIEVE_MSG, msg);
                        if (tmp.length < MAX_CACHED_MSGS_LENGTH) {
                            tmp.unshift(msg);
                        } else {
                            tmp.pop();
                            tmp.unshift(msg);
                        }
                    });
                    setMsgList(tmp);
                };
            })

            wssRef.current.addEventListener("open", function () {
                intervalId = setInterval(() => {
                    // @ts-ignore
                    const frame: PushFrame = {
                        payloadType: 'hb',
                    };
                    wssRef.current?.send(PushFramePB.encode(frame).finish());
                }, 1000);
            });

            wssRef.current.addEventListener("close", function (e) {
                console.log("close", e)
                setMonitoring(false);
                clearInterval(intervalId);
            })

            wssRef.current.addEventListener("error", function (e) {
                console.log("error=>", e)
                Notification.error({ title: '错误', content: '监控停止' });
                setMonitoring(false);
                clearInterval(intervalId);
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