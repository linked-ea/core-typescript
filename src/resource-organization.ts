// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI, IIdentifier } from './common.js'
import type { ILabel } from 'foundation-lang-strings.js'
import type { IDocumentation } from 'foundation-documentation.js'

// --- organization ---

export interface IItemInfo extends IIdentifier {
	identifierRef?: IRI
}

export interface IOrganizationInfo extends IIdentifier, ILabel, IDocumentation {
	items?: ItemsRecord
}

export type ItemsRecord = Record<IRI, IOrganizationInfo | IItemInfo>