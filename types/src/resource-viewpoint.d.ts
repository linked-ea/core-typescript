import type { IRI } from './common.ts';
type Source = IRI;
type Relationship = IRI;
type Target = IRI;
export interface ViewpointInfo {
    map: Record<Source, Record<Relationship, Set<Target>> | undefined>;
}
export {};
