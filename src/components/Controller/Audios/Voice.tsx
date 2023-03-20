import { Select } from "@douyinfe/semi-ui";

type Props  = {
    value: string;
    onChange: (v: string) => void;
}
export const Voice = ({ value, onChange }: Props) => {
    return (
        <Select value={value} style={{ width: '100%' }} onChange={(v) => onChange(v as string)}>
            <Select.Option value="zh-CN-XiaoxiaoNeural">Xiaoxiao (Neural) - 晓晓</Select.Option>
            <Select.Option value="zh-CN-YunyangNeural">Yunyang (Neural) - 云扬</Select.Option>
            <Select.Option value="zh-CN-XiaochenNeural">Xiaochen (Neural) - 晓辰</Select.Option>
            <Select.Option value="zh-CN-XiaohanNeural">Xiaohan (Neural) - 晓涵</Select.Option>
            <Select.Option value="zh-CN-XiaomengNeural">Xiaomeng (Neural) - 晓梦</Select.Option>
            <Select.Option value="zh-CN-XiaomoNeural">Xiaomo (Neural) - 晓墨</Select.Option>
            <Select.Option value="zh-CN-XiaoqiuNeural">Xiaoqiu (Neural) - 晓秋</Select.Option>
            <Select.Option value="zh-CN-XiaoruiNeural">Xiaorui (Neural) - 晓睿</Select.Option>
            <Select.Option value="zh-CN-XiaoshuangNeural">Xiaoshuang (Neural) - 晓双</Select.Option>
            <Select.Option value="zh-CN-XiaoxuanNeural">Xiaoxuan (Neural) - 晓萱</Select.Option>
            <Select.Option value="zh-CN-XiaoyanNeural">Xiaoyan (Neural) - 晓颜</Select.Option>
            <Select.Option value="zh-CN-XiaoyiNeural">Xiaoyi (Neural) - 晓伊</Select.Option>
            <Select.Option value="zh-CN-XiaoyouNeural">Xiaoyou (Neural) - 晓悠</Select.Option>
            <Select.Option value="zh-CN-XiaozhenNeural">Xiaozhen (Neural) - 晓甄</Select.Option>
            <Select.Option value="zh-CN-YunfengNeural">Yunfeng (Neural) - 云枫</Select.Option>
            <Select.Option value="zh-CN-YunhaoNeural">Yunhao (Neural) - 云皓</Select.Option>
            <Select.Option value="zh-CN-YunjianNeural">Yunjian (Neural) - 云健</Select.Option>
            <Select.Option value="zh-CN-YunxiaNeural">Yunxia (Neural) - 云夏</Select.Option>
            <Select.Option value="zh-CN-YunxiNeural">Yunxi (Neural) - 云希</Select.Option>
            <Select.Option value="zh-CN-YunyeNeural">Yunye (Neural) - 云野</Select.Option>
            <Select.Option value="zh-CN-YunzeNeural">Yunze (Neural) - 云泽</Select.Option>
        </Select>
    );
};

export default Voice;
