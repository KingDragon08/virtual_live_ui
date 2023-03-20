import { useContext, useRef, useState } from 'react';
import { BASE_URL } from '@utils/axios';
import { AppContext } from 'Provider';
import { voiceGen } from '@services/index';

export const useAudio = () => {
    const {
        voice, setVoice,
        style, setStyle,
        speed, setSpeed,
        pitch, setPitch,
    } = useContext(AppContext);
    const [text, setText] = useState<string>('');
    const [src, setSrc] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [loop, setLoop] = useState<boolean>(false);
    const audioRef = useRef<Nullable<HTMLAudioElement>>(null);

    const gen = () => {
        if (!text) {
            return;
        }
        setLoading(true);
        voiceGen(
            {
                text,
                voice,
                style,
                speed,
                pitch,
            }
        ).then((data) => {
            const path = data?.data?.path;
            setSrc(`${BASE_URL}${path}`);
            if (!audioRef.current) return;
            // @ts-ignore
            audioRef.current.oncanplay = () => {
                audioRef.current!.play();
            };
        }).catch((err) => {
            console.log(err);
        }).finally(() => setLoading(false));
    };

    return {
        voice, setVoice,
        style, setStyle,
        speed, setSpeed,
        pitch, setPitch,
        text, setText,
        src, setSrc,
        loading, setLoading,
        loop, setLoop,
        audioRef,
        gen,
    }
};

export default useAudio;