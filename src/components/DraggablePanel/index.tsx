import Style from './index.module.scss';
import { useRef, useState } from 'react';
import type { PropsWithChildren } from 'react';

export type Props = {
    width?: number;
    height?: number;
    style?: Object;
    title: string;
};

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

export const DraggablePanel = ({ children, title = '', width = 200, height = 200, style = {} }: PropsWithChildren<Props>) => {
    const ref = useRef<HTMLDivElement|null>(null);
    const [collapsed, setCollapse] = useState<boolean>(false);

    const onMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = onMouseUp;
        document.onmousemove = onMouseMove;
    };

    const onMouseUp = (e: MouseEvent) => {
        document.onmouseup = null;
        document.onmousemove = null;
    };

    const onMouseMove = (e: MouseEvent) => {
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        if (!ref.current) return;
        const top = (ref.current.offsetTop - pos2) > 0 ? (ref.current.offsetTop - pos2) : 0;
        const left = (ref.current.offsetLeft - pos1) > 0 ? (ref.current.offsetLeft - pos1) : 0;
        ref.current.style.top = top + 'px';
        ref.current.style.left = left + 'px';
    };

    return (
        <div ref={ref} className={[Style.panel, collapsed ? Style.collapsed : ''].join(' ')} style={{ width, height, ...style }}>
            <div className={Style.title} onMouseDown={onMouseDown}>
                {title}
                <div className={Style.collapser} onClick={() => setCollapse(!collapsed)}>
                    {collapsed ? '展开' : '收起'}
                </div>
            </div>
            <div className={Style.content}>
                {children}
            </div>
        </div>
    );
};

export default DraggablePanel;
