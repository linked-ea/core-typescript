import type { IRI } from './common.js';
import type { IRgbColor } from './common.js';
import type { TLangString } from './foundation-lang-strings.js';
export interface ViewInfo {
    viewpoint?: IRI;
    items?: Record<IRI, NodeInfo | ConnectionInfo>;
}
export interface Coordinates {
    x: number;
    y: number;
}
export interface Dimensions {
    w: number;
    h: number;
}
export interface Font {
    fontName?: string;
    fontSize?: number;
    fontColor?: IRgbColor;
}
export interface IStyle {
    font?: Font;
    lineColor?: IRgbColor;
    fillColor?: IRgbColor;
}
interface Label {
    label: TLangString;
}
export type NodeTypes = 'Element' | 'Container' | 'Label';
interface NodeInfoBase extends Coordinates, Dimensions, IStyle {
    type?: NodeTypes;
}
export interface ElementNodeInfo extends NodeInfoBase {
    type: 'Element';
    elementRef: IRI;
    label?: TLangString;
}
export interface ContainerNodeInfo extends NodeInfoBase {
    type: 'Container';
    viewRef: IRI;
    label?: TLangString;
}
export interface LabelNodeInfo extends NodeInfoBase, Label {
    type: 'Label';
}
export type NodeInfo = ElementNodeInfo | ContainerNodeInfo | LabelNodeInfo;
export type ConnectionTypes = 'Line' | 'Relationship';
interface ConnectionInfoBase extends IStyle {
    type?: ConnectionTypes;
    sourceNode: IRI;
    targetNode: IRI;
    bendpoints?: Coordinates[];
}
export interface LineConnectionInfo extends ConnectionInfoBase, Label {
    type: 'Line';
}
export interface RelationshipConnectionInfo extends ConnectionInfoBase {
    type: 'Relationship';
    relationshipRef: IRI;
}
export type ConnectionInfo = LineConnectionInfo | RelationshipConnectionInfo;
export {};
