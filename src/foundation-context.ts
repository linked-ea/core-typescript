// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import { type IRgbColor } from './common.js'

// --- layers ---
export interface ILayersInfo {
	name: string
	color: IRgbColor // hex color
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
interface ILayersRecord {
	[key: string]: ILayersInfo
}
// export const layers: Record<TLayers, ILayersInfo> = {
export const layers: ILayersRecord = {
	Strategy: {
		name: 'Strategy',
		color: {
			r: 250,
			g: 230,
			b: 196,
		}, // #FAE6C4
		initial: 'S',
	},
	Business: {
		name: 'Business',
		color: {
			r: 255,
			g: 255,
			b: 208,
		}, // #FFFFD0
		initial: 'B',
	},
	Application: {
		name: 'Application',
		color: {
			r: 191,
			g: 251,
			b: 254,
		}, // #BFFBFE
		initial: 'A',
	},
	Technology: {
		name: 'Technology',
		color: {
			r: 148,
			g: 255,
			b: 161,
		}, // 148 255 161 #94FFA1
		initial: 'T',
	},
	Motivation: {
		name: 'Motivation',
		color: {
			r: 238,
			g: 239,
			b: 254,
		}, //238 239 254 #EEEFFE
		initial: 'M',
	},
	'Implementation & Migration': {
		name: 'Implementation & Migration',
		color: {
			r: 255,
			g: 223,
			b: 224,
		}, // #FFDFE0
		initial: 'I',
	},
	Physical: {
		name: 'Physical',
		color: {
			r: 194,
			g: 247,
			b: 199,
		}, // 'green'
		initial: 'P',
	},
} as const

export type TLayers = keyof typeof layers

// --- aspects ---
export interface IAspectInfo {
	darken: number
	corners: 'round' | 'square' | 'diagonal'
}

interface IAspectsRecord {
	[key: string]: IAspectInfo
}

// export const aspects: Record<string, IAspectInfo> = {
export const aspects: IAspectsRecord = {
	'Passive Structure': {
		darken: 0,
		corners: 'square',
	},
	Behavior: {
		darken: 0.1,
		corners: 'round',
	},
	'Active Structure': {
		darken: 0.2,
		corners: 'square',
	},
	Motivation: {
		darken: 0,
		corners: 'diagonal',
	},
} as const

export type TAspects = keyof typeof aspects
