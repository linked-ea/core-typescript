// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type * as xs from '../common/xs.js'
import type { RGBColorType } from '../common-types/type-common.js'
import type { LangString } from '../common/lang-strings.js'
import type { ImageRef } from "../common-types/type-image-ref.js"

// MARK: --- exported types ---
export type ItemTypeUnion = 'Element' | 'Container' | 'Label' | 'Line' | 'Relationship' | 'Connector'

// MARK: --- local types ---
interface Stereotype {
	stereotype?: true
}

// --- resource ---
export interface ViewInfo extends Stereotype {
	/**
	* IRI reference to the viewpoint resource
	*/
	viewpointRef?: xs.IDREF
	items?: Record<xs.IDREF, ViewConceptType>
}

export interface LocationGroup {
	/**
	 * x coordinate starting at top left
	 */
	x: xs.positiveInteger
	/**
	 * y coordinate starting at top left
	 */
	y: xs.positiveInteger
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

// MARK: --- nodes ---
// TODO - add viewRef

type FigureOrImage = { figure?: never, imageRef: ImageRef } | { figure: boolean, imageRef?: never } | { figure?: never, imageRef?: never }

interface _NodeConnectorInfoBase extends LocationGroup, SizeGroup, StyleType, Label {
	type: ItemTypeUnion
	viewRef?: xs.IDREF[]
	/**
	 * IRI reference to the parent container node
	 */
	parentNodeRef?: xs.IDREF
	/**
	 * If true, node is shown as figure
	 */
	figure?: boolean
	/**
	 * If provided node is to be displayed by referred image
	 */
	imageRef?: ImageRef // image to be displayed across all views, unless overridden
}

export type NodeConnectorInfoBase = _NodeConnectorInfoBase & FigureOrImage

export type ElementNodeInfo = NodeConnectorInfoBase & Stereotype & {
	type: 'Element'
	elementRef: xs.IDREF
}

export type ContainerNodeInfo = NodeConnectorInfoBase & {
	type: 'Container'
}

export type LabelNodeInfo =  NodeConnectorInfoBase & {
	type: 'Label'
}

export type ViewNodeType = ElementNodeInfo | ContainerNodeInfo | LabelNodeInfo

// MARK: --- connectors ---
export type ConnectorInfo = NodeConnectorInfoBase & Stereotype & {
	type: 'Connector'
	relationshipConnectorRef: xs.IDREF
}

// MARK: --- connections ---
interface ConnectionInfoBase extends StyleType {
	type?: ItemTypeUnion
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

export interface RelationshipConnectionInfo extends ConnectionInfoBase, Stereotype {
	type: 'Relationship'
	relationshipRef: xs.IDREF
}

// TODO #26 rename to ViewItem or better, consult with ArchiMate® specification
export type ViewConceptType =
	| ElementNodeInfo
	| ContainerNodeInfo
	| LabelNodeInfo
	| LineConnectionInfo
	| RelationshipConnectionInfo
	| ConnectorInfo
