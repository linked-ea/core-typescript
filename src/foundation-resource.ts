// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---

// --- resource ---
import type { IRI } from './types/type-common.js'
import type { IName } from './foundation-lang-strings.js'
import type { IDocumentation } from './foundation-documentation.js'

// --- core resources

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
'viewpoint' |
'view' |
'organization'

export interface NamedResource extends IName, IDocumentation {
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
