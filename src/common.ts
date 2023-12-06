// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// TODO - identifier should be read-only
export type IRI = string // attribute of identifier IRI, to be used in conjunction with Base, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base

export interface IIdentifier {
	identifier: Readonly<IRI>
}

export interface IAlias {
	alias?: string // alias of the concept
}

export interface IRgbColor {
	r: number // 0-255
	g: number // 0-255
	b: number // 0-255
}

export interface IRgbaColor extends IRgbColor {
	a: number // 0-1
}
