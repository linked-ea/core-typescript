// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ResourceClassUnion } from '../union-types/resource-class-union.js'
import * as ENUM from '../enums/index.js'

// --- dictionary ---
// export const resourceClasses: Record<ResourceClassUnion, object> = {
export const resourceClasses: Record<ResourceClassUnion, object> = {
	[ENUM.ResourceClass.Model]: {},
	[ENUM.ResourceClass.ModelReference]: {},
	[ENUM.ResourceClass.PropertyDef]: {},
	[ENUM.ResourceClass.Profile]: {},
	[ENUM.ResourceClass.Image]: {},
	[ENUM.ResourceClass.Specialization]: {},
	[ENUM.ResourceClass.Element]: {},
	[ENUM.ResourceClass.Relationship]: {},
	[ENUM.ResourceClass.RelationshipConnector]: {},
	[ENUM.ResourceClass.Viewpoint]: {},
	[ENUM.ResourceClass.View]: {},
	[ENUM.ResourceClass.Organization]: {},
} as const
