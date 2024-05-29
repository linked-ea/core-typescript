// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { LangString } from '../common/lang-strings.js'
import type { RelationshipConnectorTypesUnion } from '../resources/relationship-connectors.js'
import { RelationshipConnectorType } from '../enums/relationship-connector-type-enum.js'

interface RelationshipConnectorTypeInfo {
	name: LangString
}

// * 2 relationship connector types
export const relationshipConnectors: Record<RelationshipConnectorTypesUnion, RelationshipConnectorTypeInfo> = {
	[RelationshipConnectorType.AndJunction]: {
		name: {
			en: 'And Junction',
		},
	},
	[RelationshipConnectorType.OrJunction]: {
		name: {
			en: 'Or Junction',
		},
	},
} as const
