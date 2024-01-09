export declare const ArchimateBase = "http://www.opengroup.org/xsd/archimate/3.0/";
export type IRI = string;
export interface IIdentifier {
    identifier: Readonly<IRI>;
}
export interface IAlias {
    alias?: string;
}
export interface IRgbColor {
    r: number;
    g: number;
    b: number;
}
export interface IRgbaColor extends IRgbColor {
    a: number;
}
