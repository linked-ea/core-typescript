import type * as ResourceClass from './resource-classes.js'

// TODO: #36 replace by type template as individual types are only used for resource definition (use typeof ResourceClass.Model instead)	
export type ResourceClassUnion =
	| ResourceClass.Model
	| ResourceClass.ModelReference
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