import * as CORE from './index.js';
export declare const modelIdentifier: CORE.IRI;
export declare const base: string;
export declare const defaultLanguage = "en";
export declare namespace model {
    const resource: {
        readonly resourceClass: "model";
        readonly modelIdentifier: string;
        readonly identifier: "http://mymodel/testmodel#version1";
        readonly name: {
            en: string;
        };
        readonly documentation: {
            en: string;
        };
        readonly info: {
            readonly base: string;
            readonly version: 1;
            readonly language: "en";
            readonly date: string;
            readonly currency: "USD";
        };
    };
}
export declare namespace propertyDefinitons {
    namespace base {
        const identifier: string;
        const resource: {
            name: {
                en: string;
            };
            info: {
                resourceClass: string;
                type: "STRING";
            };
        };
    }
    namespace string {
        const identifier: string;
        const stringResource: {
            readonly resourceClass: "propertyDef";
            readonly modelIdentifier: string;
            readonly identifier: string;
            readonly name: {
                en: string;
            };
            readonly documentation: {
                en: string;
            };
            readonly info: {
                readonly type: "STRING";
                readonly defaultValue: "default string value";
            };
        };
    }
    namespace number {
        const identifier: string;
        const numberResource: {
            readonly resourceClass: "propertyDef";
            readonly modelIdentifier: string;
            readonly identifier: string;
            readonly name: {
                en: string;
            };
            readonly documentation: {
                en: string;
            };
            readonly info: {
                readonly type: "NUMBER";
                readonly range: {
                    readonly minimum: 1.5;
                    readonly maximum: 3.5;
                };
            };
        };
    }
    namespace currency {
        const identifier: string;
        const resource: {
            readonly resourceClass: "propertyDef";
            readonly modelIdentifier: string;
            readonly identifier: string;
            readonly name: {
                en: string;
            };
            readonly documentation: {
                en: string;
            };
            readonly info: {
                readonly type: "CURRENCY";
                readonly range: {
                    readonly minimum: 1.5;
                    readonly maximum: 3.5;
                };
            };
        };
    }
    namespace date {
        const identifier: string;
        const resource: {
            readonly resourceClass: "propertyDef";
            readonly modelIdentifier: string;
            readonly identifier: string;
            readonly name: {
                en: string;
            };
            readonly documentation: {
                en: string;
            };
            readonly info: {
                readonly type: "DATE";
                readonly range: {
                    readonly minimum: "2022-01-01";
                    readonly maximum: "2022-12-31";
                };
            };
        };
    }
}
export declare namespace profile {
    const resource: {
        readonly resourceClass: "profile";
        readonly modelIdentifier: string;
        readonly identifier: `${string}profile}`;
        readonly name: {
            en: string;
        };
        readonly documentation: {
            en: string;
        };
        readonly info: {};
    };
}
export declare namespace image {
    const resource: {
        readonly resourceClass: "image";
        readonly modelIdentifier: string;
        readonly identifier: `${string}image}`;
        readonly name: {
            en: string;
        };
        readonly documentation: {
            en: string;
        };
        readonly info: {};
    };
}
export declare namespace element {
    const resource: {
        readonly resourceClass: "element";
        readonly modelIdentifier: string;
        readonly identifier: `${string}element}`;
        readonly name: {
            en: string;
        };
        readonly documentation: {
            en: string;
        };
        readonly info: {
            readonly type: "http://www.opengroup.org/xsd/archimate/3.0/ApplicationComponent";
        };
    };
}
export declare namespace relationship {
    const identifier: string;
    const resourcePut: {
        modelIdentifier: string;
        identifier: string;
        name: {
            en: string;
        };
        documentation: {
            en: string;
        };
        info: {
            resourceClass: string;
            type: string;
            source: string;
            target: string;
        };
    };
}
export declare namespace view {
    const identifier: string;
    const resource: {
        readonly resourceClass: "view";
        readonly modelIdentifier: string;
        readonly identifier: string;
        readonly name: {
            readonly en: "view";
        };
        readonly documentation: {
            readonly en: "documentation";
        };
        readonly info: {};
    };
}
