// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './common.js'
import type { IRgbColor } from './common.js'
import type { TLangString } from 'foundation-lang-strings.js'

// --- resource ---

// --- view ---


export interface ICoordinates {
	x: number // x coordinate starting at top left
	y: number // y coordinate starting at top left
}

export interface IDimensions {
	w: number // width
	h: number // height
}

export interface IFont {
	fontName?: string // font name, if absent, use default
	fontSize?: number // font size, if absent, use default
	fontColor?: IRgbColor // font color, if absent, use default
}

export interface IStyle {
	font?: IFont
	lineColor?: IRgbColor // if absent, use default
	fillColor?: IRgbColor // if absent, use default
}

// --- nodes ---
export type TNodeTypes = 'Element' | 'Container' | 'Label'

export interface INodeInfo extends ICoordinates, IDimensions, IStyle {
	elementRef?: IRI
	type?: TNodeTypes
	// TODO - use ILabel interface, but make it optional
	label?: TLangString
}

// --- connections ---
export type TConnectionTypes = 'Line' | 'Relationship'

export interface IConnectionInfo extends IStyle {
	// type: Identifier // TODO - what is it for?
	source: IRI
	target: IRI
	relationshipRef?: IRI
	bendpoints?: ICoordinates[]
	type: TConnectionTypes
}

// TODO - add viewRef

export interface IDiagram {
	nodes?: Record<IRI, INodeInfo>
	connections?: Record<IRI, IConnectionInfo>
}

export interface IViewInfo {
	viewpoint?: IRI
	diagram: IDiagram
}

// --- image ---
export interface IImageInfo {
	location: IRI
}
