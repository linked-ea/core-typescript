// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// FIXME: naming convention for types and interfaces

// --- project imports ---
import type { RGBColorType, IRI, IIdentifier } from './types/type-common.js'
import type { LangCode } from './types/type-iso-639-1-alpha-2.js'
import type { TLangString, ILabel, IName } from './foundation-lang-strings.ts'
import type { ModelInfo } from './resource-model.ts'
import type { IDocumentation } from './foundation-documentation.ts'
import type { NamedResource, ResourceClass, ResourceClasses } from './foundation-resource.ts'
import type { PropertyRecord, PropertyDefInfo, TPropertyValue, PropertyDefTypesUnion, Type } from './resource-propertydef.ts'
import type { ProfileInfo } from './resource-profile.ts'
import type { ImageInfo } from './resource-image.ts'
import type { SpecializationInfo } from './resource-specialization.ts'
import type { ViewpointInfo } from './resource-viewpoint.ts'
import type { ElementInfo, ElementTypesUnion } from './types/type-element.js'
import type { RelationshipInfo, RelationshipTypesUnion} from './types/type-relationship.js'
import type { ViewConceptType, ViewInfo, NodeTypes, ElementNodeInfo, ConnectionInfo, LabelNodeInfo, ViewNodeType, ConnectionTypes, LineConnectionInfo, RelationshipConnectionInfo, FontType, LocationGroup, SizeGroup } from './resource-view.ts'
import type { OrganizationInfo } from './resource-organization.ts'

import { Aspect, AspectTypes } from './types/type-aspects.js'
import type { Layers } from './types/type-layers.ts'

// --- re-exports ---
export * as DICTIONARY from './dictionaries/index.js'

export type { RGBColorType, IRI, IIdentifier }

export type { Aspect, AspectTypes }
export type { LangCode }
export type { Layers as Layer }

export type { TLangString, ILabel, IName }
export type { IDocumentation }
export type { ResourceClasses, ResourceClass, NamedResource }
export type { ModelInfo }
export type { PropertyRecord, TPropertyValue, PropertyDefInfo, PropertyDefTypesUnion, Type }
export type { ProfileInfo }
export type { ImageInfo }
export type { SpecializationInfo }
export type { ElementInfo, Element as ElementResource, ElementTypesUnion }
export type { RelationshipInfo, RelationshipTypesUnion }
export type { ViewpointInfo }
export type { ViewConceptType, ViewInfo, NodeTypes, ElementNodeInfo, ConnectionInfo, LabelNodeInfo, ViewNodeType, ConnectionTypes, LineConnectionInfo, RelationshipConnectionInfo, FontType, LocationGroup, SizeGroup }
export type { OrganizationInfo }

// --- types ---
interface BaseResource<T extends ResourceClasses> extends ResourceClass<T>, NamedResource {}

export interface Model extends BaseResource<'model'> { info: ModelInfo }
export interface PropertyDef extends BaseResource<'propertyDef'> { info: PropertyDefInfo }
export interface Profile extends BaseResource<'profile'> { info: ProfileInfo }
export interface Image extends BaseResource<'image'> { info: ImageInfo }
export interface Specialization extends BaseResource<'specialization'> { info: SpecializationInfo }
export interface Element extends BaseResource<'element'> { info: ElementInfo }
export interface Relationship extends BaseResource<'relationship'> { info: RelationshipInfo }
export interface Viewpoint extends BaseResource<'viewpoint'> { info: ViewpointInfo }
export interface View extends BaseResource<'view'> { info: ViewInfo }
export interface Organization extends BaseResource<'organization'> { info: OrganizationInfo }

export type Resource =
| Model
| PropertyDef
| Profile
| Image
| Specialization
| Element
| Relationship
| Viewpoint
| View
| Organization
