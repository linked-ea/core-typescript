// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { aspects } from '../dictionaries/dict-aspects.js'

// --- type exports ---
export interface Aspect {
	darken: number
	corners: 'round' | 'square' | 'diagonal'
}

export type AspectTypes = keyof typeof aspects