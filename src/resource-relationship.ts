// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IAlias, IRI } from './common.ts'
import type { PropertyRecord } from './resource-propertydef.ts'

import { ArchimateBase } from './common.js'

// --- resource ---
export interface RelationshipInfo extends PropertyRecord {
	type: RelationshipTypesUnion
	source: IRI
	target: IRI
}

export type RelationshipTypesUnion = keyof typeof relationships

export type TRelationshipCategories =
	| 'Structural'
	| 'Dependency'
	| 'Dynamic'
	| 'Other'

// TODO: below move to diagram
type TSourceMarker = 'none' | 'diamond full' | 'diamond empty'
type TEndMarker = 'none' | 'full' | 'empty' | 'open'
type TLine = 'straight' | 'dots' | 'dashes'

interface RelationshipTypeInfo extends IAlias {
	category: TRelationshipCategories
	sourceMarker: TSourceMarker
	line: TLine
	endMarker: TEndMarker
}
// TODO: above move to diagram

// FIXME: move alias to import, as they are only used there
export const relationships = {
// export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
	[`${ArchimateBase}Access`]: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'dots',
		endMarker: 'none',
	},
	[`${ArchimateBase}Aggregation`]: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'straight',
		endMarker: 'none',
	},
	[`${ArchimateBase}Assignment`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	[`${ArchimateBase}Association`]: {
		category: 'Structural',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
	[`${ArchimateBase}Composition`]: {
		category: 'Structural',
		sourceMarker: 'diamond full',
		line: 'straight',
		endMarker: 'none',
	},
	[`${ArchimateBase}Flow`]: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'full',
	},
	[`${ArchimateBase}Influence`]: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'none',
	},
	[`${ArchimateBase}Realization`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'dots',
		endMarker: 'empty',
		alias: 'RealisationRelationship',
	},
	[`${ArchimateBase}Specialization`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'empty',
		alias: 'SpecialisationRelationship',
	},
	[`${ArchimateBase}Triggering`]: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	[`${ArchimateBase}UsedBy`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
} as const satisfies Record<string, RelationshipTypeInfo>
