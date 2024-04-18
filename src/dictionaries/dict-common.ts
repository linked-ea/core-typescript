// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// MARK: --- project imports ---
import type { ResourceClasses } from '../common/resource.js'
import * as ENUM from '../enums/index.js'

export interface Alias {
	alias?: string // alias of the concept
}

export const archimateBase = 'http://www.opengroup.org/xsd/archimate/3.0/'

// TODO #25 DICT resourceClass to be multi-language
export const resourceClasses: Record<ResourceClasses, string> = {
	[ENUM.ResourceClass.Model]: "model",
	[ENUM.ResourceClass.PropertyDef]: "propertyDef",
	[ENUM.ResourceClass.Profile]: "profile",
	[ENUM.ResourceClass.Image]: "image",
	[ENUM.ResourceClass.Specialization]: "specialization",
	[ENUM.ResourceClass.Element]: "element",
	[ENUM.ResourceClass.Relationship]: "relationship",
	[ENUM.ResourceClass.RelationshipConnector]: "relationshipConnector",
	[ENUM.ResourceClass.Viewpoint]: "viewpoint",
	[ENUM.ResourceClass.View]: "view",
	[ENUM.ResourceClass.Organization]: "organization",
} as const

export function isResourceClass (value: string): value is ResourceClasses {
	return Object.keys(resourceClasses).includes(value)
}
