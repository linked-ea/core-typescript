// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---

// --- resource ---
import type { IRI } from './common.js'
import type { TLangString, IName } from 'foundation-lang-strings.js'
import type { IDocumentation } from 'foundation-documentation.js'

// --- core resources

export type Deprecated = boolean

// ISSUE: should classes be ArchiMate(r) IRI's or just strings?

export type TResourceClass =
'model' |
'propertyDef' |
'profile' |
'specialization' |
'element' |
'relationship' |
'viewpoint' |
'view' |
'organization' |
'image'

export interface NamedResource extends IName, IDocumentation {
	modelIdentifier: IRI
	identifier: IRI
	name: TLangString
	documentation?: TLangString
	deprecated?: Deprecated
	info: {
		type: TResourceClass
	}
}

export interface IResouceClass<TResourceClass> {
	type: TResourceClass
}

export interface Info<TResourceClass> {
	type: TResourceClass
}
