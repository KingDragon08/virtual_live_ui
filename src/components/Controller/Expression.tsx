import { Radio, RadioGroup } from "@douyinfe/semi-ui";
import { AppContext } from "Provider";
import { useContext, useMemo } from "react";

export const Expresstion = () => {
    const context = useContext(AppContext);
    const expressions = useMemo(() => {
        return context?.model.current?.internalModel.motionManager.expressionManager?.definitions || [];
    }, [context]);

    const play = (index: number) => {
        context?.model.current?.expression(index);
    };

    return (
        <RadioGroup
            type="pureCard"
            defaultValue="/assets/imgs/bg-1.jpg"
            direction="vertical"
            onChange={(e) => play(e.target.value)}
            value={context?.scene}
        >
            {!!expressions && expressions.map((item, index) => (
                <Radio value={index} key={index}>
                {`播放表情【${item.name}】`}
                </Radio>
            ))}
        </RadioGroup>
    );
};

export default Expresstion;