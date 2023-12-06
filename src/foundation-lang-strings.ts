// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { TLangCode } from './codes-iso-639-1-alpha-2.js'

// --- language strings ---

export type TLangString = Record<TLangCode, string>

export interface ILabel {
	label: TLangString // name of the concept
}

export interface IName {
	name: TLangString // name of the concept
}