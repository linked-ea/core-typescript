export type ISO_639_1_Alpha_2 = Record<string, {
    name: string;
    nativeName: string;
}>;
export declare const iso_639_1_alpha_2: ISO_639_1_Alpha_2;
export type TLangCode = keyof typeof iso_639_1_alpha_2;
