// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { IAlias } from './common.ts'
import type { TAspects, TLayers } from './foundation-context.ts'
import type { PropertyRecord } from './resource-propertydef.ts'

import { ArchimateBase } from './common.js'

// --- interfaces ---
export interface ElementInfo extends PropertyRecord {
	type: ElementTypesUnion
}

export type ElementTypesUnion = keyof typeof elements

export interface IElementConcept extends IAlias {
	name: string
	layer: TLayers
	aspect: TAspects
	definition: string
}

// --- resource ---
export const elements = {
	[`${ArchimateBase}ApplicationCollaboration`]: {
		name: 'Application Collaboration',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}ApplicationComponent`]: {
		name: 'Application Component',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[`${ArchimateBase}ApplicationEvent`]: {
		name: 'Application Event',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[`${ArchimateBase}ApplicationFunction`]: {
		name: 'Application Function',
		layer: 'Application',
		aspect: 'Behavior',
		definition: '',
	},
	[`${ArchimateBase}ApplicationInteraction`]: {
		name: 'Application Interaction',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}ApplicationInterface`]: {
		name: 'Application Interface',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}ApplicationProcess`]: {
		name: 'Application Process',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}ApplicationService`]: {
		name: 'Application Service',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Artifact`]: {
		name: 'Artifact',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Assessment`]: {
		name: 'Assessment',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessActor`]: {
		name: 'Business Actor',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessCollaboration`]: {
		name: 'Business Collaboration',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessEvent`]: {
		name: 'Business Event',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessFunction`]: {
		name: 'Business Function',
		layer: 'Business',
		aspect: 'Passive Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessInteraction`]: {
		name: 'Business Interaction',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessInterface`]: {
		name: 'Business Interface',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessObject`]: {
		name: 'Business Object',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessProcess`]: {
		name: 'Business Process',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessRole`]: {
		name: 'Business Role',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}BusinessService`]: {
		name: 'Business Service',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Capability`]: {
		name: 'Capability',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}CommunicationNetwork`]: {
		name: 'Communication Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'Network', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${ArchimateBase}Constraint`]: {
		name: 'Constraint',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Contract`]: {
		name: 'Contract',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}CourseOfAction`]: {
		name: 'Course Of Action',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}DataObject`]: {
		name: 'Data Object',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Deliverable aspect
	[`${ArchimateBase}Deliverable`]: {
		name: 'Deliverable',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Device`]: {
		name: 'Device',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}DistributionNetwork`]: {
		name: 'Distribution Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Driver`]: {
		name: 'Driver',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Equipment`]: {
		name: 'Equipment',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Facility`]: {
		name: 'Facility',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Gap aspect
	[`${ArchimateBase}Gap`]: {
		name: 'Gap',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Goal`]: {
		name: 'Goal',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}ImplementationEvent`]: {
		name: 'Implementation Event',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Location`]: {
		name: 'Location',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Material`]: {
		name: 'Material',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Meaning`]: {
		name: 'Meaning',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Node`]: {
		name: 'Node',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Outcome`]: {
		name: 'Outcome',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Path`]: {
		name: 'Path',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Plateau aspect
	[`${ArchimateBase}Plateau`]: {
		name: 'Plateau',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Principle`]: {
		name: 'Principle',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Product`]: {
		name: 'Product',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Representation`]: {
		name: 'Representation',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Requirement`]: {
		name: 'Requirement',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Resource`]: {
		name: 'Resource',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}Stakeholder`]: {
		name: 'Stakeholder',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}SystemSoftware`]: {
		name: 'System Software',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}TechnologyCollaboration`]: {
		name: 'Technology Collaboration',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}TechnologyEvent`]: {
		name: 'Technology Event',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}TechnologyFunction`]: {
		name: 'Technology Function',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureFunction', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${ArchimateBase}TechnologyInteraction`]: {
		name: 'Technology Interaction',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}TechnologyInterface`]: {
		name: 'Technology Interface',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureInterface', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${ArchimateBase}TechnologyProcess`]: {
		name: 'Technology Process',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}TechnologyService`]: {
		name: 'Technology Service',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureService', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${ArchimateBase}Value`]: {
		name: 'Value',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}ValueStream`]: {
		name: 'Value Stream',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}WorkPackage`]: {
		name: 'Work Package',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	// other elements
	[`${ArchimateBase}Grouping`]: {
		name: 'Grouping',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// TODO: validate layer, aspect and definition
	[`${ArchimateBase}AndJunction`]: {
		name: 'AND Junction',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${ArchimateBase}OrJunction`]: {
		name: 'OR Junction',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
} as const satisfies Record<string, IElementConcept>