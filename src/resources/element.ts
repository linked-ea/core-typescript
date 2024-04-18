// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ArchimateBase } from "common/archimate-base.js"
import type { ElementTypeFragment } from "fragments/element-fragments.js"
import type { PropertyRecord } from './property-definition.js'

// --- type exports ---
export type ElementTypesUnion =`${ArchimateBase}${ElementTypeFragment}`

export interface ElementInfo extends PropertyRecord {
	type: ElementTypesUnion
}
