import { Message } from "../types";
import Style from './index.module.scss';
import { Typography, Avatar } from '@douyinfe/semi-ui';

export type Props = {
    msg: Message;
};

const { Text } = Typography;

export const WebcastMemberMessage = ({ msg }: Props) => {
    return (
        <div className={Style.msg}>
            <Avatar size="small" alt={msg.user?.nickName} src={msg.user?.AvatarThumb.urlListList[0]} style={{ margin: 4 }} />
            <Text ellipsis={{ showTooltip: { opts: { content: msg.user?.nickName } } }} style={{ width: 220 }}>
                {`${msg.user?.nickName}:来了`}
            </Text>
        </div>
    );
};

export default WebcastMemberMessage;