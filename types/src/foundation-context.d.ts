import { type IRgbColor } from './common.js';
export interface ILayersInfo {
    name: string;
    color: IRgbColor;
    initial: string;
}
interface ILayersRecord {
    [key: string]: ILayersInfo;
}
export declare const layers: ILayersRecord;
export type TLayers = keyof typeof layers;
export interface IAspectInfo {
    darken: number;
    corners: 'round' | 'square' | 'diagonal';
}
interface IAspectsRecord {
    [key: string]: IAspectInfo;
}
export declare const aspects: IAspectsRecord;
export type TAspects = keyof typeof aspects;
export {};
