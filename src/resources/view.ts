// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type * as xs from '../common/xs.js'
import type { RGBColorType } from '../types/type-common.js'
import type { LangString } from '../common/lang-strings.js'

// --- resource ---
export interface ViewInfo {
	viewpoint?: xs.IDREF
	items?: Record<xs.IDREF, ViewNodeType | ConnectionInfo>
}

export interface LocationGroup {
	x: xs.positiveInteger // x coordinate starting at top left
	y: xs.positiveInteger // y coordinate starting at top left
}

export interface SizeGroup {
	w: xs.positiveInteger // width
	h: xs.positiveInteger // height
}

export type NonNegativeHalfGranularityDecimal = number // regex [1-9][0-9]*(\.0|\.5)?

export const fontStyleEnum = ['plain', 'bold', 'italic', 'underline'] as const

export type FontStyleEnum = typeof fontStyleEnum[number]

export interface FontType {
	name?: string // font name, if absent, use default
	size?: NonNegativeHalfGranularityDecimal // font size, if absent, use default
	color?: RGBColorType // font color, if absent, use default
	style?: FontStyleEnum
}



export interface StyleType {
	font?: FontType
	lineColor?: RGBColorType // if absent, use default
	fillColor?: RGBColorType // if absent, use default
	lineWidth?: xs.positiveInteger // if absent, use default
}

interface Label {
	label?: LangString
}

// --- nodes ---
export type NodeTypes = 'Element' | 'Container' | 'Label'

// TODO - add viewRef

interface NodeInfoBase extends LocationGroup, SizeGroup, StyleType, Label {
	type?: NodeTypes
	viewRef?: xs.IDREF
}

export interface ElementNodeInfo extends NodeInfoBase {
	type: 'Element'
	elementRef: xs.IDREF
}

export interface ContainerNodeInfo extends NodeInfoBase {
	type: 'Container'
}

export interface LabelNodeInfo extends NodeInfoBase {
	type: 'Label'
}

export type ViewNodeType = ElementNodeInfo | ContainerNodeInfo | LabelNodeInfo

// --- connections ---
export type ConnectionTypes = 'Line' | 'Relationship'

interface ConnectionInfoBase extends StyleType {
	type?: ConnectionTypes
	sourceNode: xs.IDREF // TODO - change to sourceRef
	targetNode: xs.IDREF // TODO - change to targetRef
	bendpoints?: LocationGroup[]
	sourceAttachment?: LocationGroup // if absent, tool should determined shortest path
	targetAttachment?: LocationGroup // if absent, tool should determined shortest path
	// TODO: #8 show label on line
	// TODO: #9 label position: source, target, center
	// TODO: #10 label vertical alignment: above, below, center
	// TODO: #11 label alignment: left, right, center
}

export interface LineConnectionInfo extends ConnectionInfoBase, Label {
	type: 'Line'
}

export interface RelationshipConnectionInfo extends ConnectionInfoBase {
	type: 'Relationship'
	relationshipRef: xs.IDREF
}

export type ConnectionInfo = LineConnectionInfo | RelationshipConnectionInfo

export type ViewConceptType = ViewNodeType | ConnectionInfo

export type ViewItemTypes = NodeTypes | ConnectionTypes
