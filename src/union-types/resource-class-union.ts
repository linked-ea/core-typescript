// import type * as ResourceClass from './resource-classes.js'
import { ResourceClass } from '../enums/resource-class-enum.js'

// TODO: #36 replace by type template as individual types are only used for resource definition (use typeof ResourceClass.Model instead)
/*
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
*/

export type ResourceClassUnion =
	| typeof ResourceClass.Model
	| typeof ResourceClass.ModelReference
	| typeof ResourceClass.PropertyDef
	| typeof ResourceClass.Profile
	| typeof ResourceClass.Image
	| typeof ResourceClass.Specialization
	| typeof ResourceClass.Element
	| typeof ResourceClass.Relationship
	| typeof ResourceClass.RelationshipConnector
	| typeof ResourceClass.Viewpoint
	| typeof ResourceClass.View
	| typeof ResourceClass.Organization