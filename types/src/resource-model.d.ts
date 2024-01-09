import type { IRI } from './common.js';
import type { TLangCode } from './codes-iso-639-1-alpha-2.js';
export interface ModelInfo {
    base: Readonly<Base>;
    version: number;
    language: TLangCode;
    additionalLanguages?: TLangCode[];
    coverage?: string;
    creator?: string;
    contributor?: string[];
    date: string;
    rights?: string;
    referencedModels?: IReferencedModel[];
    previousVersion?: IRI;
    currency: string;
}
export type Base = string;
interface IReferencedModel extends Omit<ModelInfo, "referencedModels"> {
}
export {};
