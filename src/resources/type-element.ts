// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { PropertyRecord } from './resource-property-definition.js'

import type { ElementTypeEnum } from 'enums/element-type-enum.js'

// --- type exports ---
export interface ElementInfo extends PropertyRecord {
	type: ElementTypesUnion
}

export type ElementTypesUnion = ElementTypeEnum
