// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './common.js'
import type { IRgbColor } from './common.js'
import type { TLangString } from './foundation-lang-strings.js'

// --- resource ---
export interface ViewInfo {
	viewpoint?: IRI
	items?: Record<IRI, NodeInfo | ConnectionInfo>
}

export interface Coordinates {
	x: number // x coordinate starting at top left
	y: number // y coordinate starting at top left
}

export interface Dimensions {
	w: number // width
	h: number // height
}

export interface Font {
	fontName?: string // font name, if absent, use default
	fontSize?: number // font size, if absent, use default
	fontColor?: IRgbColor // font color, if absent, use default
}

export interface IStyle {
	font?: Font
	lineColor?: IRgbColor // if absent, use default
	fillColor?: IRgbColor // if absent, use default
}

interface Label {
	label: TLangString
}

// --- nodes ---
export type NodeTypes = 'Element' | 'Container' | 'Label'

// TODO - add viewRef

interface NodeInfoBase extends Coordinates, Dimensions, IStyle {
	type?: NodeTypes
}

export interface ElementNodeInfo extends NodeInfoBase {
	type: 'Element'
	elementRef: IRI
	label?: TLangString
}

export interface ContainerNodeInfo extends NodeInfoBase {
	type: 'Container'
	viewRef: IRI
	label?: TLangString
}

export interface LabelNodeInfo extends NodeInfoBase, Label {
	type: 'Label'
}

export type NodeInfo = ElementNodeInfo | ContainerNodeInfo | LabelNodeInfo

// --- connections ---
export type ConnectionTypes = 'Line' | 'Relationship'

interface ConnectionInfoBase extends IStyle {
	type?: ConnectionTypes
	sourceNode: IRI
	targetNode: IRI
	bendpoints?: Coordinates[]
}

export interface LineConnectionInfo extends ConnectionInfoBase, Label {
	type: 'Line'
}

export interface RelationshipConnectionInfo extends ConnectionInfoBase {
	type: 'Relationship'
	relationshipRef: IRI
}

export type ConnectionInfo = LineConnectionInfo | RelationshipConnectionInfo
