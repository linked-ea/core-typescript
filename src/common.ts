// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

export const ArchimateBase = 'http://www.opengroup.org/xsd/archimate/3.0/'

// TODO - identifier should be read-only
export type IRI = string // attribute of identifier IRI, to be used in conjunction with Base, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base

export interface IIdentifier {
	identifier: Readonly<IRI>
}

export interface IAlias {
	alias?: string // alias of the concept
}

export type RGBValueType = number // 0-255

export interface RGBColorType {
	r: RGBValueType,
	g: RGBValueType,
	b: RGBValueType,
	a?: number // alpha 0-1
}
