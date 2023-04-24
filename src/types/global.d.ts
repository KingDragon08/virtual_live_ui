import * as PIXI from 'pixi.js';
import type { Root } from 'protobufjs';

export declare global {
    interface Window {
        PIXI: typeof PIXI;
        app: PIXI.Application;
        test: any;
        PB: Root;
    }

    type Nullable<T> = T | null;
};
