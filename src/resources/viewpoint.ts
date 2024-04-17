// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IRI } from '../types/type-common.js'

// --- types ---

type Source = IRI // IRI of element or element specialization
type Relationship = IRI // IRI of relationship or relationship specialization
type Target = IRI // IRI of element or element specialization

// --- resource ---

/* CONSTRAINTS: while a viewpoint may only include element types or specializations of element types, when a relationship tyoe or specialization
 * is associated to a Source element type, it must contain at least one Target element type
 */

export interface ViewpointInfo {
	map: Record<Source, Record<Relationship, Set<Target>> | undefined> // TODO: rename map
}
