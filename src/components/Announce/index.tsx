import DraggablePanel from "@components/DraggablePanel";
import { IconHorn } from "@douyinfe/semi-icons";
import { useState } from "react";
import Style from "./index.module.scss";

export const Announce = () => {
    const [visible, setVisible] = useState<boolean>(false);
    
    return (
        <>
            <IconHorn className={Style.announce} onClick={() => setVisible(!visible)} />
            <DraggablePanel title="公告" width={200} height={240} style={{ display: visible ? 'flex' : 'none', left: '620px' }}>
                <div className={Style.container} contentEditable></div>
            </DraggablePanel>
        </>
    );
}

export default Announce;