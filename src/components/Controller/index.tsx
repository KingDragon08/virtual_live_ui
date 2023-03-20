import { SideSheet, Collapse } from '@douyinfe/semi-ui';
import { IconSetting } from '@douyinfe/semi-icons';
import { useContext, useState, useEffect } from 'react';
import Style from './index.module.scss';
import Background from './Background';
import Model from './Model';
import Motion from './Motion';
import Expresstion from './Expression';
import Selector from './Selector';
import Audios from './Audios';
import { AppContext } from 'Provider';
import models from '@consts/model_list.json';
import { CascaderData } from "@douyinfe/semi-ui/lib/es/cascader";
import Chatgpt from './Chatgpt';
import Live from './Live';

export const Controller = () => {
    const [visible, setVisible] = useState<boolean>(false);
    const context = useContext(AppContext);

    useEffect(() => {
        document.onkeydown = (e) => {
            const index = (models as CascaderData[]).findIndex((item) => item.value === context?.modelPath);
            if (e.code === 'ArrowDown') {
                const path = (models as CascaderData[])[index + 1].value as string;
                context?.loadModel(path);
            }
            if (e.code === 'ArrowUp') {
                const path = (models as CascaderData[])[index - 1].value as string;
                context?.loadModel(path);
            }
        }
        return () => { document.onkeydown = null };
    }, [context]);

    return (
        <>
            <IconSetting className={Style.setting} onClick={() => setVisible(true)} />
            <SideSheet size="medium" visible={visible} title="设置" mask={false} onCancel={() => setVisible(false)}>
                <Collapse>
                    <Collapse.Panel header="背景" itemKey='background'>
                        <Background />
                    </Collapse.Panel>
                    <Collapse.Panel header="模型" itemKey='model'>
                        <Model />
                    </Collapse.Panel>
                    <Collapse.Panel header="动作" itemKey='motion'>
                        <Motion />
                    </Collapse.Panel>
                    <Collapse.Panel header="表情" itemKey='expression'>
                        <Expresstion />
                    </Collapse.Panel>
                    <Collapse.Panel header="Live2DSelector" itemKey='Live2DSelector'>
                        <Selector />
                    </Collapse.Panel>
                    <Collapse.Panel header="语音合成" itemKey='audio'>
                        <Audios />
                    </Collapse.Panel>
                    <Collapse.Panel header="Chatgpt" itemKey='chatgpt'>
                        <Chatgpt />
                    </Collapse.Panel>
                    <Collapse.Panel header="直播" itemKey='live'>
                        <Live />
                    </Collapse.Panel>
                </Collapse>
            </SideSheet>
        </>
    );
};

export default Controller;
