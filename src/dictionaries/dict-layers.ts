// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { RGBColorType } from '../foundation/type-common.js'
import type { LayersUnion } from '../enums/layer-enum.js'
import { Layers } from '../enums/layer-enum.js'

// --- layers ---

/**
 * Represents information about a layer.
 */
export interface LayersInfo {
	/** Name of the layer. */
	name: string;

	/** Default fill color for the layer. */
	fillColor: RGBColorType;

	/** Initial value to be displayed through views at the upper left corner of nodes. */
	initial: string;
}

/**
 * Dictionary of ArchiMate® layers with their corresponding information.
 */
export const layers: Record<LayersUnion, LayersInfo> = {
	[Layers.Strategy]: {
		name: 'Strategy',
		fillColor: { r: 247, g: 221, b: 174 }, // #F7DDAE
		initial: 'S',
	},
	[Layers.Business]: {
		name: 'Business',
		fillColor: {r: 245, g: 247, b: 181 }, // #F5F7B5
		initial: 'B',
	},
	[Layers.Application]: {
		name: 'Application',
		fillColor: { r: 176, g: 255, b: 255 },
		initial: 'A',
	},
	[Layers.Technology]: {
		name: 'Technology',
		fillColor: { r: 148, g: 255, b: 161 },  // #94FFA1
		initial: 'T',
	},
	[Layers.Motivation]: {
		name: 'Motivation',
		fillColor: { r: 238, g: 239, b: 254 }, // #EEEFFE
		initial: 'M',
	},
	[Layers.ImplementationAndMigration]: {
		name: 'Implementation & Migration',
		fillColor: { r: 255, g: 223, b: 224 }, // #FFDFE0
		initial: 'I',
	},
	[Layers.Composite]: {
		name: 'Composite',
		fillColor: { r: 194, g: 247, b: 199 }, // #C2F7C7, green
		initial: 'C',
	},
} as const
