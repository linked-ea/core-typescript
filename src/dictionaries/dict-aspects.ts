// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

import { AspectTypes, type AspectTypesUnion } from '../enums/aspect-types-enum.js'

/**
 * Represents information about an aspect.
 */
interface AspectInfo {
	darken: number
	/** how corner of element concept will be displayed in views */
	corners: 'round' | 'square' | 'diagonal'
}

/**
 * Dictionary of ArchiMate® aspects.
 */
export const aspects: Record<AspectTypesUnion, AspectInfo> = {
	[AspectTypes.ActiveStructure]: {
		darken: 0.2,
		corners: 'square',
	},
	[AspectTypes.Behavior]: {
		darken: 0.1,
		corners: 'round',
	},
	[AspectTypes.Motivation]: {
		darken: 0,
		corners: 'diagonal',
	},
	[AspectTypes.PassiveStructure]: {
		darken: 0,
		corners: 'square',
	},
} as const
