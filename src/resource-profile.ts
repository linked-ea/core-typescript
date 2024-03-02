// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './types/type-common.js'

// --- resource ---
/*
interface Properties {
	properties?: Record<IRI, boolean> // boolean: is property required by profile?
}
*/

// export type ProfileInfo = Info<'profile'> & Properties

export interface ProfileInfo {
	properties?: Record<IRI, boolean> // boolean: is property required by profile?
}
