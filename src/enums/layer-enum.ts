/**
 * @module
 * aspect types enumeration
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

/**
 * Represents the available property types.
 */
export const Layers = {
	Strategy: 'Strategy',
	Business: 'Business',
	Application: 'Application',
	Technology: 'Technology',
	Motivation: 'Motivation',
	ImplementationAndMigration: 'Implementation & Migration',
	Composite: 'Composite'
} as const


/**
 * Available ArchiMate® aspect types.
 */
export type LayersUnion = typeof Layers[keyof typeof Layers]