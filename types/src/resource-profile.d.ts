import type { IRI } from './common.js';
export interface ProfileInfo {
    properties?: Record<IRI, boolean>;
}
