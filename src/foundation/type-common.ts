// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- local types ---

/**
 * Integer value for the RGB color model, ranging from 0 to 255.
 *
 * @minimum 0
 * @maximum 255
 *
 * @todo #40 add RegEx to restrict to integer values
 */
type RGBValueType = number

// --- type exports ---

/**
 * Resource IRI identifier
 *
 * @type string
 * @format iri
 *
 * @description Resource identifier IRI, to be used in conjunction with Base
 * @see https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base
 * @see https://afs.github.io/rdf-iri-syntax.html
 * @todo
 */
export type IRI = string

export interface Identifier {
	identifier: Readonly<IRI>
}

/**
 * RGB color value.
 */
export interface RGBColorType {
	/** Red channel */
	r: RGBValueType;
	/** Green channel */
	g: RGBValueType;
	/** Blue channel */
	b: RGBValueType;
	/** Alpha channel (optional) */
	a?: number; // alpha 0-1
}
