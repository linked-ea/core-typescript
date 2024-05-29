// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../types/type-common.js'
import type { ArchimateBase } from "../common/archimate-base.js"
import type { ElementTypeFragment } from "../fragments/element-fragments.js"
import type { PropertyRecord } from './property-definition.js'
import type { ImageRef } from "../types/type-image-ref.js"

// --- type exports ---
export type ElementTypesUnion =`${ArchimateBase}${ElementTypeFragment}`

type _BaseElementInfo =
	| { type: ElementTypesUnion, specializationRef?: never }
	| { type?: never, specializationRef: IRI }

// interface _ImageRef { imageRef?: ImageRef }

// interface _ElementType extends _ImageRef, PropertyRecord { type: ElementTypesUnion }

// interface _SpecializationRef extends _ImageRef, PropertyRecord { specializationRef: IRI }

// export type ElementInfo =  _ElementType | _SpecializationRef

export type ElementInfo =  _BaseElementInfo & { imageRef?: ImageRef } & PropertyRecord