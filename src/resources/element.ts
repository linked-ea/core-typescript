// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../common-types/type-common.js'
import type { ArchimateBase } from "../common/archimate-base.js"
import type { ElementTypeFragment } from "../fragments/element-fragments.js"
import type { PropertyRecord } from './property-definition.js'
import type { ImageRef } from "../common-types/type-image-ref.js"


// --- local types ---
type _BaseInfo =
	| { type: ElementTypesUnion, specializationRef?: never }
	| { type?: never, specializationRef: IRI }

// --- type exports ---
export type ElementTypesUnion =`${ArchimateBase}${ElementTypeFragment}`

export type ElementInfo =  _BaseInfo & PropertyRecord & { imageRef?: ImageRef }