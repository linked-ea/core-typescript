// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { PropertyRecord } from './resource-property-definition.js'
import type { RelationshipConnectorTypeEnum } from 'enums/relationship-connector-type-enum.js'

// --- exported types ---
export type RelationshipConnectorTypesUnion = RelationshipConnectorTypeEnum

// --- resource ---
export interface RelationshipConnectorInfo extends PropertyRecord {
	type: RelationshipConnectorTypesUnion
}
