// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IAlias, IRI } from './common.js'
import type { IProperties } from './foundation-property.js'

// export type TRelationshipTypes = `${TBaseRelationshipTypes}`

export type TRelationshipCategories =
	| 'Structural'
	| 'Dependency'
	| 'Dynamic'
	| 'Other'

type TSourceMarker = 'none' | 'diamond full' | 'diamond empty'
type TEndMarker = 'none' | 'full' | 'empty' | 'open'
type TLine = 'straight' | 'dots' | 'dashes'

export interface RelationshipTypeInfo extends IAlias {
	category: TRelationshipCategories
	sourceMarker: TSourceMarker
	line: TLine
	endMarker: TEndMarker
}

// FIXME: move alias to import, as they are only used there
export const relationships = {
// export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
	Access: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'dots',
		endMarker: 'none',
	},
	Aggregation: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'straight',
		endMarker: 'none',
	},
	Assignment: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	Association: {
		category: 'Structural',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
	Composition: {
		category: 'Structural',
		sourceMarker: 'diamond full',
		line: 'straight',
		endMarker: 'none',
	},
	Flow: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'full',
	},
	Influence: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'none',
	},
	Realization: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'dots',
		endMarker: 'empty',
		alias: 'RealisationRelationship',
	},
	Specialization: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'empty',
		alias: 'SpecialisationRelationship',
	},
	Triggering: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	UsedBy: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
} as const satisfies Record<string, RelationshipTypeInfo>

export type TRelationshipTypes = keyof typeof relationships

export interface IRelationshipInfo extends IProperties {
	type?: TRelationshipTypes
	source: IRI
	target: IRI
}