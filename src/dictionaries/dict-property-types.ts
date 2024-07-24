/**
 * @module
 * property types dictionary
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

// --- project imports ---
import  { PropertyTypes, type PropertyTypesUnion } from '../enums/property-types-enum.js'

// --- dictionary exports ---
// TODO - associate property types to be used
// (8)
/**
 * Dictionary of property types.
 *
 * @remarks
 * This dictionary maps `PropertyTypesUnion` values to their corresponding string descriptions.
 */
export const propertyTypes: Record<PropertyTypesUnion, string> = {
	[PropertyTypes.Integer]: 'The integer type is used for integral numbers. Floating point numbers are rejected',
	[PropertyTypes.Number]: 'Any numeric type, either integers or floating point numbers',
	[PropertyTypes.Date]: 'year-month-day as defined by RFC 3339, section 5.6 (https://tools.ietf.org/html/rfc3339#section-5.6)',
	[PropertyTypes.Boolean]: 'true or false',
	[PropertyTypes.Currency]: 'number subject to system language-sensitive number formatting',
	[PropertyTypes.Duration]: 'defined by the ISO 8601 ABNF for "duration" (https://www.w3.org/TR/xmlschema-2/#duration)',
	[PropertyTypes.Enumeration]: 'list of possible text values',
	[PropertyTypes.String]: 'text',
} as const

export function isPropertyDefType (value: string): value is PropertyTypesUnion {
	return Object.keys(propertyTypes).includes(value)
}