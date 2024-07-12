


// (12)
/*
export const Model 					= 'http://www.opengroup.org/xsd/archimate/3.0/model' as const
export const ModelReference 		= 'http://www.opengroup.org/xsd/archimate/3.0/modelReference' as const
export const PropertyDef 			= 'http://www.opengroup.org/xsd/archimate/3.0/propertyDef' as const
export const Profile 				= 'http://www.opengroup.org/xsd/archimate/3.0/profile' as const
export const Image 					= 'http://www.opengroup.org/xsd/archimate/3.0/image' as const
export const Specialization 		= 'http://www.opengroup.org/xsd/archimate/3.0/specialization' as const
export const Element 				= 'http://www.opengroup.org/xsd/archimate/3.0/element' as const
export const Relationship 			= 'http://www.opengroup.org/xsd/archimate/3.0/relationship' as const
export const RelationshipConnector 	= 'http://www.opengroup.org/xsd/archimate/3.0/relationshipConnector' as const
export const Viewpoint 				= 'http://www.opengroup.org/xsd/archimate/3.0/viewpoint' as const
export const View 					= 'http://www.opengroup.org/xsd/archimate/3.0/view' as const
export const Organization 			= 'http://www.opengroup.org/xsd/archimate/3.0/organization' as const
*/

/**
 * Represents the resource classes in the ArchiMate 3.0 specification.
 */
export const ResourceClass = {
	Model 					: 'http://www.opengroup.org/xsd/archimate/3.0/model',
	ModelReference 			: 'http://www.opengroup.org/xsd/archimate/3.0/modelReference',
	PropertyDef 			: 'http://www.opengroup.org/xsd/archimate/3.0/propertyDef',
	Profile 				: 'http://www.opengroup.org/xsd/archimate/3.0/profile',
	Image 					: 'http://www.opengroup.org/xsd/archimate/3.0/image',
	Specialization 			: 'http://www.opengroup.org/xsd/archimate/3.0/specialization',
	Element 				: 'http://www.opengroup.org/xsd/archimate/3.0/element',
	Relationship 			: 'http://www.opengroup.org/xsd/archimate/3.0/relationship',
	RelationshipConnector 	: 'http://www.opengroup.org/xsd/archimate/3.0/relationshipConnector',
	Viewpoint 				: 'http://www.opengroup.org/xsd/archimate/3.0/viewpoint',
	View 					: 'http://www.opengroup.org/xsd/archimate/3.0/view',
	Organization 			: 'http://www.opengroup.org/xsd/archimate/3.0/organization',
} as const

// type ResourceValues = typeof ResourceClass[keyof typeof ResourceClass];

// const x: ResourceValues = ResourceClass.Model
