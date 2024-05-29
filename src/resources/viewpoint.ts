// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { LangString } from '../common/lang-strings.js'
import type { ElementTypesUnion } from './element.js'
import type { RelationshipTypeUnion  } from '../union-types/relationship-type-union.js'
import type { RelationshipConnectorTypesUnion } from './relationship-connectors.js'

// --- types ---

// --- resource ---

/* CONSTRAINTS: while a viewpoint may only include element types or specializations of element types, when a relationship tyoe or specialization
 * is associated to a Source element type, it must contain at least one Target element type
 */

export type ViewPointPurpose = 'Designing' | 'Deciding' | 'Informing'
export type ViewPointContent = 'Details' | 'Coherence' | 'Overview'

type AllowedTypes = Partial <Record <ElementTypesUnion, Array<RelationshipTypeUnion> | undefined>>
type AllowedRelationshipConnectors = Array<RelationshipConnectorTypesUnion>

/**
 * @type {object} ViewpointInfo interface represents the information structure of viewpoint resource.
 */
export interface ViewpointInfo {
	/**
	 *
	 */
	viewpointConcerns?: LangString
	/**
	 * An optional purpose of the viewpoint, can be 'Designing', 'Deciding', or 'Informing'.
	 */
	viewpointPurpose?: ViewPointPurpose[]
	/**
	 * An optional content of the viewpoint, can be 'Details', 'Coherence', or 'Overview'.
	 */
	viewpointContent?: ViewPointContent
	/**
	 * An optional collection of allowed element types. If not provided, all element types are allowed.
	 */
	allowedTypes?: AllowedTypes
	/**
	 * An optional collection of allowed relationship connectors. If not provided, all relationship connectors are allowed.
	 */
	allowedRelationshipConnectors?: AllowedRelationshipConnectors
	/**
	 * An optional array of stakeholders.
	 */
	stakeholders?: LangString[]
	/**
	 * An optional array of modeling notes.
	 */
	modelingNote?: LangString[]
}
