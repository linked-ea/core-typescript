// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

import type { ResourceClasses } from '../common/resource.js'

export interface Alias {
	alias?: string // alias of the concept
}

export const archimateBase = 'http://www.opengroup.org/xsd/archimate/3.0/'

export const resourceClasses: Record<ResourceClasses, string> = {
	model: "model",
	propertyDef: "propertyDef",
	profile: "profile",
	image: "image",
	specialization: "specialization",
	element: "element",
	relationship: "relationship",
	relationshipConnector: "relationshipConnector",
	viewpoint: "viewpoint",
	view: "view",
	organization: "organization",
} as const

export function isResourceClass (value: string): value is ResourceClasses {
	return Object.keys(resourceClasses).includes(value)
}
