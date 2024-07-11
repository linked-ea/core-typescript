// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../common-types/type-common.js'
import type { ElementTypesUnion } from './element.js'
import type { RelationshipTypeUnion  } from '../resources/relationship.js'
import type { RelationshipConnectorTypesUnion } from './relationship-connectors.js'
import type { ImageRef } from "../common-types/type-image-ref.js"

// --- resource ---

type Required = {required: boolean} // is profile required by specialization?

// TODO #27 imageRef should only be supported by element or connector, not relationship
type ElementSpecializationInfo = {
    concept: ElementTypesUnion | RelationshipConnectorTypesUnion,
    imageRef?: ImageRef,
    profiles?: Record<IRI, Required>
}

type RelationshipSpecializationInfo = {
    concept: RelationshipTypeUnion,
    profiles?: Record<IRI, Required>
}

export type SpecializationInfo = ElementSpecializationInfo | RelationshipSpecializationInfo
