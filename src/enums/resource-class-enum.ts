import type { x } from './outside.js'

// biome-ignore lint/suspicious/noConstEnum: <to allow inlining>
export const enum ResourceClass {
	Model 					= 'http://www.opengroup.org/xsd/archimate/3.0/model',
	PropertyDef 			= 'http://www.opengroup.org/xsd/archimate/3.0/propertyDef',
	Profile 				= 'http://www.opengroup.org/xsd/archimate/3.0/profile',
	Image 					= 'http://www.opengroup.org/xsd/archimate/3.0/image',
	Specialization 			= 'http://www.opengroup.org/xsd/archimate/3.0/specialization',
	Element 				= 'http://www.opengroup.org/xsd/archimate/3.0/element',
	Relationship 			= 'http://www.opengroup.org/xsd/archimate/3.0/relationship',
	RelationshipConnector 	= 'http://www.opengroup.org/xsd/archimate/3.0/relationshipConnector',
	Viewpoint 				= 'http://www.opengroup.org/xsd/archimate/3.0/viewpoint',
	View 					= 'http://www.opengroup.org/xsd/archimate/3.0/view',
	Organization 			= 'http://www.opengroup.org/xsd/archimate/3.0/organization'
}

export type Acaraje = typeof x
