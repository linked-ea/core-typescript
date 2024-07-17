/**
 * @module
 * Dictionary for relationship-class concepts.
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

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

/**
 * Represents a dictionary of relationship types and their corresponding information. There is a total of 11 relationship types.
 *
 * @remarks This dictionary maps `RelationshipType` to `RelationshipTypeInfo`.
 */

// TODO: #39 use TRelationshipTypes instead of string for recored key
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
