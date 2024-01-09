// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI, IIdentifier } from './common.ts'

// --- resource ---
export interface OrganizationInfo {}

export interface IItemInfo extends IIdentifier {
	identifierRef?: IRI
}

export interface OrganizationInfo {
	items?: ItemsRecord
}

export type ItemsRecord = Record<IRI, OrganizationInfo | IItemInfo>