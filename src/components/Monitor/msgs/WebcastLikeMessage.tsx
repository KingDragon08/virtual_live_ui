import { Message } from "../types";
import Style from './index.module.scss';
import { Typography, Avatar } from '@douyinfe/semi-ui';

export type Props = {
    msg: Message;
};

const { Text } = Typography;

export const WebcastLikeMessage = ({ msg }: Props) => {
    return (
        <div className={Style.msg}>
            <Avatar size="small" alt={msg.user?.nickName} src={msg.user?.AvatarThumb.urlListList[0]} style={{ margin: 4 }} />
            <Text ellipsis={{ showTooltip: { opts: { content: `${msg.user?.nickName}:点赞 [${msg.count}/${msg.total}] 次` } } }} style={{ width: 220 }}>
                {`${msg.user?.nickName}:点赞 [${msg.count}/${msg.total}] 次`}
            </Text>
        </div>
    );
};

export default WebcastLikeMessage;