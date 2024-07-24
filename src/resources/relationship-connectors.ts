// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../foundation/type-common.js'
import type { ArchimateBase } from "../foundation/archimate-base.js"
import type { RelationshipConnectorTypeFragment} from '../fragments/relationship-connector-type-fragments.js'
import type { PropertyRecord } from './property-definition.js'

// --- local types ---
type _BaseInfo =
	| { type: RelationshipConnectorTypesUnion, specializationRef?: never }
	| { type?: never, specializationRef: IRI }

// --- type exports ---
export type RelationshipConnectorTypesUnion = `${ArchimateBase}${RelationshipConnectorTypeFragment}`

export type RelationshipConnectorInfo = _BaseInfo & PropertyRecord
