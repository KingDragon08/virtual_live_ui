import { DEFAULT_MODEL_PATH } from "@hooks/useModel";
import { AppContext } from "Provider";
import { useContext, useEffect, useRef } from "react";

export const Draw = () => {
    const ref = useRef<HTMLCanvasElement | null>(null);
    const context = useContext(AppContext);

    useEffect(() => {
        if (ref.current) {
          const app = new window.PIXI.Application({ view: ref.current, resizeTo: window, backgroundAlpha: 0 });
          window.app = app;
          context?.loadModel(DEFAULT_MODEL_PATH);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div className='App' style={{ backgroundImage: `url(${context?.scene})` }}>
            <canvas ref={ref} />
        </div>
    );
};

export default Draw;