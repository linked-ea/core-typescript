// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import { type IAlias } from './common.js'
import type { TAspects, TLayers } from './foundation-context.js'
import type { NamedResource, Info } from 'foundation-resource.js'
import type { IProperties } from './foundation-property.js'

// --- interfaces ---
type ElementInfo = Info<'element'> & IProperties

export type ElementResource = NamedResource & ElementInfo

// --- elements ---
type TElementTypesBase="http://www.opengroup.org/xsd/archimate/3.0/"

export type TElementTypes = `${TElementTypesBase}${TElementTypesUnion}`

export type TElementTypesUnion = keyof typeof elements

export interface IElementInfo extends IProperties {
	type: TElementTypesUnion
}

// --- concept ---

export interface IElementConcept extends IAlias {
	name: string
layer: TLayers
aspect: TAspects
definition: string
}

export const elements = {
	'ApplicationCollaboration': {
		name: 'Application Component',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	ApplicationComponent: {
		name: 'Application Component',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	ApplicationEvent: {
		name: 'Application Event',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	ApplicationFunction: {
		name: 'Application Function',
		layer: 'Application',
		aspect: 'Behavior',
		definition: '',
	},
	ApplicationInteraction: {
		name: 'Application Interaction',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	ApplicationInterface: {
		name: 'Application Interface',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	ApplicationProcess: {
		name: 'Application Process',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	ApplicationService: {
		name: 'Application Service',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	Artifact: {
		name: 'Artifact',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	Assessment: {
		name: 'Assessment',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessActor: {
		name: 'Business Actor',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessCollaboration: {
		name: 'Business Collaboration',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessEvent: {
		name: 'Business Event',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessFunction: {
		name: 'Business Function',
		layer: 'Business',
		aspect: 'Passive Structure',
		definition: '',
	},
	BusinessInteraction: {
		name: 'Business Interaction',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessInterface: {
		name: 'Business Interface',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessObject: {
		name: 'Business Object',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessProcess: {
		name: 'Business Process',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessRole: {
		name: 'Business Role',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	BusinessService: {
		name: 'Business Service',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	Capability: {
		name: 'Capability',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	CommunicationNetwork: {
		name: 'Communication Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'Network', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	Constraint: {
		name: 'Constraint',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	Contract: {
		name: 'Contract',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	CourseOfAction: {
		name: 'Course Of Action',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	DataObject: {
		name: 'Data Object',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Deliverable aspect
	Deliverable: {
		name: 'Deliverable',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	Device: {
		name: 'Device',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	DistributionNetwork: {
		name: 'Distribution Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	Driver: {
		name: 'Driver',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	Equipment: {
		name: 'Equipment',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	Facility: {
		name: 'Facility',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Gap aspect
	Gap: {
		name: 'Gap',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	Goal: {
		name: 'Goal',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	ImplementationEvent: {
		name: 'Implementation Event',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	Location: {
		name: 'Location',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	Material: {
		name: 'Material',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	Meaning: {
		name: 'Meaning',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	Node: {
		name: 'Node',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	Outcome: {
		name: 'Outcome',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	Path: {
		name: 'Path',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Plateau aspect
	Plateau: {
		name: 'Plateau',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	Principle: {
		name: 'Principle',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	Product: {
		name: 'Product',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	Representation: {
		name: 'Representation',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	Requirement: {
		name: 'Requirement',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	Resource: {
		name: 'Resource',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	Stakeholder: {
		name: 'Stakeholder',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	SystemSoftware: {
		name: 'System Software',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	TechnologyCollaboration: {
		name: 'Technology Collaboration',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	TechnologyEvent: {
		name: 'Technology Event',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	TechnologyFunction: {
		name: 'Technology Function',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureFunction', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	TechnologyInteraction: {
		name: 'Technology Interaction',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	TechnologyInterface: {
		name: 'Technology Interface',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureInterface', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	TechnologyProcess: {
		name: 'Technology Process',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	TechnologyService: {
		name: 'Technology Service',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureService', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	Value: {
		name: 'Value',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	ValueStream: {
		name: 'Value Stream',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	WorkPackage: {
		name: 'Work Package',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	// other elements
	Grouping: {
		name: 'Grouping',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// TODO: validate layer, aspect and definition
	AndJunction: {
		name: 'AND Junction',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	OrJunction: {
		name: 'OR Junction',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
} as const satisfies Record<string, IElementConcept>