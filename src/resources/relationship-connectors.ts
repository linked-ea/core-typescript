// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ArchimateBase } from "../common/archimate-base.js"
import type { RelationshipConnectorTypeFragment} from '../fragments/relationship-connector-type-fragments.js'
import type { PropertyRecord } from './property-definition.js'

// --- exported types ---
export type RelationshipConnectorTypesUnion = `${ArchimateBase}${RelationshipConnectorTypeFragment}`

// --- resource ---
export interface RelationshipConnectorInfo extends PropertyRecord {
	type: RelationshipConnectorTypesUnion
}
