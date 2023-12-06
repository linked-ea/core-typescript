// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from './common.js'
import type { TLangString } from 'foundation-lang-strings.js'
import type { NamedResource, Info } from 'foundation-resource.js'

// --- interfaces ---
type PropertyInfo = Info<'property'> & IProperties

export type PropertyResource = NamedResource & PropertyInfo

// --- properties ---
export const propertyTypes = {
	integer: 'The integer type is used for integral numbers. Floating point numbers are rejected',
	number: 'Any numeric type, either integers or floating point numbers',
	date: 'year-month-day as defined by RFC 3339, section 5.6 (https://tools.ietf.org/html/rfc3339#section-5.6)',
	boolean: 't',
	currency: 'number subject to system language-sensitive number formatting',
	duration: 'defined by the ISO 8601 ABNF for "duration" (https://www.w3.org/TR/xmlschema-2/#duration)',
	enumeration: '',
	string: '',
} as const satisfies Record<string, string>

export type TPropertyTypes = keyof typeof propertyTypes

interface IPropertyTypeBase<TPropertyTypes> {
	type: TPropertyTypes
	defaultValue?: TPropertyValue
}

export interface IPropertyRange <T> {
	range?: {minimum: T, maximum: T}
}

export interface IPropertyEnumeration {
	[key: IRI]: TLangString
}

export type PropertyTypeInteger = IPropertyTypeBase<'integer'> & IPropertyRange<number>
export type PropertyTypeNumber = IPropertyTypeBase<'number'> & IPropertyRange<number>
export type PropertyTypeDate = IPropertyTypeBase<'date'> & IPropertyRange<Date>
export type PropertyTypeBoolean = IPropertyTypeBase<'boolean'>
export type PropertyTypeCurrency = IPropertyTypeBase<'currency'> & IPropertyRange<number>
export type PropertyTypeDuration = IPropertyTypeBase<'duration'>
export interface PropertyTypeEnumeration extends IPropertyTypeBase<'enumeration'> {
	enumeration: IPropertyEnumeration
}
export interface PropertyTypeString extends IPropertyTypeBase<'string'> {
	pattern?: RegExp
}

export type IPropertyDefInfo =
	PropertyTypeString |
	PropertyTypeInteger |
	PropertyTypeNumber |
	PropertyTypeDate |
	PropertyTypeBoolean |
	PropertyTypeCurrency |
	PropertyTypeDuration |
	PropertyTypeEnumeration

// --- properties
export type TPropertyValue =
	string | // string
	number | // number, integer, currenty
	boolean | // boolean
	Date | // date
	IRI // enumeration

export type TPropertyRecord = Record<IRI, TPropertyValue>

export interface IProperties {
	properties?: TPropertyRecord
}
