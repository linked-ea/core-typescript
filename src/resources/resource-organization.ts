// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type * as xs from '../common/xs.js'
import type { IRI, Identifier } from '../types/type-common.js'

// --- resource ---
export interface IItemInfo extends Identifier {
	identifierRef?: xs.IDREF
}

export interface OrganizationInfo {
	items?: ItemsRecord
}

export type ItemsRecord = Record<IRI, OrganizationInfo | IItemInfo>