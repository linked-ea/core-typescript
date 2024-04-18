// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ArchimateBase } from "common/archimate-base.js"
import type { ResourceClassFragment } from '../fragments/resource-class-fragments.js'
import type { IRI } from '../types/type-common.js'
import type { Name } from './lang-strings.js'
import type { IDocumentation } from './documentation.js'

// --- core resources

// ISSUE: #20 should deprecated be a boolean or a date?
export type Deprecated = boolean

// ISSUE: #24 should classes be ArchiMate(r) IRI's or just strings?

export type ResourceClasses = `${ArchimateBase}${ResourceClassFragment}`

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
