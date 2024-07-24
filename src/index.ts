/**
 * @module
 * linked-ea core Typescript definitions.
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

export * as Dict from './dictionaries/index.js'
export * as Enum from './enums/index.js'
export * as Resource from './resources/index.js'
export * as Foundation from './foundation/index.js'

//

// FIXME: naming convention for types and interfaces

// --- project imports ---


// import type { NamedResource, ResourceClass, ResourceClassUnion } from './resources/resource-base.js'

// import type { ModelInfo } from './resources/model.js'
// import type { ModelReferenceInfo } from './resources/model-reference.js'
import type { PropertyRecord, /* PropertyDefInfo , */ TPropertyValue } from './resources/property-definition.js'
// import type { ProfileInfo } from './resources/profile.js'
// import type { ImageInfo } from './resources/image.js'
// import type { SpecializationInfo } from './resources/specialization.js'
// import type { ViewpointInfo } from './resources/viewpoint.js'
// import type { /* ElementInfo, */ ElementTypesUnion } from './resources/element.js'
// import type { /* RelationshipInfo , */ RelationshipTypeUnion } from './resources/relationship.js'
// import type { RelationshipConnectorInfo, RelationshipConnectorTypesUnion } from './resources/relationship-connectors.js'
// import type { ViewConceptType, /* ViewInfo, */ ElementNodeInfo, LabelNodeInfo, ViewNodeType, ItemTypeUnion, LineConnectionInfo, RelationshipConnectionInfo, ConnectorInfo, FontType, LocationGroup, SizeGroup } from './resources/view.js'
// import type { OrganizationInfo } from './resources/organization.js'

// import type * as TYPE from './union-types/index.js'

// --- re-exports ---
// import * as Dict from './dictionaries/index.js'
// import * as Enum from './enums/index.js'
// import * as Resource from './resources/index.js'

// export * as DICTIONARY from './dictionaries/index.js'
// export * as ENUM from './enums/index.js'
// export * as TYPE from './union-types/index.js'


// export type { LangCode }

// export type { IDocumentation }
// export type { ResourceClassUnion as ResourceClasses, ResourceClass, NamedResource }

export type { PropertyRecord, TPropertyValue, /* PropertyDefInfo, Type */ }

// export type { ElementInfo, ElementTypesUnion }
// export type { RelationshipTypeUnion }
// export type { RelationshipConnectorInfo, RelationshipConnectorTypesUnion }
// export type { ViewpointInfo }
// export type { ViewConceptType, /* ViewInfo, */ ElementNodeInfo, LabelNodeInfo, ViewNodeType, ItemTypeUnion, LineConnectionInfo, RelationshipConnectionInfo, ConnectorInfo, FontType, LocationGroup, SizeGroup }
