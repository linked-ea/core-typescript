/**
 * @module
 * property types enumeration
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

export const PropertyTypes = {
	Integer: 'integer',
	Number: 'number',
	Date: 'date',
	Boolean: 'boolean',
	Currency: 'currency',
	Duration: 'duration',
	Enumeration: 'enumeration',
	String: 'string',
} as const

type typeofPropertyType = typeof PropertyTypes

export type PropertyTypesUnion = typeofPropertyType[keyof typeofPropertyType]