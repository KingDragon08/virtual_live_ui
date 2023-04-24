import { MessageOrigin, Method } from "../types";
import WebcastChatMessage from "./WebcastChatMessage";
import WebcastGiftMessage from "./WebcastGiftMessage";
import WebcastLikeMessage from "./WebcastLikeMessage";
import WebcastMemberMessage from "./WebcastMemberMessage";
import WebcastUpdateFanTicketMessage from "./WebcastUpdateFanTicketMessage";
import useOriginMsg2Msg from "./useOriginMsg2Msg";

type Props = {
    msgs: MessageOrigin[];
}

export const Msgs = ({ msgs }: Props) => {
    const { transform } = useOriginMsg2Msg();

    const renderMsg = (msg: MessageOrigin) => {
        switch (msg.method) {
            // 文字消息
            case Method.WebcastChatMessage:
                return <WebcastChatMessage msg={transform(msg)} key={msg.msgId} />;
            // 礼物消息
            case Method.WebcastGiftMessage:
                return <WebcastGiftMessage msg={transform(msg)} key={msg.msgId} />;
            // 点赞消息
            case Method.WebcastLikeMessage:
                return <WebcastLikeMessage msg={transform(msg)} key={msg.msgId} />;
            // 观众进入消息
            case Method.WebcastMemberMessage:
                return <WebcastMemberMessage msg={transform(msg)} key={msg.msgId} />;
            // 粉丝变化消息, 暂不处理
            case Method.WebcastUpdateFanTicketMessage:
                return <WebcastUpdateFanTicketMessage msg={transform(msg)} key={msg.msgId} />;
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
