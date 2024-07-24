// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ColorPalette } from '../foundation/type-color-palette.js'

// --- color palettes ---
export interface ColorPaletteInfo {
	fillColorPalette: ColorPalette
	url: string
}

type DictKeys = 'Alternative' | 'Classic'

export const colorPalettes: Record<DictKeys, ColorPaletteInfo> = {
	Alternative: {
		fillColorPalette: {
			Strategy: { r: 0xE5, g: 0xA8, b: 0x2E },
			Business: { r: 0xF8, g: 0xDA, b: 0x62 },
			Application: { r: 0x92, g: 0xB8, b: 0x64 },
			Technology: { r: 0x9F, g: 0xB3, b: 0x94 },
			Motivation: { r: 0xB3, g: 0xA8, b: 0xB8 },
			'Implementation & Migration': { r: 0xE9, g: 0xA7, b: 0xA1 },
			Composite: { r: 194, g: 247, b: 199 },
		},
		// TODO #31 remove url from color palette, move to jsdoc
		url: 'https://www.opengroup.org/sites/default/files/alternative-color-set.pdf',
	},
	Classic: {
		fillColorPalette: {
			Strategy: { r: 240, g: 215, b: 153 },
			Business: { r: 252, g: 255, b: 166 },
			Application: { r: 166, g: 255, b: 254 },
			Technology: { r: 189, g: 227, b: 167 },
			Motivation: { r: 192, g: 187, b: 253 },
			'Implementation & Migration': { r: 252, g: 214, b: 214 },
			Composite: { r: 232, g: 193, b: 213 },
		},
		url: 'https://www.opengroup.org/sites/default/files/ArchiMate-classic-colors.pdf',
	},
} as const
