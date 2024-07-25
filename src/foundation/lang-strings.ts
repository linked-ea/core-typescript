// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { LangCode } from './type-iso-639-1-alpha-2.js'

// --- language strings ---

/**
 * Represents a language string object.
 * It is a record where the keys are language codes and the values are strings.
 */
export type LangString = Record<LangCode, string>

/**
 * Represents a label with a name of a concept.
 */
export interface Label {
	label: LangString // name of the concept
}

/**
 * Represents a resource's name.
 */
export interface Name {
	name: LangString // name of the concept
}