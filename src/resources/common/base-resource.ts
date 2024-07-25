// --- project imports ---

// import type { IDocumentation } from '../common/documentation.js'
import type { NamedResource, ResourceClass } from '../resource-base.js'
import type * as TYPE from '../../union-types/index.js'

// --- types ---
export interface BaseResource<T extends TYPE.ResourceClassUnion> extends ResourceClass<T>, NamedResource {}