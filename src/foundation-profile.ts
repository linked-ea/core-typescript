// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './common.js'

// --- profiles ---
export interface IProfileInfo {
	properties?: Record<IRI, boolean> // is property required by profile?
}