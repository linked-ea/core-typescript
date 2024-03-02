// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { Alias } from './dict-common.ts'
import type { AspectTypes } from '../types/type-aspects.js'
import type { Layers } from '../types/type-layers.js'

import { archimateBase } from './dict-common.js'

export interface IElementConcept extends Alias {
	name: string
	layer: Layers
	aspect: AspectTypes
	definition: string
}

// --- resource ---
export const elements = {
	[`${archimateBase}ApplicationCollaboration`]: {
		name: 'Application Collaboration',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}ApplicationComponent`]: {
		name: 'Application Component',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[`${archimateBase}ApplicationEvent`]: {
		name: 'Application Event',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[`${archimateBase}ApplicationFunction`]: {
		name: 'Application Function',
		layer: 'Application',
		aspect: 'Behavior',
		definition: '',
	},
	[`${archimateBase}ApplicationInteraction`]: {
		name: 'Application Interaction',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}ApplicationInterface`]: {
		name: 'Application Interface',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}ApplicationProcess`]: {
		name: 'Application Process',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}ApplicationService`]: {
		name: 'Application Service',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Artifact`]: {
		name: 'Artifact',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Assessment`]: {
		name: 'Assessment',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessActor`]: {
		name: 'Business Actor',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessCollaboration`]: {
		name: 'Business Collaboration',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessEvent`]: {
		name: 'Business Event',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessFunction`]: {
		name: 'Business Function',
		layer: 'Business',
		aspect: 'Passive Structure',
		definition: '',
	},
	[`${archimateBase}BusinessInteraction`]: {
		name: 'Business Interaction',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessInterface`]: {
		name: 'Business Interface',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessObject`]: {
		name: 'Business Object',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessProcess`]: {
		name: 'Business Process',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessRole`]: {
		name: 'Business Role',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}BusinessService`]: {
		name: 'Business Service',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Capability`]: {
		name: 'Capability',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}CommunicationNetwork`]: {
		name: 'Communication Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'Network', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${archimateBase}Constraint`]: {
		name: 'Constraint',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Contract`]: {
		name: 'Contract',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}CourseOfAction`]: {
		name: 'Course Of Action',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}DataObject`]: {
		name: 'Data Object',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Deliverable aspect
	[`${archimateBase}Deliverable`]: {
		name: 'Deliverable',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Device`]: {
		name: 'Device',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}DistributionNetwork`]: {
		name: 'Distribution Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Driver`]: {
		name: 'Driver',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Equipment`]: {
		name: 'Equipment',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Facility`]: {
		name: 'Facility',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Gap aspect
	[`${archimateBase}Gap`]: {
		name: 'Gap',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Goal`]: {
		name: 'Goal',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}ImplementationEvent`]: {
		name: 'Implementation Event',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Location`]: {
		name: 'Location',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Material`]: {
		name: 'Material',
		layer: 'Physical',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Meaning`]: {
		name: 'Meaning',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Node`]: {
		name: 'Node',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Outcome`]: {
		name: 'Outcome',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Path`]: {
		name: 'Path',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Plateau aspect
	[`${archimateBase}Plateau`]: {
		name: 'Plateau',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Principle`]: {
		name: 'Principle',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Product`]: {
		name: 'Product',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Representation`]: {
		name: 'Representation',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Requirement`]: {
		name: 'Requirement',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Resource`]: {
		name: 'Resource',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}Stakeholder`]: {
		name: 'Stakeholder',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}SystemSoftware`]: {
		name: 'System Software',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}TechnologyCollaboration`]: {
		name: 'Technology Collaboration',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}TechnologyEvent`]: {
		name: 'Technology Event',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}TechnologyFunction`]: {
		name: 'Technology Function',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureFunction', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${archimateBase}TechnologyInteraction`]: {
		name: 'Technology Interaction',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}TechnologyInterface`]: {
		name: 'Technology Interface',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureInterface', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${archimateBase}TechnologyProcess`]: {
		name: 'Technology Process',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}TechnologyService`]: {
		name: 'Technology Service',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureService', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[`${archimateBase}Value`]: {
		name: 'Value',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}ValueStream`]: {
		name: 'Value Stream',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}WorkPackage`]: {
		name: 'Work Package',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	// other elements
	[`${archimateBase}Grouping`]: {
		name: 'Grouping',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// TODO: validate layer, aspect and definition
	[`${archimateBase}AndJunction`]: {
		name: 'AND Junction',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[`${archimateBase}OrJunction`]: {
		name: 'OR Junction',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
} as const satisfies Record<string, IElementConcept>