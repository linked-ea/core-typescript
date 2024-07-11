// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- local types ---
type RGBValueType = number // 0-255

// --- type exports ---
// TODO #22 - identifier should be read-only
export type IRI = string // attribute of identifier IRI, to be used in conjunction with Base, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base
						 // also see https://afs.github.io/rdf-iri-syntax.html

export interface Identifier {
	identifier: Readonly<IRI>
}

export interface RGBColorType {
	r: RGBValueType,
	g: RGBValueType,
	b: RGBValueType,
	a?: number // alpha 0-1
}
