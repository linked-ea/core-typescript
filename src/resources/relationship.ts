// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ArchimateBase } from "common/archimate-base.js"
import type { RelationshipTypeFragment } from '../fragments/relationship-type-fragments.js'
import type { IRI } from '../types/type-common.js'
import type { PropertyRecord } from './property-definition.js'

// --- exported types ---
export type RelationshipTypesUnion = `${ArchimateBase}${RelationshipTypeFragment}`

// --- resource ---
export interface RelationshipInfo extends PropertyRecord {
	type: RelationshipTypesUnion
	source: IRI
	target: IRI
}
