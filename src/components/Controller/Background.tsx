import { RadioGroup, Radio } from "@douyinfe/semi-ui";
import { useContext } from 'react';
import { AppContext } from "Provider";

export const backgroundOptions = [
    "/assets/imgs/bg-1.png",
    "/assets/imgs/bg-2.png",
    "/assets/imgs/bg-3.png",
    "/assets/imgs/bg-4.png",
    "/assets/imgs/bg-5.png",
    "/assets/imgs/bg-6.png",
    "/assets/imgs/bg-7.jpg",
    "/assets/imgs/bg-8.png",
    "/assets/imgs/bg-9.jpg",
    "/assets/imgs/bg-10.jpg",
    "/assets/imgs/bg-11.jpg",
    "/assets/imgs/bg-12.jpg",
];

export const Background = () => {
    const context = useContext(AppContext);
    return (
        <RadioGroup
            type="pureCard"
            defaultValue="/assets/imgs/bg-1.png"
            direction="vertical"
            onChange={(e) => context?.setScene(e.target.value)}
            value={context?.scene}
        >
            {backgroundOptions.map((item) => (
                <Radio value={item} key={item}>
                    <img src={item} width="100" alt={item} />
                </Radio>
            ))}
        </RadioGroup>
    );
};

export default Background;
