// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { RGBColorType } from './common.js'
import type { TLangString } from './foundation-lang-strings.js'

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

namespace xs {
	export type positiveInteger = number // regex [1-9][0-9]*
	export type IDREF = string // valid IRI/URI reference
}

export interface StyleType {
	font?: FontType
	lineColor?: RGBColorType // if absent, use default
	fillColor?: RGBColorType // if absent, use default
	lineWidth?: xs.positiveInteger // if absent, use default
}

interface Label {
	label: TLangString
}

// --- nodes ---
export type NodeTypes = 'Element' | 'Container' | 'Label'

// TODO - add viewRef

interface NodeInfoBase extends LocationGroup, SizeGroup, StyleType {
	type?: NodeTypes
}

export interface ElementNodeInfo extends NodeInfoBase {
	type: 'Element'
	elementRef: xs.IDREF
	label?: TLangString
}

export interface ContainerNodeInfo extends NodeInfoBase {
	type: 'Container'
	viewRef: xs.IDREF
	label?: TLangString
}

export interface LabelNodeInfo extends NodeInfoBase, Label {
	type: 'Label'
}

export type ViewNodeType = ElementNodeInfo | ContainerNodeInfo | LabelNodeInfo

// --- connections ---
export type ConnectionTypes = 'Line' | 'Relationship'

interface ConnectionInfoBase extends StyleType {
	type?: ConnectionTypes
	sourceNode: xs.IDREF
	targetNode: xs.IDREF
	bendpoint?: LocationGroup[]
	sourceAttachment?: LocationGroup // if absent, tool should determined shortest path
	targetAttachment?: LocationGroup // if absent, tool should determined shortest path
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
