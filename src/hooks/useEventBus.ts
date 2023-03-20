import { EventEmitter } from 'events';

export const bus = new EventEmitter();

export enum EVENTS {
    ON_RECIEVE_MSG = 'ON_RECIEVE_MSG',
};