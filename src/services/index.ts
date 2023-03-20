import axios from '@utils/axios';

export type ChatgptBody = {
    msg: string;
    cid: string | null;
    pid: string | null;
};
export const chatgpt = (data: ChatgptBody) => {
    return axios.post(
        '/msg',
        data,
    );
};

export type VoiceGenBody = {
    text: string;
    voice?: string;
    style?: string;
    speed?: number;
    pitch?: number;
};
export const voiceGen = (data: VoiceGenBody) => {
    return axios.post(
        'voice/gen',
        data,
    );
};
