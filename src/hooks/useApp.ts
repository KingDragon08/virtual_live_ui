import { useState } from "react";
import { backgroundOptions } from '@components/Controller/Background';
import useModel from "./useModel";

export enum ReplyCondition {
  Any = 'Any',
  None = 'None'
};

export const useApp = () => {
  const [scene, setScene] = useState<string>(backgroundOptions[0]);
  const model = useModel();
  // 模型 debug 框， hitAreaFrames 和前景控制
  const [debug, setDebug] = useState<string[]>();
  // 语音配置相关
  const [preConfigedVoice, setPreConfigedVoice] = useState<string>('zh-CN-XiaoxiaoNeural_cheerful_1.1_0');
  const [voice, setVoice] = useState<string>('zh-CN-XiaoxiaoNeural');
  const [style, setStyle] = useState<string>('cheerful');
  const [speed, setSpeed] = useState<number>(1);
  const [pitch, setPitch] = useState<number>(0);
  // 口播
  const [defaultAudioSrc, setDefaultAudioSrc] = useState<string>('');
  // 问题答复礼物
  const [replyCondition, setReplyCondition] = useState<ReplyCondition>(ReplyCondition.None);

    return {
        ...model,
        scene,
        setScene,
        debug,
        setDebug,
        voice, setVoice,
        style, setStyle,
        speed, setSpeed,
        pitch, setPitch,
        defaultAudioSrc, setDefaultAudioSrc,
        replyCondition, setReplyCondition,
        preConfigedVoice, setPreConfigedVoice,
    };
};

export default useApp;
