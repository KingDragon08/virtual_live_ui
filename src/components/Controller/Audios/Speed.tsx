import { Slider, InputNumber } from "@douyinfe/semi-ui";

type Props = {
    value: number;
    onChange: (v: number) => void;
};

export const Speed = ({ value, onChange }: Props) => {
    return (
        <div style={{ width: '100%', display: 'flex', marginTop: '13px' }}>
            语速
            <Slider
                step={0.05}
                min={0}
                max={2}
                value={value}
                onChange={(v) => onChange(v as number)}
                style={{ width: '300px' }}
            />
            <InputNumber
                min={0}
                max={2}
                step={0.05}
                value={value}
                onChange={(v) => onChange(v as number)}
            />
        </div>
    );
};

export default Speed;