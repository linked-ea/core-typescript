/**
 * @module
 * linked-ea core Typescript resource definitions.
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

//

// FIXME: naming convention for types and interfaces

// --- project imports ---
import type { LangCode } from '../common-types/type-iso-639-1-alpha-2.js'
import type { LangString, Label, Name } from '../common/lang-strings.js'
// import type { IDocumentation } from '../common/documentation.js'
import type { NamedResource, ResourceClass, ResourceClassUnion } from './resource-base.js'

import type { ModelInfo } from './model.js'
import type { ModelReferenceInfo } from './model-reference.js'
import type { PropertyRecord, PropertyDefInfo, TPropertyValue, Type } from './property-definition.js'
import type { ProfileInfo } from './profile.js'
import type { ImageInfo } from './image.js'
import type { SpecializationInfo } from './specialization.js'
import type { ViewpointInfo } from './viewpoint.js'
import type { ElementInfo /*, ElementTypesUnion  */} from './element.js'
import type { RelationshipInfo, RelationshipTypeUnion } from './relationship.js'
import type { RelationshipConnectorInfo /* , RelationshipConnectorTypesUnion */} from './relationship-connectors.js'
import type { ViewConceptType, ViewInfo, ElementNodeInfo, LabelNodeInfo, ViewNodeType, ItemTypeUnion, LineConnectionInfo, RelationshipConnectionInfo, ConnectorInfo, FontType, LocationGroup, SizeGroup } from './view.js'
import type { OrganizationInfo } from './organization.js'

import type { Aspect, AspectTypes } from '../common-types/type-aspects.js'
import type { Layers } from '../common-types/type-layers.ts'

import type * as TYPE from '../union-types/index.js'

// --- re-exports ---
import * as Enum from '../enums/index.js'

export * as TYPE from '../union-types/index.js'

export type { Aspect, AspectTypes }
export type { LangCode }
export type { Layers as Layer }

export type { LangString, Label as ILabel, Name as IName }
export type { ResourceClassUnion as ResourceClasses, ResourceClass, NamedResource }

export type { PropertyRecord, TPropertyValue, PropertyDefInfo, Type }

export type { Element as ElementResource }
export type { RelationshipTypeUnion }
// export type { RelationshipConnectorTypesUnion }

export type { ViewConceptType, ElementNodeInfo, LabelNodeInfo, ViewNodeType, ItemTypeUnion, LineConnectionInfo, RelationshipConnectionInfo, ConnectorInfo, FontType, LocationGroup, SizeGroup }


// --- types ---
interface BaseResource<T extends TYPE.ResourceClassUnion> extends ResourceClass<T>, NamedResource {}

// TODO: #23 drop model identifier from model, as it is redundant to identifier
//  modelresources
/** model resource */
export interface Model extends BaseResource<typeof Enum.ResourceClass.Model> { info: ModelInfo }
/** model reference resource */
export interface ModelReference extends BaseResource<typeof Enum.ResourceClass.ModelReference> { info: ModelReferenceInfo }

// concept resources
export interface Element extends BaseResource<typeof Enum.ResourceClass.Element>, PropertyRecord { info: ElementInfo }
export interface Relationship extends BaseResource<typeof Enum.ResourceClass.Relationship>, PropertyRecord { info: RelationshipInfo } // ISSUE: #7 names are optional for relationships
export interface RelationshipConnector extends BaseResource<typeof Enum.ResourceClass.RelationshipConnector>, PropertyRecord { info: RelationshipConnectorInfo }

// other resources
export interface PropertyDef extends BaseResource<typeof Enum.ResourceClass.PropertyDef> { info: PropertyDefInfo }
export interface Profile extends BaseResource<typeof Enum.ResourceClass.Profile> { info: ProfileInfo }
export interface Image extends BaseResource<typeof Enum.ResourceClass.Image> { info: ImageInfo }
export interface Specialization extends BaseResource<typeof Enum.ResourceClass.Specialization> { info: SpecializationInfo }
/**
 * Viewpoint represents the information structure of viewpoint resource.
 */
export interface Viewpoint extends BaseResource<typeof Enum.ResourceClass.Viewpoint> { info: ViewpointInfo }
/**
 * View represents the information structure of view resource.
 */
export interface View extends BaseResource<typeof Enum.ResourceClass.View> { info: ViewInfo }
export interface Organization extends BaseResource<typeof Enum.ResourceClass.Organization> { info: OrganizationInfo }

export type Resource =
| Model
| ModelReference
| PropertyDef
| Profile
| Image
| Specialization
| Element
| Relationship
| RelationshipConnector
| Viewpoint
| View
| Organization
