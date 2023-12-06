// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// FIXME: naming convention for types and interfaces

// --- project imports ---
import type { IRgbColor, IRI, IIdentifier } from './common.js'
import type { IRelationshipInfo } from './resource-relationship.js'
import { ISO_639_1_Alpha_2 } from 'codes-iso-639-1-alpha-2.js'
import { elements } from './resource-element.js'
import type { TLangCode } from 'codes-iso-639-1-alpha-2.js'
import type { TLangString, ILabel, IName } from 'foundation-lang-strings.js'
import type { IProperties, IPropertyDefInfo, PropertyResource } from './foundation-property.js'
import type { IProfileInfo } from 'foundation-profile.js'
import type { IViewInfo, IImageInfo } from './resource-view.js'
import type { ISpecializationInfo } from 'resource-specializations.js'
import type { IViewpointInfo } from './resource-viewpoint.js'
import type { IOrganizationInfo } from './resource-organization.js'
import type { IDocumentation } from 'foundation-documentation.js'
import type { IModelInfo } from './resource-model.js'
import type { IElementInfo, ElementResource } from './resource-element.js'

// --- re-exports ---
export type { IRgbColor, IRI, IIdentifier }
export type { IRelationshipInfo }
export { ISO_639_1_Alpha_2 }
export { elements }
export type { TLangCode }
export type { TLangString, ILabel, IName }
export type { IProperties, IPropertyDefInfo }
export type { IProfileInfo }
export type { IViewInfo, IImageInfo }
export type { ISpecializationInfo }
export type { IViewpointInfo }
export type { IOrganizationInfo }
export type { IDocumentation }
export type { IModelInfo }
export type { IElementInfo, ElementResource }

// --- core info

/*
type TInfo =
IModelInfo |
IPropertyDefInfo |
IProfileInfo |
ISpecializationInfo |
IElementInfo |
IRelationshipInfo |
IViewpointInfo |
IViewInfo |
IOrganizationInfo |
IImageInfo

*/

// base resource interface
export interface IResource<TResourceClass> extends IName, IDocumentation {
	modelIdentifier: IRI
	identifier: IRI
	resourceClass: TResourceClass
	deprecated?: boolean
	// info: TInfo
}

// specific resource interfaces

// export type IModel = IResource<'model'> & IModelInfo
export interface IModel extends Omit<IResource<'model'>, 'modelIdentifier'> /* , IModelInfo */ {
	info: IModelInfo
}

// export type IPropertyDef = IResource<'propertyDef'> & IPropertyDefInfo
export interface IPropertyDef extends IResource<'propertyDef'> /* , IPropertyDefInfo */ {
	// resourceClass: 'propertyDef'
	info: IPropertyDefInfo
}

// export type IProfile = IResource<'profile'> & IProfileInfo
export interface IProfile extends IResource<'profile'> /* , IProfileInfo */ {
	// resourceClass: 'profile'
	info: IProfileInfo
}

// export type ISpecialization = IResource<'specialization'> & ISpecializationInfo
export interface ISpecialization extends IResource<'specialization'> /* , ISpecializationInfo */ {
	// resourceClass: 'specialization'
	info: ISpecializationInfo
}

// export type IElement = IResource<'element'> & IElementInfo
export interface IElement extends IResource<'element'> /* , IElementInfo */ {
	// resourceClass: 'element'
	info: IElementInfo
}

// export type IRelationship = IResource<'relationship'> & IRelationshipInfo
export interface IRelationship extends IResource<'relationship'> /* , IRelationshipInfo */ {
	// resourceClass: 'relationship'
	info: IRelationshipInfo
}

// export type IViewpoint = IResource<'viewpoint'> & IViewpointInfo
export interface IViewpoint extends IResource<'viewpoint'> /* , IViewpointInfo */ {
	resourceClass: 'viewpoint'
	info: IViewpointInfo
}

// export type IView = IResource<'view'> & IViewInfo
export interface IView extends IResource<'view'> /*, IViewInfo */ {
	// resourceClass: 'view'
	info: IViewInfo
}

// export type IOrganization = IResource<'organization'> & IOrganizationInfo
export interface IOrganization extends IResource<'organization'> /*, IOrganizationInfo */ {
	// resourceClass: 'organization'
	info: IOrganizationInfo
}

// export type IImage = IResource<'image'> & IImageInfo
export interface IImage extends IResource<'image'> /*, IImageInfo */ {
	// resourceClass: 'image'
	info: IImageInfo
}

export type Resource = ElementResource | PropertyResource