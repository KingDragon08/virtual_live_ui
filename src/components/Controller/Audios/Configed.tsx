import { Select } from "@douyinfe/semi-ui";

type Props  = {
    value: string;
    onChange: (v: string[]) => void;
}
export const Configed = ({ onChange: _onChange, value }: Props) => {
    const onChange = (v: string) => {
        const [voice, style, speed, pitch] = v.split('_');
        _onChange([voice, style, speed, pitch, v]);
    }

    return (
        <Select
            placeholder="预配置"
            style={{ width: '100%' }}
            value={value}
            onChange={(v) => onChange(v as string)}
        >
            <Select.Option value="zh-CN-XiaoxiaoNeural_cheerful_1.1_0">晓晓_cheerful_1.1_0</Select.Option>
            <Select.Option value="zh-CN-XiaochenNeural_cheerful_1.1_0.1">晓辰_cheerful_1.1_0.1</Select.Option>
            <Select.Option value="zh-CN-XiaoshuangNeural_gentle_1.15_-0.1">晓双_gentle_1.15_-0.1</Select.Option>
            <Select.Option value="zh-CN-XiaoyouNeural_cheerful_1.15_0">晓悠_cheerful_1.15_0</Select.Option>
            <Select.Option value="zh-CN-YunxiaNeural_gentle_1.1_0.1">云夏_gentle_1.1_0.1</Select.Option>
            <Select.Option value="zh-CN-YunxiNeural_cheerful_1_0">云希_cheerful_1_0</Select.Option>
            <Select.Option value="zh-CN-XiaomengNeural_cheerful_1.1_0.1">晓梦_cheerful_1.1_0.1</Select.Option>
            
        </Select>
    );
}

export default Configed;