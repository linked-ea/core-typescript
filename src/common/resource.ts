// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---

// --- resource ---
import type { IRI } from '../types/type-common.js'
import type { Name } from './lang-strings.js'
import type { IDocumentation } from './documentation.js'

// --- core resources

// ISSUE: #20 should deprecated be a boolean or a date?
export type Deprecated = boolean

// ISSUE: should classes be ArchiMate(r) IRI's or just strings?

export type ResourceClasses =
'model' |
'propertyDef' |
'profile' |
'image' |
'specialization' |
'element' |
'relationship' |
'relationshipConnector' |
'viewpoint' |
'view' |
'organization'

export interface NamedResource extends Name, IDocumentation {
	modelIdentifier: IRI
	identifier: IRI
	deprecated?: Deprecated
	/*
	info: {
		type: ResourceClass
	}
	*/
}

export interface ResourceClass<T extends ResourceClasses> {
	resourceClass: T
}
