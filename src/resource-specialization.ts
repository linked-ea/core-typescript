// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './common.js'
import type { ElementTypesUnion } from './resource-element.js'
import type { RelationshipTypesUnion  } from './resource-relationship.js'

// --- resource ---
export interface SpecializationInfo {
	concept: ElementTypesUnion | RelationshipTypesUnion // element or relationship type
	profiles: Record<IRI, boolean> // profiles applied to specialization
}
