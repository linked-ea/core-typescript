// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { Alias } from './dict-common.ts'

import { archimateBase } from './dict-common.js'

export type TRelationshipCategories =
	| 'Structural'
	| 'Dependency'
	| 'Dynamic'
	| 'Other'

// TODO: below move to diagram
type TSourceMarker = 'none' | 'diamond full' | 'diamond empty'
type TEndMarker = 'none' | 'full' | 'empty' | 'open'
type TLine = 'straight' | 'dots' | 'dashes'

interface RelationshipTypeInfo extends Alias {
	category: TRelationshipCategories
	sourceMarker: TSourceMarker
	line: TLine
	endMarker: TEndMarker
}
// TODO: above move to diagram

// FIXME: move alias to import, as they are only used there
export const relationships = {
// export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
	[`${archimateBase}Access`]: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'dots',
		endMarker: 'none',
	},
	[`${archimateBase}Aggregation`]: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'straight',
		endMarker: 'none',
	},
	[`${archimateBase}Assignment`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	[`${archimateBase}Association`]: {
		category: 'Structural',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
	[`${archimateBase}Composition`]: {
		category: 'Structural',
		sourceMarker: 'diamond full',
		line: 'straight',
		endMarker: 'none',
	},
	[`${archimateBase}Flow`]: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'full',
	},
	[`${archimateBase}Influence`]: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'none',
	},
	[`${archimateBase}Realization`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'dots',
		endMarker: 'empty',
		alias: 'RealisationRelationship',
	},
	[`${archimateBase}Specialization`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'empty',
		alias: 'SpecialisationRelationship',
	},
	[`${archimateBase}Triggering`]: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	[`${archimateBase}UsedBy`]: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
} as const satisfies Record<string, RelationshipTypeInfo>
