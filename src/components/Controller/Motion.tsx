import { Radio, RadioGroup } from "@douyinfe/semi-ui";
import { AppContext } from "Provider";
import { useContext, useMemo } from "react";

export const Motion = () => {
    const context = useContext(AppContext);
    const motions = useMemo(() => {
        return context?.model.current?.internalModel.motionManager.definitions || {};
    }, [context]);

    const play = (name: string) => {
        context?.model.current?.motion(name);
    };

    return (
        <RadioGroup
            type="pureCard"
            defaultValue="/assets/imgs/bg-1.jpg"
            direction="vertical"
            onChange={(e) => play(e.target.value)}
            value={context?.scene}
        >
            {!!motions && Object.keys(motions).map((key) => (
                <Radio value={key} key={key}>
                {`播放动作【${key}】`}
                </Radio>
            ))}
        </RadioGroup>
    );
};

export default Motion;