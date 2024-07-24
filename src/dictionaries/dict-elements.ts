/**
 * @module
 * Dictionary for element-class concepts.
 *
 * @remarks ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
 *
 */

// --- project imports ---
import type { Alias } from './dict-common.ts'
// import type { AspectTypes } from '../common-types/type-aspects.js'
import type  { AspectTypesUnion } from '../enums/aspect-types-enum.js'
import type { Layers } from '../foundation/type-layers.js'
import { ElementType } from '../enums/element-type-enum.js'
import type { ElementTypesUnion } from '../resources/element.js'

interface ElementConcept extends Alias {
	name: string
	layer: Layers
	aspect: AspectTypesUnion
	definition: string
}

// --- resource ---

/**
 * Represents a dictionary of element types and their corresponding information.
 *
 * @remarks This dictionary maps `ElementTypesUnion` to `IElementConcept`.
 */
export const elements: Record<ElementTypesUnion, ElementConcept> = {
	[ElementType.ApplicationCollaboration]: {
		name: 'Application Collaboration',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.ApplicationComponent]: {
		name: 'Application Component',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[ElementType.ApplicationEvent]: {
		name: 'Application Event',
		layer: 'Application',
		aspect: 'Passive Structure',
		definition: '',
	},
	[ElementType.ApplicationFunction]: {
		name: 'Application Function',
		layer: 'Application',
		aspect: 'Behavior',
		definition: '',
	},
	[ElementType.ApplicationInteraction]: {
		name: 'Application Interaction',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.ApplicationInterface]: {
		name: 'Application Interface',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.ApplicationProcess]: {
		name: 'Application Process',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.ApplicationService]: {
		name: 'Application Service',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Artifact]: {
		name: 'Artifact',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Assessment]: {
		name: 'Assessment',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessActor]: {
		name: 'Business Actor',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessCollaboration]: {
		name: 'Business Collaboration',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessEvent]: {
		name: 'Business Event',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessFunction]: {
		name: 'Business Function',
		layer: 'Business',
		aspect: 'Passive Structure',
		definition: '',
	},
	[ElementType.BusinessInteraction]: {
		name: 'Business Interaction',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessInterface]: {
		name: 'Business Interface',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessObject]: {
		name: 'Business Object',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessProcess]: {
		name: 'Business Process',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessRole]: {
		name: 'Business Role',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.BusinessService]: {
		name: 'Business Service',
		layer: 'Business',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Capability]: {
		name: 'Capability',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.CommunicationNetwork]: {
		name: 'Communication Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'Network', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementType.Constraint]: {
		name: 'Constraint',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Contract]: {
		name: 'Contract',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.CourseOfAction]: {
		name: 'Course Of Action',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.DataObject]: {
		name: 'Data Object',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Deliverable aspect
	[ElementType.Deliverable]: {
		name: 'Deliverable',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Device]: {
		name: 'Device',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.DistributionNetwork]: {
		name: 'Distribution Network',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Driver]: {
		name: 'Driver',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Equipment]: {
		name: 'Equipment',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Facility]: {
		name: 'Facility',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Gap aspect
	[ElementType.Gap]: {
		name: 'Gap',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Goal]: {
		name: 'Goal',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.ImplementationEvent]: {
		name: 'Implementation Event',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Location]: {
		name: 'Location',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Material]: {
		name: 'Material',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Meaning]: {
		name: 'Meaning',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Node]: {
		name: 'Node',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Outcome]: {
		name: 'Outcome',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Path]: {
		name: 'Path',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	// FIXME: check Plateau aspect
	[ElementType.Plateau]: {
		name: 'Plateau',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Principle]: {
		name: 'Principle',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Product]: {
		name: 'Product',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Representation]: {
		name: 'Representation',
		layer: 'Application',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Requirement]: {
		name: 'Requirement',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Resource]: {
		name: 'Resource',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.Stakeholder]: {
		name: 'Stakeholder',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.SystemSoftware]: {
		name: 'System Software',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.TechnologyCollaboration]: {
		name: 'Technology Collaboration',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.TechnologyEvent]: {
		name: 'Technology Event',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.TechnologyFunction]: {
		name: 'Technology Function',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureFunction', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementType.TechnologyInteraction]: {
		name: 'Technology Interaction',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.TechnologyInterface]: {
		name: 'Technology Interface',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureInterface', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementType.TechnologyProcess]: {
		name: 'Technology Process',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.TechnologyService]: {
		name: 'Technology Service',
		layer: 'Technology',
		aspect: 'Active Structure',
		definition: '',
		alias: 'InfrastructureService', // This usage is still permitted but deprecated and will be removed from a future version of the standard
	},
	[ElementType.Value]: {
		name: 'Value',
		layer: 'Motivation',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.ValueStream]: {
		name: 'Value Stream',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
	[ElementType.WorkPackage]: {
		name: 'Work Package',
		layer: 'Implementation & Migration',
		aspect: 'Active Structure',
		definition: '',
	},
	// other elements
	[ElementType.Grouping]: {
		name: 'Grouping',
		layer: 'Strategy',
		aspect: 'Active Structure',
		definition: '',
	},
} as const