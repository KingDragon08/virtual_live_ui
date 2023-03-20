import { TextArea, Button } from '@douyinfe/semi-ui';
import { useState } from 'react';
import { chatgpt } from '@services/index';

export const Chatgpt = () => {
    const [question, setQuestion] = useState<string>('');
    const [answer, setAnswer] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);

    const go = () => {
        if (question.trim().length < 6) {
            return;
        }
        setLoading(true);
        chatgpt({
            msg: question.trim(),
            cid: window.localStorage.getItem('cid'),
            pid: window.localStorage.getItem('pid'),
        }).then(({ data }) => {
            const { cid, pid, text } = data;
            window.localStorage.setItem('cid', cid);
            window.localStorage.setItem('pid', pid);
            setAnswer(text);
        }).finally(() => setLoading(false));
    }

    return (
        <>
            <TextArea
                placeholder="提问, 最少 6 个字, 最多 400 字"
                value={question}
                onChange={(v) => setQuestion(v)}
                autosize
                maxCount={400}
                style={{ marginTop: '13px' }}
            />
            <TextArea placeholder="回答" value={answer} autosize style={{ marginTop: '13px' }} />
            <div style={{ display: 'flex', marginTop: '13px', alignItems: 'center' }}>
                <Button loading={loading} theme='solid' style={{ marginRight: '8px' }} onClick={go}>发送</Button>
            </div>
        </>
    );
};

export default Chatgpt;