import type { IRI } from './common.js';
import type { TLangString } from './foundation-lang-strings.js';
export declare const propertyTypes: {
    readonly INTEGER: "The integer type is used for integral numbers. Floating point numbers are rejected";
    readonly NUMBER: "Any numeric type, either integers or floating point numbers";
    readonly DATE: "year-month-day as defined by RFC 3339, section 5.6 (https://tools.ietf.org/html/rfc3339#section-5.6)";
    readonly BOOLEAN: "true or false";
    readonly CURRENCY: "number subject to system language-sensitive number formatting";
    readonly DURATION: "defined by the ISO 8601 ABNF for \"duration\" (https://www.w3.org/TR/xmlschema-2/#duration)";
    readonly ENUMERATION: "list of possible text values";
    readonly STRING: "text";
};
export type PropertyDefTypes = keyof typeof propertyTypes;
interface IPropertyTypeBase<T extends PropertyDefTypes> {
    type: T;
}
export interface DefaultValue<T> {
    defaultValue?: T | undefined;
}
export interface Range<T> {
    range?: {
        minimum: T;
        maximum: T;
    };
}
export interface PropertyEnumeration {
    [key: IRI]: TLangString;
}
export declare namespace Type {
    type INTEGER = IPropertyTypeBase<'INTEGER'> & Range<number> & DefaultValue<number>;
    type NUMBER = IPropertyTypeBase<'NUMBER'> & Range<number> & DefaultValue<number>;
    type DATE = IPropertyTypeBase<'DATE'> & Range<string> & DefaultValue<string>;
    type BOOLEAN = IPropertyTypeBase<'BOOLEAN'> & Range<boolean> & DefaultValue<boolean>;
    type CURRENCY = IPropertyTypeBase<'CURRENCY'> & Range<number> & DefaultValue<number>;
    type DURATION = IPropertyTypeBase<'DURATION'> & Range<number> & DefaultValue<number>;
    type ENUMERATION = IPropertyTypeBase<'ENUMERATION'> & DefaultValue<IRI> & {
        enumeration: PropertyEnumeration;
    };
    type STRING = IPropertyTypeBase<'STRING'> & DefaultValue<string> & {
        pattern?: RegExp;
    };
}
export type PropertyDefInfo = Type.INTEGER | Type.NUMBER | Type.DATE | Type.BOOLEAN | Type.CURRENCY | Type.DURATION | Type.ENUMERATION | Type.STRING;
export type TPropertyValue = string | // string
number | // number, integer, currenty
boolean | // boolean
Date | // date
IRI;
export interface PropertyRecord {
    properties?: Record<keyof typeof propertyTypes, TPropertyValue>;
}
export {};
