import { Select } from "@douyinfe/semi-ui";

type Props  = {
    value: string;
    onChange: (v: string) => void;
}
export const Model = ({ value, onChange }: Props) => {
    return (
        <Select value={value} style={{ width: '100%' }} onChange={(v) => onChange(v as string)}>
            <Select.Option value="general">General</Select.Option>
            <Select.Option value="assistant">Assistant</Select.Option>
            <Select.Option value="chat">Chat</Select.Option>
            <Select.Option value="customerservice">Customer Service</Select.Option>
            <Select.Option value="newscast">Newscast</Select.Option>
            <Select.Option value="affectionate">Affectionate</Select.Option>
            <Select.Option value="angry">Angry</Select.Option>
            <Select.Option value="calm">Calm</Select.Option>
            <Select.Option value="cheerful">Cheerful</Select.Option>
            <Select.Option value="disgruntled">Disgruntled</Select.Option>
            <Select.Option value="fearful">Fearful</Select.Option>
            <Select.Option value="gentle">Gentle</Select.Option>
            <Select.Option value="lyrical">Lyrical</Select.Option>
            <Select.Option value="sad">Sad</Select.Option>
            <Select.Option value="serious">Serious</Select.Option>
            <Select.Option value="poetry-reading">Poetry-reading</Select.Option>
            <Select.Option value="friendly">Friendly</Select.Option>
        </Select>
    );
};

export default Model;
