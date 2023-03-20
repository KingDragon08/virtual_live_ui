import { Message } from "../types";
import Style from './index.module.scss';
import { Typography, Avatar } from '@douyinfe/semi-ui';

export type Props = {
    msg: Message;
};

const { Text } = Typography;

export const WebcastGiftMessage = ({ msg }: Props) => {
    return (
        <div className={Style.msg}>
            <Avatar size="small" alt={msg.user?.nickName} src={msg.user?.AvatarThumb.urlListList[0]} style={{ margin: 4 }} />
            <Text ellipsis={{ showTooltip: { opts: { content: msg.common?.describe } } }} style={{ width: 220 }}>
                {msg.common?.describe}
            </Text>
            <Avatar size="small" alt={msg.gift?.describe} src={msg.gift?.image.urlListList[0]} />
        </div>
    );
};

export default WebcastGiftMessage;