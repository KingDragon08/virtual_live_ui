import { Live2DModel, MotionPreloadStrategy } from 'pixi-live2d-display';
import { useRef, useState } from 'react';
// @ts-ignore
import { HitAreaFrames } from 'pixi-live2d-display/extra';
import { random } from 'lodash';

type DraggableLive2DModel = Live2DModel & {
    dragging?: boolean;
    _pointerX?: number;
    _pointerY?: number;
};

export const DEFAULT_MODEL_PATH = '/assets/models/崩坏学园2/yiselin/model.json';

export const useModel = () => {
    const modelRef = useRef<Nullable<DraggableLive2DModel>>(null);
    const hitAreaFrames = useRef(new HitAreaFrames());
    const modelRect = useRef(window.PIXI.Sprite.from(window.PIXI.Texture.WHITE));
    const [modelPath, setModelPath] = useState<string>(DEFAULT_MODEL_PATH);
    const [scale, setScale] = useState<number>(0);

    const loadModel = async (modelPath: string) => {
        if (modelRef.current) {
            window.app.stage.removeChildren();
            modelRef.current = null;
        }
        const model = await Live2DModel.from(modelPath, { motionPreload: MotionPreloadStrategy.ALL }) as DraggableLive2DModel;
        // const model = await Live2DModel.from(modelPath, { motionPreload: MotionPreloadStrategy.ALL }) as DraggableLive2DModel;
        modelRef.current = model;
        window.app.stage.addChild(model);
        setModelPath(modelPath);
        const { originalWidth, originalHeight } = model.internalModel;
        const viewport = [
            window.visualViewport?.offsetLeft || 0,
            window.visualViewport?.offsetTop || 0,
            window.visualViewport?.width || 1280,
            window.visualViewport?.height || 720,
        ];
        const scaleX = viewport[2] / originalWidth / 3;
        const scaleY = viewport[3] / originalHeight / 2;
        const scale = originalHeight * scaleX > viewport[3] ? scaleY : scaleX;
        setScale(scale);
        model.x = (viewport[2] - originalWidth * scale) / 2;
        model.y = viewport[3] - originalHeight * scale;
        model.scale.set(scale, scale);
        model.anchor.set(0, 0);
        // hit area frames
        hitAreaFrames.current.visible = false;
        model.addChild(hitAreaFrames.current);
        // model foreground
        modelRect.current.width = model.internalModel.width;
        modelRect.current.height = model.internalModel.height;
        modelRect.current.alpha = 0.5;
        modelRect.current.visible = false;
        model.addChild(modelRect.current);
        // draggable
        model.buttonMode = true;
        model.on("pointerdown", (e) => {
            model.dragging = true;
            model._pointerX = e.data.global.x - model.x;
            model._pointerY = e.data.global.y - model.y;
        });
        model.on("pointermove", (e) => {
            if (model.dragging) {
                model.position.x = e.data.global.x - (model?._pointerX || 0);
                model.position.y = e.data.global.y - (model?._pointerY || 0);
            }
        });
        model.on("pointerupoutside", () => (model.dragging = false));
        model.on("pointerup", () => (model.dragging = false));
        window.onresize = (e) => {
            loadModel(modelPath);
        }
    };

    const randomMotion = () => {
        if (!modelRef.current) {
            return;
        }
        const motions = Object.keys(modelRef.current.internalModel.motionManager.definitions);
        if (motions.length < 1) {
            return;
        }
        const name = motions[random(0, motions.length, false)];
        // console.log('motion', name);
        modelRef.current.motion(name);
    };

    return {
        model: modelRef,
        modelPath,
        scale,
        setScale: (v: number) => { setScale(v); modelRef.current?.scale.set(v, v) },
        loadModel,
        resetModel: () => loadModel(DEFAULT_MODEL_PATH),
        showHitAreaFrames: () => hitAreaFrames.current.visible = true,
        hideHitAreaFrames: () => hitAreaFrames.current.visible = false,
        showModelRect: () => modelRect.current.visible = true,
        hideModelRect: () => modelRect.current.visible = false,
        randomMotion,
    };
};

export default useModel;
