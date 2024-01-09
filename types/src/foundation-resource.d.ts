import type { IRI } from './common.js';
import type { IName } from './foundation-lang-strings.js';
import type { IDocumentation } from './foundation-documentation.js';
export type Deprecated = boolean;
export type ResourceClasses = 'model' | 'propertyDef' | 'profile' | 'image' | 'specialization' | 'element' | 'relationship' | 'viewpoint' | 'view' | 'organization';
export interface NamedResource extends IName, IDocumentation {
    modelIdentifier: IRI;
    identifier: IRI;
    deprecated?: Deprecated;
}
export interface ResourceClass<T extends ResourceClasses> {
    resourceClass: T;
}
