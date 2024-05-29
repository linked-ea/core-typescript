import type * as ResourceClass from './resource-classes.js'

export type ResourceClassUnion =
	| ResourceClass.Model
	| ResourceClass.PropertyDef
	| ResourceClass.Profile
	| ResourceClass.Image
	| ResourceClass.Specialization
	| ResourceClass.Element
	| ResourceClass.Relationship
	| ResourceClass.RelationshipConnector
	| ResourceClass.Viewpoint
	| ResourceClass.View
	| ResourceClass.Organization