// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../common-types/type-common.js'
// TODO #37 retire the use of ArchimateBse
// import type { ArchimateBase } from "../common/archimate-base.js"
// import type { ElementTypeFragment } from "../fragments/element-fragments.js"
import type { PropertyRecord } from './property-definition.js'
import type { ImageRef } from "../common-types/type-image-ref.js"
import type { ElementType } from '../enums/element-type-enum.js'

// --- local types ---
type _BaseInfo =
	| { type: ElementTypesUnion, specializationRef?: never }
	| { type?: never, specializationRef: IRI }

// --- type exports ---
// export type ElementTypesUnion =`${ArchimateBase}${ElementTypeFragment}`

type typeofElementType = typeof ElementType

export type ElementTypesUnion = typeofElementType[keyof typeofElementType];

export type ElementInfo =  _BaseInfo & PropertyRecord & {
	/** image reference */
	imageRef?: ImageRef
}