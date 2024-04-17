// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

import type { Aspect } from '../types/type-aspects.js'

export const aspects: Record<string, Aspect> = {
	'Passive Structure': {
		darken: 0,
		corners: 'square',
	},
	Behavior: {
		darken: 0.1,
		corners: 'round',
	},
	'Active Structure': {
		darken: 0.2,
		corners: 'square',
	},
	Motivation: {
		darken: 0,
		corners: 'diagonal',
	},
} as const
