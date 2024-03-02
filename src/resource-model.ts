// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './types/type-common.js'
import type { LangCode } from './types/type-iso-639-1-alpha-2.js'


// --- resource ---
export interface ModelInfo {
	base: Base
	language: LangCode // Default language, must be included in all language entries, maps to Dublin Core 1.1
	currency: string, // Model currency, as defined by ISO 4217 (https://www.iso.org/iso-4217-currency-codes.html)'
	version: number // Version counter, positive integer, maps to Dublin Core 1.1
	additionalLanguages?: LangCode[] // Additional Languages supported by model, maps to Dublin Core 1.1
	coverage?: string // Dublin Core 1.1 - The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant
	creator?: string // Dublin Core 1.1 - An entity primarily responsible for making the resource
	contributor?: string[] // Dublin Core 1.1 - An entity responsible for making contributions to the resource
	date: string // Dublin Core 1.1, year-month-day as defined by RFC 3339
	rights?: string // Dublin Core 1.1 - Information about rights held in and over the resource
	referencedModels?: IReferencedModel[]
	previousVersion?: IRI,
}

// base of identifier IRI, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base
// to be used in conjunction with Identifier. Base must end with a slash (/) or a hash (#)
export type Base = string

// TODO - reference models
interface IReferencedModel extends Omit<ModelInfo, "referencedModels"> {}