// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../types/type-common.js'
import type { PropertyRecord } from './resource-property-definition.js'

import type { RelationshipTypeEnum } from 'enums/relationship-type-enum.js'

// --- exported types ---
// export type RelationshipTypesUnion = keyof typeof relationships
export type RelationshipTypesUnion = RelationshipTypeEnum

// --- resource ---
export interface RelationshipInfo extends PropertyRecord {
	type: RelationshipTypesUnion
	source: IRI
	target: IRI
}
