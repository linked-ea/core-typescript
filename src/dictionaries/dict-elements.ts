// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { Alias } from './dict-common.ts'
import type { AspectTypes } from '../common-types/type-aspects.js'
import type { Layers } from '../common-types/type-layers.js'
import * as ElementTypeEnum from '../enums/element-type-enum.js'
import type { ElementTypesUnion } from '../resources/element.js'

import { archimateBase } from './dict-common.js'

export interface IElementConcept extends Alias {
	name: string
	layer: Layers
	aspect: AspectTypes
	definition: string
}

// --- resource ---
export const elements: Record<ElementTypesUnion, IElementConcept> = {
	[ElementTypeEnum.ApplicationCollaboration]: {
		name: 'Application Collaboration',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.ApplicationComponent]: {
		name: 'Application Component',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[ElementTypeEnum.ApplicationEvent]: {
		name: 'Application Event',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[ElementTypeEnum.ApplicationFunction]: {
		name: 'Application Function',
		layer: 'Application',
		aspect: 'Behavior',
		definition: '',
	},
	[ElementTypeEnum.ApplicationInteraction]: {
		name: 'Application Interaction',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.ApplicationInterface]: {
		name: 'Application Interface',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.ApplicationProcess]: {
		name: 'Application Process',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.ApplicationService]: {
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
	[ElementTypeEnum.Assessment]: {
		name: 'Assessment',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessActor]: {
		name: 'Business Actor',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessCollaboration]: {
		name: 'Business Collaboration',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessEvent]: {
		name: 'Business Event',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessFunction]: {
		name: 'Business Function',
		layer: 'Business',
		aspect: 'Passive Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessInteraction]: {
		name: 'Business Interaction',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessInterface]: {
		name: 'Business Interface',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessObject]: {
		name: 'Business Object',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessProcess]: {
		name: 'Business Process',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessRole]: {
		name: 'Business Role',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.BusinessService]: {
		name: 'Business Service',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Capability]: {
		name: 'Capability',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.CommunicationNetwork]: {
		name: 'Communication Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'Network', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementTypeEnum.Constraint]: {
		name: 'Constraint',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Contract]: {
		name: 'Contract',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.CourseOfAction]: {
		name: 'Course Of Action',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.DataObject]: {
		name: 'Data Object',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Deliverable aspect
	[ElementTypeEnum.Deliverable]: {
		name: 'Deliverable',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Device]: {
		name: 'Device',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.DistributionNetwork]: {
		name: 'Distribution Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Driver]: {
		name: 'Driver',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Equipment]: {
		name: 'Equipment',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Facility]: {
		name: 'Facility',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Gap aspect
	[ElementTypeEnum.Gap]: {
		name: 'Gap',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Goal]: {
		name: 'Goal',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.ImplementationEvent]: {
		name: 'Implementation Event',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Location]: {
		name: 'Location',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Material]: {
		name: 'Material',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Meaning]: {
		name: 'Meaning',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Node]: {
		name: 'Node',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Outcome]: {
		name: 'Outcome',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Path]: {
		name: 'Path',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Plateau aspect
	[ElementTypeEnum.Plateau]: {
		name: 'Plateau',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Principle]: {
		name: 'Principle',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Product]: {
		name: 'Product',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Representation]: {
		name: 'Representation',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Requirement]: {
		name: 'Requirement',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Resource]: {
		name: 'Resource',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.Stakeholder]: {
		name: 'Stakeholder',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.SystemSoftware]: {
		name: 'System Software',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.TechnologyCollaboration]: {
		name: 'Technology Collaboration',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.TechnologyEvent]: {
		name: 'Technology Event',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.TechnologyFunction]: {
		name: 'Technology Function',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureFunction', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementTypeEnum.TechnologyInteraction]: {
		name: 'Technology Interaction',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.TechnologyInterface]: {
		name: 'Technology Interface',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureInterface', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementTypeEnum.TechnologyProcess]: {
		name: 'Technology Process',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.TechnologyService]: {
		name: 'Technology Service',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureService', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementTypeEnum.Value]: {
		name: 'Value',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.ValueStream]: {
		name: 'Value Stream',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementTypeEnum.WorkPackage]: {
		name: 'Work Package',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	// other elements
	[ElementTypeEnum.Grouping]: {
		name: 'Grouping',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
} as const