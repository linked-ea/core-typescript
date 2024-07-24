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
export const AspectTypes = {
	PassiveStructure: 'Passive Structure',
	Behavior: 'Behavior',
	ActiveStructure: 'Active Structure',
	Motivation: 'Motivation',
} as const


/**
 * Available ArchiMate® aspect types.
 */
export type AspectTypesUnion = typeof AspectTypes[keyof typeof AspectTypes]