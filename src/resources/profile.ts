// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../foundation/type-common.js'

// --- resource ---
type Required = {required: boolean}

export type ProfileInfo = {
	propertyDefs?: Record<IRI, Required>
}
