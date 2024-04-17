// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { Alias } from './dict-common.ts'
import { RelationshipTypeEnum } from '../enums/relationship-type-enum.js'

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
export const relationships = {
// export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
	[RelationshipTypeEnum.Access]: {
		category: 'Structural',
	},
	[RelationshipTypeEnum.Aggregation]: {
		category: 'Structural',
	},
	[RelationshipTypeEnum.Assignment]: {
		category: 'Dependency',
	},
	[RelationshipTypeEnum.Association]: {
		category: 'Structural',
	},
	[RelationshipTypeEnum.Composition]: {
		category: 'Structural',
	},
	[RelationshipTypeEnum.Flow]: {
		category: 'Dynamic',
	},
	[RelationshipTypeEnum.Influence]: {
		category: 'Dynamic',
	},
	[RelationshipTypeEnum.Realization]: {
		category: 'Dependency',
		alias: 'RealisationRelationship',
	},

	[RelationshipTypeEnum.Specialization]: {
		category: 'Dependency',
		alias: 'SpecialisationRelationship',
	},
	[RelationshipTypeEnum.Triggering]: {
		category: 'Dynamic',
	},
	[RelationshipTypeEnum.Serving]: {
		category: 'Dependency',
	},
} as const satisfies Record<string, RelationshipTypeInfo>
