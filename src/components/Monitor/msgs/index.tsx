import { Message, Method } from "../types";
import WebcastChatMessage from "./WebcastChatMessage";
import WebcastGiftMessage from "./WebcastGiftMessage";
import WebcastLikeMessage from "./WebcastLikeMessage";
import WebcastMemberMessage from "./WebcastMemberMessage";
import WebcastUpdateFanTicketMessage from "./WebcastUpdateFanTicketMessage";

type Props = {
    msgs: Message[];
}

export const Msgs = ({ msgs }: Props) => {

    const renderMsg = (msg: Message) => {
        switch (msg.common?.method) {
            // 文字消息
            case Method.WebcastChatMessage:
                return <WebcastChatMessage msg={msg} key={msg.common.msgId} />;
            // 礼物消息
            case Method.WebcastGiftMessage:
                return <WebcastGiftMessage msg={msg} key={msg.common.msgId} />;
            // 点赞消息
            case Method.WebcastLikeMessage:
                return <WebcastLikeMessage msg={msg} key={msg.common.msgId} />;
            // 观众进入消息
            case Method.WebcastMemberMessage:
                return <WebcastMemberMessage msg={msg} key={msg.common.msgId} />;
            // 粉丝变化消息, 暂不处理
            case Method.WebcastUpdateFanTicketMessage:
                return <WebcastUpdateFanTicketMessage msg={msg} key={msg.common.msgId} />;
            // 其他情况
            default:
                // console.log('unknown msg', msg.common?.method);
                break;
        }
    };

    return (
        <div>
            {msgs.map((item) => renderMsg(item))}
        </div>
    );
};

export default Msgs;
