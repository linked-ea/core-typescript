// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../types/type-common.js'
import type { LangString } from '../common/lang-strings.js'

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

// export type PropertyDefInfo<T extends PropertyDefsTypesUnion> = { info: Info<'propertyDef'> } & { info: T}

// export type PropertyResource = NamedResource, PropertyInfo {}

// --- type exports ---
export type PropertyDefTypesUnion = 'integer' | 'number' | 'date' | 'boolean' | 'currency' | 'duration' | 'enumeration' | 'string'

export type JsType<T extends PropertyDefTypesUnion> =
  T extends 'integer' ? number
: T extends 'number' ? number
: T extends 'string' ? string
: T extends 'date' ? string
: T extends 'boolean' ? boolean
: T extends 'currency' ? number
: T extends 'duration' ? string
: T extends 'enumeration' ? string
: never

interface PropertyDefBase<T extends PropertyDefTypesUnion> {
	type: T
}

interface DefaultValue <T extends PropertyDefTypesUnion> {
	defaultValue?: JsType<T> | undefined
}

interface Range <T extends PropertyDefTypesUnion>{
	minimum?: JsType<T> | undefined
	maximum?: JsType<T> | undefined
}

export interface PropertyEnumeration {
	[key: IRI]: LangString
}

type JsTypeDefault<T extends PropertyDefTypesUnion> = PropertyDefBase<T> & DefaultValue<T>

type JsTypeDefaultAndRange<T extends PropertyDefTypesUnion> = JsTypeDefault<T> & Range<T>

export namespace Type {
	export type INTEGER = JsTypeDefaultAndRange<'integer'>
	export type NUMBER = JsTypeDefaultAndRange<'number'>
	export type DATE = JsTypeDefaultAndRange<'date'> // year-month-day as defined by RFC 3339
	export type BOOLEAN = JsTypeDefaultAndRange<'boolean'>
	export type CURRENCY = JsTypeDefaultAndRange<'currency'>
	export type DURATION = JsTypeDefaultAndRange<'duration'>
	export type STRING = JsTypeDefaultAndRange<'string'> & { pattern?: RegExp }
	export type ENUMERATION =  JsTypeDefault<'enumeration'> & { enumeration: PropertyEnumeration}
	// TODO #21 - define and implement property type time
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

// --- property  types
export type TPropertyValue =
	string | // string
	number | // number, integer, currency
	boolean | // boolean
	Date | // date
	IRI // enumeration

export interface PropertyRecord {
	properties?: Record<IRI, TPropertyValue>
}
