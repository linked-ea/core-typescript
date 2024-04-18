// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// FIXME: naming convention for types and interfaces

// --- project imports ---
import type { RGBColorType, IRI, Identifier } from './types/type-common.js'
import type { LangCode } from './types/type-iso-639-1-alpha-2.js'
import type { LangString, Label, Name } from './common/lang-strings.js'
import type { ModelInfo } from './resources/model.js'
import type { IDocumentation } from './common/documentation.js'
import type { NamedResource, ResourceClass, ResourceClasses } from './common/resource.js'
import type { PropertyRecord, PropertyDefInfo, TPropertyValue, PropertyDefTypesUnion, Type } from './resources/property-definition.js'
import type { ProfileInfo } from './resources/profile.js'
import type { ImageInfo } from './resources/image.js'
import type { SpecializationInfo } from './resources/specialization.js'
import type { ViewpointInfo } from './resources/viewpoint.js'
import type { ElementInfo, ElementTypesUnion } from './resources/element.js'
import type { RelationshipInfo, RelationshipTypesUnion} from './resources/relationship.js'
import type { RelationshipConnectorInfo, RelationshipConnectorTypesUnion } from './resources/relationship-connectors.js'
import type { ViewConceptType, ViewInfo, NodeTypes, ElementNodeInfo, ConnectionInfo, LabelNodeInfo, ViewNodeType, ConnectionTypes, LineConnectionInfo, RelationshipConnectionInfo, FontType, LocationGroup, SizeGroup } from './resources/view.js'
import type { OrganizationInfo } from './resources/organization.js'

import type { Aspect, AspectTypes } from './types/type-aspects.js'
import type { Layers } from './types/type-layers.ts'

import type * as ENUM from './enums/index.js'

// --- re-exports ---
export * as DICTIONARY from './dictionaries/index.js'
export * as ENUM from './enums/index.js'

export type { RGBColorType, IRI, Identifier as IIdentifier }

export type { Aspect, AspectTypes }
export type { LangCode }
export type { Layers as Layer }

export type { LangString as TLangString, Label as ILabel, Name as IName }
export type { IDocumentation }
export type { ResourceClasses, ResourceClass, NamedResource }
export type { ModelInfo }
export type { PropertyRecord, TPropertyValue, PropertyDefInfo, PropertyDefTypesUnion, Type }
export type { ProfileInfo }
export type { ImageInfo }
export type { SpecializationInfo }
export type { ElementInfo, Element as ElementResource, ElementTypesUnion }
export type { RelationshipInfo, RelationshipTypesUnion }
export type { RelationshipConnectorInfo, RelationshipConnectorTypesUnion }
export type { ViewpointInfo }
export type { ViewConceptType, ViewInfo, NodeTypes, ElementNodeInfo, ConnectionInfo, LabelNodeInfo, ViewNodeType, ConnectionTypes, LineConnectionInfo, RelationshipConnectionInfo, FontType, LocationGroup, SizeGroup }
export type { OrganizationInfo }

// --- types ---
interface BaseResource<T extends ResourceClasses> extends ResourceClass<T>, NamedResource {}

// TODO: #23 drop model identifier from model, as it is redundant to identifier
export interface Model extends BaseResource<ENUM.ResourceClass.Model> { info: ModelInfo }
export interface Element extends BaseResource<ENUM.ResourceClass.Element>, PropertyRecord { info: ElementInfo }
export interface Relationship extends BaseResource<ENUM.ResourceClass.Relationship>, PropertyRecord { info: RelationshipInfo } // ISSUE: #7 names are optional for relationships
export interface RelationshipConnector extends BaseResource<ENUM.ResourceClass.RelationshipConnector>, PropertyRecord { info: RelationshipConnectorInfo }

export interface PropertyDef extends BaseResource<ENUM.ResourceClass.PropertyDef> { info: PropertyDefInfo }
export interface Profile extends BaseResource<ENUM.ResourceClass.Profile> { info: ProfileInfo }
export interface Image extends BaseResource<ENUM.ResourceClass.Image> { info: ImageInfo }
export interface Specialization extends BaseResource<ENUM.ResourceClass.Specialization> { info: SpecializationInfo }
export interface Viewpoint extends BaseResource<ENUM.ResourceClass.Viewpoint> { info: ViewpointInfo }
export interface View extends BaseResource<ENUM.ResourceClass.View> { info: ViewInfo }
export interface Organization extends BaseResource<ENUM.ResourceClass.Organization> { info: OrganizationInfo }

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
