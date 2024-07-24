/**
 * @module
 * property types enumeration
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

/**
 * Represents the available property types.
 */
export const PropertyTypes = {
	/**
	 * The integer type is used for integral numbers. Floating point numbers are rejected.
	 */
	Integer: 'integer',
	/**
	 * Any numeric type, either integers or floating point numbers.
	 */
	Number: 'number',
	/**
	 * Year-month-day string as defined by RFC 3339, section 5.6 (https://tools.ietf.org/html/rfc3339#section-5.6).
	 */
	Date: 'date',
	/**
	 * True or false.
	 */
	Boolean: 'boolean',
	/**
	 * Number subject to model default currency.
	 */
	Currency: 'currency',
	/**
	 * Time duration as defined by the ISO 8601 ABNF for "duration" (https://www.w3.org/TR/xmlschema-2/#duration).
	 */
	Duration: 'duration',
	/**
	 * List of possible text values.
	 */
	Enumeration: 'enumeration',
	/**
	 * Text value.
	 */
	String: 'string',
} as const

// type typeofPropertyType = typeof PropertyTypes

// export type PropertyTypesUnion = typeofPropertyType[keyof typeofPropertyType]

/**
 * Represents the available property types.
 */
export type PropertyTypesUnion = typeof PropertyTypes[keyof typeof PropertyTypes]