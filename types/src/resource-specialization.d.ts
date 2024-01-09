import type { IRI } from './common.js';
import type { ElementTypesUnion } from './resource-element.js';
import type { RelationshipTypesUnion } from './resource-relationship.js';
export interface SpecializationInfo {
    concept: ElementTypesUnion | RelationshipTypesUnion;
    profiles: Record<IRI, boolean>;
}
