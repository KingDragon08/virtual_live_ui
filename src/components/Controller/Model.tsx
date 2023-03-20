import { Checkbox, CheckboxGroup, Slider, InputNumber } from "@douyinfe/semi-ui";
import { useContext } from 'react';
import { AppContext } from "Provider";

export const Model = () => {
    const context = useContext(AppContext);

    const onChange = (v: string[]) => {
        context?.setDebug(v);
        if (v.includes('hitAreaFrames')) {
            context?.showHitAreaFrames();
        } else {
            context?.hideHitAreaFrames();
        }
        if (v.includes('modelRect')) {
            context?.showModelRect();
        } else {
            context?.hideModelRect();
        }
    };

    return (
        <>
            <CheckboxGroup type="pureCard" defaultValue={[]} value={context?.debug} onChange={onChange}>
                <Checkbox value="hitAreaFrames">Hit area frames</Checkbox>
                <Checkbox value="modelRect">Model rect</Checkbox>
                <Checkbox value="scale">
                    缩放
                    <Slider
                        step={0.05}
                        min={0}
                        max={3}
                        value={context?.scale}
                        onChange={(v) => context?.setScale(v as number)}
                        style={{ width: '300px' }}
                    />
                    <InputNumber
                        min={0}
                        max={3}
                        step={0.05}
                        value={context?.scale}
                        onChange={(v) => context?.setScale(v as number)}
                    />
                </Checkbox>
            </CheckboxGroup>

        </>
    );
};

export default Model;
