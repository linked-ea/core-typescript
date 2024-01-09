import { iso_639_1_alpha_2 } from './codes-iso-639-1-alpha-2.js';
import { propertyTypes } from './resource-propertydef.js';
import { elements } from './resource-element.js';
import { relationships } from './resource-relationship.js';
import type { IRgbColor, IRI, IIdentifier } from './common.js';
import type { TLangCode } from './codes-iso-639-1-alpha-2';
import type { TLangString, ILabel, IName } from './foundation-lang-strings.js';
import type { ModelInfo } from './resource-model.js';
import type { IDocumentation } from './foundation-documentation.js';
import type { NamedResource, ResourceClass, ResourceClasses } from './foundation-resource.js';
import type { PropertyRecord, PropertyDefInfo, TPropertyValue, PropertyDefTypes, Type } from './resource-propertydef.js';
import type { ProfileInfo } from './resource-profile.js';
import type { ImageInfo } from './resource-image.js';
import type { SpecializationInfo } from './resource-specialization.js';
import type { ViewpointInfo } from './resource-viewpoint.js';
import type { ElementInfo, ElementTypesUnion } from './resource-element.js';
import type { RelationshipInfo, RelationshipTypesUnion } from './resource-relationship.js';
import type { ViewInfo, NodeTypes, ElementNodeInfo, ConnectionInfo, LabelNodeInfo, NodeInfo, ConnectionTypes, LineConnectionInfo, RelationshipConnectionInfo } from './resource-view.js';
import type { OrganizationInfo } from './resource-organization.js';
export { iso_639_1_alpha_2 };
export { elements };
export { relationships };
export { propertyTypes };
export type { IRgbColor, IRI, IIdentifier };
export type { TLangCode };
export type { TLangString, ILabel, IName };
export type { IDocumentation };
export type { ResourceClasses, ResourceClass, NamedResource };
export type { ModelInfo };
export type { PropertyRecord, TPropertyValue, PropertyDefInfo, PropertyDefTypes, Type };
export type { ProfileInfo };
export type { ImageInfo };
export type { SpecializationInfo };
export type { ElementInfo, Element as ElementResource, ElementTypesUnion };
export type { RelationshipInfo, RelationshipTypesUnion };
export type { ViewpointInfo };
export type { ViewInfo, NodeTypes, ElementNodeInfo, ConnectionInfo, LabelNodeInfo, NodeInfo, ConnectionTypes, LineConnectionInfo, RelationshipConnectionInfo };
export type { OrganizationInfo };
interface BaseResource<T extends ResourceClasses> extends ResourceClass<T>, NamedResource {
}
export interface Model extends BaseResource<'model'> {
    info: ModelInfo;
}
export interface PropertyDef extends BaseResource<'propertyDef'> {
    info: PropertyDefInfo;
}
export interface Profile extends BaseResource<'profile'> {
    info: ProfileInfo;
}
export interface Image extends BaseResource<'image'> {
    info: ImageInfo;
}
export interface Specialization extends BaseResource<'specialization'> {
    info: SpecializationInfo;
}
export interface Element extends BaseResource<'element'> {
    info: ElementInfo;
}
export interface Relationship extends BaseResource<'relationship'> {
    info: RelationshipInfo;
}
export interface Viewpoint extends BaseResource<'viewpoint'> {
    info: ViewpointInfo;
}
export interface View extends BaseResource<'view'> {
    info: ViewInfo;
}
export interface Organization extends BaseResource<'organization'> {
    info: OrganizationInfo;
}
export type Resource = Model | PropertyDef | Profile | Image | Specialization | Element | Relationship | Viewpoint | View | Organization;
