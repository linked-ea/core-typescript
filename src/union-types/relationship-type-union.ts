import type * as TYPE from './relationship-types'

export type RelationshipTypeUnion =
	| TYPE.Access
	| TYPE.Aggregation
	| TYPE.Assignment
	| TYPE.Association
	| TYPE.Composition
	| TYPE.Flow
	| TYPE.Influence
	| TYPE.Realization
	| TYPE.Serving
	| TYPE.Specialization
	| TYPE.Triggering
