import Voice from './Voice';
import Style from './Style';
import Speed from './Speed';
import Pitch from './Pitch';
import { TextArea, Button } from '@douyinfe/semi-ui';
import useAudio from './useAudio';
import Configed from './Configed';
import { AppContext } from 'Provider';
import { useContext } from 'react';

export const Audios = () => {
    const {
        voice, setVoice,
        style, setStyle,
        speed, setSpeed,
        pitch, setPitch,
        text, setText,
        src,
        loading,
        loop, setLoop,
        audioRef,
        gen,
    } = useAudio();
    const { setDefaultAudioSrc } = useContext(AppContext);
    

    return (
        <>
            <Configed onChange={([voice, style, speed, pitch]) => {
                setVoice(voice);
                setStyle(style);
                setSpeed(parseFloat(speed));
                setPitch(parseFloat(pitch));
            }} />
            <div style={{ height: '13px' }}></div>
            <Voice value={voice} onChange={setVoice} />
            <div style={{ height: '13px' }}></div>
            <Style value={style} onChange={setStyle} />
            <Speed value={speed} onChange={setSpeed} />
            <Pitch value={pitch} onChange={setPitch} />
            <TextArea value={text} onChange={(v) => setText(v)} autosize maxCount={1000} style={{ marginTop: '13px' }} />
            <div style={{ display: 'flex', marginTop: '13px', alignItems: 'center' }}>
                <Button loading={loading} theme='solid' style={{ marginRight: '8px' }} onClick={gen}>合成</Button>
                <Button disabled={!src} theme='solid' type='warning' style={{ marginRight: '8px' }} onClick={() => setLoop(!loop)}>{loop ? '取消' : ''}循环播放</Button>
                <Button
                    disabled={!src}
                    theme='solid'
                    type='warning'
                    style={{ marginRight: '8px' }}
                    onClick={() => setDefaultAudioSrc(src)}
                >
                    设定口播
                </Button>
                <audio ref={audioRef} controls src={src} loop={loop} />
            </div>
        </>
    );
};

export default Audios;