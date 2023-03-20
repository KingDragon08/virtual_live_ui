import { Radio, RadioGroup } from '@douyinfe/semi-ui';
import Label from '@douyinfe/semi-ui/lib/es/form/label';
import { ReplyCondition } from '@hooks/useApp';
import { AppContext } from 'Provider';
import { useContext } from 'react';

export const Live = () => {
    const { replyCondition, setReplyCondition } = useContext(AppContext);
    
    return (
        <>
            <Label style={{ margin: '8px 0' }}>问题答复</Label>
            <RadioGroup
                type="button"
                buttonSize="middle"
                defaultValue={replyCondition}
                value={replyCondition}
                onChange={(e) => setReplyCondition(e.target.value)}
            >
                <Radio value={ReplyCondition.None}>无需礼物</Radio>
                <Radio value={ReplyCondition.Any}>任意礼物</Radio>
            </RadioGroup>
        </>
    );
};

export default Live;
