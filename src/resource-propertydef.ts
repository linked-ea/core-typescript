// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './common.js'
import type { TLangString } from './foundation-lang-strings.js'

// --- interfaces ---
// export type PropertyInfo = Info<'property'> & IPropertyDefInfo

// export type PropertyDefInfoUnion = IntegerType | NumberType | DateType | BooleanType | CurrencyType | DurationType | EnumerationType | StringType

// export type PropertyDefInfo = Info<'propertyDef'> & PropertyDefInfoUnion

/*
export interface PropertyDefResource extends NamedResource {
	info: PropertyDefInfo
}
*/

// export type PropertyDefResource<PropertyType> = NamedResource & PropertyInfo<PropertyType>

// TODO - include never to force type union
// export type PropertyDefInfo<T extends PropertyDefsTypesUnion> = { info: Info<'propertyDef'> } & { info: T}

// export type PropertyResource = NamedResource, PropertyInfo {}

// --- properties ---

// TODO - associate property types to be used
export const propertyTypes = {
	INTEGER: 'The integer type is used for integral numbers. Floating point numbers are rejected',
	NUMBER: 'Any numeric type, either integers or floating point numbers',
	DATE: 'year-month-day as defined by RFC 3339, section 5.6 (https://tools.ietf.org/html/rfc3339#section-5.6)',
	BOOLEAN: 'true or false',
	CURRENCY: 'number subject to system language-sensitive number formatting',
	DURATION: 'defined by the ISO 8601 ABNF for "duration" (https://www.w3.org/TR/xmlschema-2/#duration)',
	ENUMERATION: 'list of possible text values',
	STRING: 'text',
} as const satisfies Record<string, string>

export type PropertyDefTypes = keyof typeof propertyTypes

interface IPropertyTypeBase<T extends PropertyDefTypes> {
	type: T
}

export interface DefaultValue <T> {
	defaultValue?: T | undefined
}

export interface Range <T> /* extends DefaultValue<T> */ {
	range?: {minimum: T, maximum: T}
}

export interface PropertyEnumeration {
	[key: IRI]: TLangString
}

export namespace Type {
	export type INTEGER = IPropertyTypeBase<'INTEGER'> & Range<number> & DefaultValue<number>
	export type NUMBER = IPropertyTypeBase<'NUMBER'> & Range<number>  & DefaultValue<number>
	export type DATE = IPropertyTypeBase<'DATE'> & Range<string> & DefaultValue<string> // year-month-day as defined by RFC 3339
	export type BOOLEAN = IPropertyTypeBase<'BOOLEAN'> & Range<boolean>  & DefaultValue<boolean>
	export type CURRENCY = IPropertyTypeBase<'CURRENCY'> & Range<number> & DefaultValue<number>
	export type DURATION = IPropertyTypeBase<'DURATION'> & Range<number>  & DefaultValue<number>
	export type ENUMERATION =  IPropertyTypeBase<'ENUMERATION'> & DefaultValue<IRI> & { enumeration: PropertyEnumeration}
	export type STRING = IPropertyTypeBase<'STRING'> & DefaultValue<string> & { pattern?: RegExp }
}

export type PropertyDefInfo =
| Type.INTEGER
| Type.NUMBER
| Type.DATE
| Type.BOOLEAN
| Type.CURRENCY
| Type.DURATION
| Type.ENUMERATION
| Type.STRING

/*
export type IPropertyDefInfo =
	PropertyTypeString |
	PropertyTypeInteger |
	PropertyTypeNumber |
	PropertyTypeDate |
	PropertyTypeBoolean |
	PropertyTypeCurrency |
	PropertyTypeDuration |
	PropertyTypeEnumeration
*/

// --- property  types
export type TPropertyValue =
	string | // string
	number | // number, integer, currenty
	boolean | // boolean
	Date | // date
	IRI // enumeration

export interface PropertyRecord {
	properties?: Record<keyof typeof propertyTypes, TPropertyValue>
}
