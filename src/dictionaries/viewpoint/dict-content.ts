// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ViewPointContent } from '../../resources/viewpoint.js'

// --- dictionary ---

export const content: Record<ViewPointContent, string> = {
	Details: 'Views on the detailed level typically consider one layer and one aspect from the ArchiMate Core Framework. Typical stakeholders are a software engineer responsible for design and implementation of a software component or a process owner responsible for effective and efficient process execution..',
	Coherence: 'At the coherence abstraction level, multiple layers or multiple aspects are spanned. Extending the view to more than one layer or aspect enables the stakeholder to focus on architecture relationships like process-uses-system (multiple layer) or application-uses-object (multiple aspect). Typical stakeholders are operational managers responsible for a collection of IT services or business processes.',
	Overview: 'The overview abstraction level addresses both multiple layers and multiple aspects.'
} as const
