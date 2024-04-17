// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { RGBColorType } from '../types/type-common.js'

// --- layers ---
export interface LayersInfo {
	name: string
	fillColor: RGBColorType
	initial: string
}
/*
export type TLayers =
	| 'Strategy'
	| 'Business'
	| 'Application'
	| 'Technology'
	| 'Motivation'
	| 'Implementation & Migration'
	| 'Physical'
*/
interface LayersRecord {
	[key: string]: LayersInfo
}
// export const layers: Record<TLayers, ILayersInfo> = {
export const layers: LayersRecord = {
	Strategy: {
		name: 'Strategy',
		fillColor: { r: 247, g: 221, b: 174 }, // #F7DDAE
		initial: 'S',
	},
	Business: {
		name: 'Business',
		fillColor: {r: 245, g: 247, b: 181 }, // #F5F7B5
		initial: 'B',
	},
	Application: {
		name: 'Application',
		fillColor: { r: 176, g: 255, b: 255 },
		initial: 'A',
	},
	Technology: {
		name: 'Technology',
		fillColor: { r: 148, g: 255, b: 161 },  // #94FFA1
		initial: 'T',
	},
	Motivation: {
		name: 'Motivation',
		fillColor: { r: 238, g: 239, b: 254 }, // #EEEFFE
		initial: 'M',
	},
	'Implementation & Migration': {
		name: 'Implementation & Migration',
		fillColor: { r: 255, g: 223, b: 224 }, // #FFDFE0
		initial: 'I',
	},
	Physical: {
		name: 'Physical',
		fillColor: { r: 194, g: 247, b: 199 }, // #C2F7C7, green
		initial: 'P',
	},
} as const
