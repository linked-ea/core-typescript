// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../types/type-common.js'
import type { PropertyRecord } from './property-definition.js'
import type { RelationshipTypeUnion } from "../union-types/relationship-type-union.js"

// --- exported types ---
export interface RelationshipInfo extends PropertyRecord {
	type: RelationshipTypeUnion
	source: IRI
	target: IRI
}
