import { useCallback } from "react";
import { Message, MessageOrigin, Method } from "../types";

export default function useOriginMsg2Msg() {
    const transform = useCallback((msg: MessageOrigin): Message => {
        switch (msg.method) {
            // 文字消息
            case Method.WebcastChatMessage:
                const ChatMessagePB = window.PB.lookupType("douyin.ChatMessage");
                return ChatMessagePB.decode(msg.payload) as unknown as Message;
            // 礼物消息
            case Method.WebcastGiftMessage:
                const GiftMessagePB = window.PB.lookupType("douyin.GiftMessage");
                return GiftMessagePB.decode(msg.payload) as unknown as Message;
            // 点赞消息
            case Method.WebcastLikeMessage:
                const LikeMessagePB = window.PB.lookupType("douyin.LikeMessage");
                return LikeMessagePB.decode(msg.payload) as unknown as Message;
            // 观众进入消息
            case Method.WebcastMemberMessage:
                const MemberMessagePB = window.PB.lookupType("douyin.MemberMessage");
                return MemberMessagePB.decode(msg.payload) as unknown as Message;
            // 粉丝变化消息, 暂不处理
            case Method.WebcastUpdateFanTicketMessage:
                const UpdateFanTicketMessagePB = window.PB.lookupType("douyin.UpdateFanTicketMessage");
                return UpdateFanTicketMessagePB.decode(msg.payload) as unknown as Message;
            // 粉丝变化消息, 暂不处理
            // 其他情况
            default:
                // console.log('unknown msg', msg.common?.method);
                return { code: 1 } as Message;
        }
    }, []);

    return { transform };
}