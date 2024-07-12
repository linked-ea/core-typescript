// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { Alias } from './dict-common.ts'
import { RelationshipType } from '../enums/index.js'

export type TRelationshipCategories =
	| 'Structural'
	| 'Dependency'
	| 'Dynamic'
	| 'Other'


// TODO: #17 move aliases to import as they are only used there
interface RelationshipTypeInfo extends Alias {
	category: TRelationshipCategories
}

// TODO: #18 add language strings as names for relationships

// * 11 relationship types
export const relationships: Record<string, RelationshipTypeInfo> = {
// export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
	[RelationshipType.Access]: {
		category: 'Structural',
	},
	[RelationshipType.Aggregation]: {
		category: 'Structural',
	},
	[RelationshipType.Assignment]: {
		category: 'Dependency',
	},
	[RelationshipType.Association]: {
		category: 'Structural',
	},
	[RelationshipType.Composition]: {
		category: 'Structural',
	},
	[RelationshipType.Flow]: {
		category: 'Dynamic',
	},
	[RelationshipType.Influence]: {
		category: 'Dynamic',
	},
	[RelationshipType.Realization]: {
		category: 'Dependency',
		alias: 'RealisationRelationship',
	},

	[RelationshipType.Specialization]: {
		category: 'Dependency',
		alias: 'SpecialisationRelationship',
	},
	[RelationshipType.Triggering]: {
		category: 'Dynamic',
	},
	[RelationshipType.Serving]: {
		category: 'Dependency',
	},
} as const
