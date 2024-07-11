// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { RGBColorType } from './type-common.js'
import type { layers } from '../dictionaries/dict-layers.js'

// --- color palettes ---

export type ColorPalette = Record< keyof typeof layers, RGBColorType>