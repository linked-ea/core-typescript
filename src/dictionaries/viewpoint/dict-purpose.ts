// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ViewPointPurpose } from '../../resources/viewpoint.js'

// --- dictionary ---

export const purpose: Record<ViewPointPurpose, string> = {
	Deciding: 'Design viewpoints support architects and designers in the design process from initial sketch to detailed design.',
	Designing: 'Decision support viewpoints assist managers in the process of decision-making by offering insight into cross-domain architecture relationships, typically through projections and intersections of underlying models, but also by means of analytical techniques. Typical examples are cross-reference tables, landscape maps, lists, and reports',
	Informing: 'Informing viewpoints help to inform any stakeholder about the Enterprise Architecture, in order to achieve understanding, obtain commitment, and convince adversaries.'
} as const
