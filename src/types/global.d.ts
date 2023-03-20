import * as PIXI from 'pixi.js';

export declare global {
    interface Window {
        PIXI: typeof PIXI;
        app: PIXI.Application;
        test: any;
    }

    type Nullable<T> = T | null;
};
