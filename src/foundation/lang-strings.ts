// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { LangCode } from './type-iso-639-1-alpha-2.js'

// --- language strings ---

export type LangString = Record<LangCode, string>

export interface Label {
	label: LangString // name of the concept
}

export interface Name {
	name: LangString // name of the concept
}