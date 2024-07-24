// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ColorPalette } from '../foundation/type-color-palette.js'
import { Layers } from '../enums/layer-enum.js'

// --- color palettes ---


/**
 * Represents information about a color palette.
 */
export interface ColorPaletteInfo {
	/**
	 * The color palette used for filling.
	 */
	fillColorPalette: ColorPalette;

	/**
	 * The URL of the color palette.
	 */
	url: string;
}

type DictKeys = 'Alternative' | 'Classic'

/**
 * Color palettes for different themes as defined by ArchiMate®.
 */
export const colorPalettes: Record<DictKeys, ColorPaletteInfo> = {
	Alternative: {
		fillColorPalette: {
			[Layers.Strategy]: { r: 0xE5, g: 0xA8, b: 0x2E },
			[Layers.Business]: { r: 0xF8, g: 0xDA, b: 0x62 },
			[Layers.Application]: { r: 0x92, g: 0xB8, b: 0x64 },
			[Layers.Technology]: { r: 0x9F, g: 0xB3, b: 0x94 },
			[Layers.Motivation]: { r: 0xB3, g: 0xA8, b: 0xB8 },
			[Layers.ImplementationAndMigration]: { r: 0xE9, g: 0xA7, b: 0xA1 },
			[Layers.Composite]: { r: 194, g: 247, b: 199 },
		},
		// TODO #31 remove url from color palette, move to jsdoc
		url: 'https://www.opengroup.org/sites/default/files/alternative-color-set.pdf',
	},
	Classic: {
		fillColorPalette: {
			[Layers.Strategy]: { r: 240, g: 215, b: 153 },
			[Layers.Business]: { r: 252, g: 255, b: 166 },
			[Layers.Application]: { r: 166, g: 255, b: 254 },
			[Layers.Technology]: { r: 189, g: 227, b: 167 },
			[Layers.Motivation]: { r: 192, g: 187, b: 253 },
			[Layers.ImplementationAndMigration]: { r: 252, g: 214, b: 214 },
			[Layers.Composite]: { r: 232, g: 193, b: 213 },
		},
		url: 'https://www.opengroup.org/sites/default/files/ArchiMate-classic-colors.pdf',
	},
} as const
