import type { TLangCode } from './codes-iso-639-1-alpha-2.js';
export type TLangString = Record<TLangCode, string>;
export interface ILabel {
    label: TLangString;
}
export interface IName {
    name: TLangString;
}
