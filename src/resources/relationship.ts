// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../common-types/type-common.js'
import type { PropertyRecord } from './property-definition.js'
// import type { RelationshipTypeUnion } from "../union-types/relationship-type-union.js"

import type { RelationshipType as T } from '../enums/index.js'

export type RelationshipTypeUnion =
	| typeof T.Access
	| typeof T.Aggregation
	| typeof T.Assignment
	| typeof T.Association
	| typeof T.Composition
	| typeof T.Flow
	| typeof T.Influence
	| typeof T.Realization
	| typeof T.Serving
	| typeof T.Specialization
	| typeof T.Triggering

// --- local types ---
type _BaseInfo =
	| { type: RelationshipTypeUnion, specializationRef?: never }
	| { type?: never, specializationRef: IRI }

// --- type exports ---
export type RelationshipInfo = _BaseInfo & PropertyRecord & { source: IRI, target: IRI }