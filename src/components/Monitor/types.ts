export type Message = {
    code?: number;
    msg?: string;
    common?: Common;
    user?: User;
    content?: string; // 文字消息时的文字
    giftId?: string; // 送礼物时的礼物 id
    groupCount?: string; // 送礼时的数量
    repeatCount?: string; // 送礼时的数量
    comboCount?: string; // 送礼时的数量
    gift?: Gift; // 礼物
    count?: string; // 点赞次数
    total?: string; // 点赞总次数
};

export type Common = {
    method: Method;
    msgId: string;
    roomId: string;
    describe?: string; // 送礼物时的描述信息
    createTime?: string; // 送礼物时的时间戳
};

export enum Method {
    WebcastChatMessage = 'WebcastChatMessage',
    WebcastLikeMessage = 'WebcastLikeMessage',
    WebcastMemberMessage = 'WebcastMemberMessage',
    WebcastGiftMessage = 'WebcastGiftMessage',
    WebcastUpdateFanTicketMessage = 'WebcastUpdateFanTicketMessage',
};

export type User = {
    id: string;
    shortId: string;
    nickName: string;
    gender: Gender;
    AvatarThumb: AvatarThumb;
    displayId: string;
    secUid: string;
}

export enum Gender {
    Male = 1,
    FeMale = 2,
}

export type AvatarThumb = {
    urlListList: string[];
}

export type Gift = {
    image: AvatarThumb;
    describe: string;
    id: string;
    name: string;
}


