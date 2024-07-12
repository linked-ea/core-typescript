// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import { ElementType as E } from '../enums/element-type-enum.js'
import type { ElementTypesUnion } from '../resources/element.js'
import type { RelationshipTypeUnion } from '../resources/relationship.js'
import { RelationshipType } from '../enums/index.js'

// --- relationships ---
const C = RelationshipType.Composition
const g = RelationshipType.Aggregation
// const i = RelationshipType.Assignment
const R = RelationshipType.Realization
// const v = RelationshipType.Serving
// const A = RelationshipType.Access
const n = RelationshipType.Influence
// const T = RelationshipType.Triggering
// const F = RelationshipType.Flow
const S = RelationshipType.Specialization
const o = RelationshipType.Association

// --- dictionary exports ---
// TODO #32 - add allowed relationships for each element type
// TODO #33 - remove undefined from allowedRelationships
export const allowedRelationships: Record<ElementTypesUnion, Record<ElementTypesUnion, Array<RelationshipTypeUnion> | undefined> | undefined> = {
	// motivation (10)
	[E.Assessment]: {
		// motivation (10)
		[E.Assessment]: [S, C, g, n, o],
		[E.Constraint]: [n, o],
		[E.Driver]: [n, o],
		[E.Goal]: [n, o],
		[E.Meaning]: [n, o],
		[E.Outcome]: [n, o],
		[E.Principle]: [n, o],
		[E.Requirement]: [n, o],
		[E.Stakeholder]: [n, o],
		[E.Value]: [n, o],
		// strategy (4)
		[E.Capability]: [n, o],
		[E.ValueStream]: [n, o],
		[E.CourseOfAction]: [n, o],
		[E.Resource]: [n, o],
		// business (13)
		[E.BusinessActor]: [n, o],
		[E.BusinessCollaboration]: [n, o],
		[E.BusinessEvent]: [n, o],
		[E.BusinessFunction]: [n, o],
		[E.BusinessInteraction]: [n, o],
		[E.BusinessInterface]: [n, o],
		[E.BusinessObject]: [n, o],
		[E.BusinessProcess]: [n, o],
		[E.BusinessRole]: [n, o],
		[E.BusinessService]: [n, o],
		[E.Contract]: [n, o],
		[E.Product]: [n, o],
		[E.Representation]: [n, o],
		// application (9)
		[E.ApplicationCollaboration]: [n, o],
		[E.ApplicationComponent]: [n, o],
		[E.ApplicationEvent]: [n, o],
		[E.ApplicationFunction]: [n, o],
		[E.ApplicationInteraction]: [n, o],
		[E.ApplicationInterface]: [n, o],
		[E.ApplicationProcess]: [n, o],
		[E.ApplicationService]: [n, o],
		[E.DataObject]: [n, o],
		// technology (13)
		[E.Artifact]: [n, o],
		[E.CommunicationNetwork]: [n, o],
		[E.Device]: [n, o],
		[E.Node]: [n, o],
		[E.Path]: [n, o],
		[E.SystemSoftware]: [n, o],
		[E.TechnologyCollaboration]: [n, o],
		[E.TechnologyEvent]: [n, o],
		[E.TechnologyFunction]: [n, o],
		[E.TechnologyInteraction]: [n, o],
		[E.TechnologyInterface]: [n, o],
		[E.TechnologyProcess]: [n, o],
		[E.TechnologyService]: [n, o],
		// physical (4)
		[E.DistributionNetwork]: [n, o],
		[E.Equipment]: [n, o],
		[E.Facility]: [n, o],
		[E.Material]: [n, o],
		// implementation & migration (5)
		[E.Deliverable]: [n, o],
		[E.ImplementationEvent]: [n, o],
		[E.WorkPackage]: [n, o],
		[E.Gap]: [o],
		[E.Plateau]: [n, o],
		// other (2)
		[E.Location]: [C, g, n, o],
		[E.Grouping]: [S, C, g, n, o],
	},
	[E.Constraint]: {
		// motivation (10)
		[E.Assessment]: [n, o],
		[E.Constraint]: [S, C, g, n, o],
		[E.Driver]: [n, o],
		[E.Goal]: [n, o],
		[E.Meaning]: [n, o],
		[E.Outcome]: [n, o],
		[E.Principle]: [n, o],
		[E.Requirement]: [n, o],
		[E.Stakeholder]: [n, o],
		[E.Value]: [n, o],
		// strategy (4)
		[E.Capability]: [R, n, o],
		[E.ValueStream]: [R, n, o],
		[E.CourseOfAction]: [R, n, o],
		[E.Resource]: [R, n, o],
		// business (13)
		[E.BusinessActor]: [R, n, o],
		[E.BusinessCollaboration]: [R, n, o],
		[E.BusinessEvent]: [R, n, o],
		[E.BusinessFunction]: [R, n, o],
		[E.BusinessInteraction]: [R, n, o],
		[E.BusinessInterface]: [R, n, o],
		[E.BusinessObject]: [R, n, o],
		[E.BusinessProcess]: [R, n, o],
		[E.BusinessRole]: [R, n, o],
		[E.BusinessService]: [R, n, o],
		[E.Contract]: [R, n, o],
		[E.Product]: [R, n, o],
		[E.Representation]: [R, n, o],
		// application (9)
		[E.ApplicationCollaboration]: [R, n, o],
		[E.ApplicationComponent]: [R, n, o],
		[E.ApplicationEvent]: [R, n, o],
		[E.ApplicationFunction]: [R, n, o],
		[E.ApplicationInteraction]: [R, n, o],
		[E.ApplicationInterface]: [R, n, o],
		[E.ApplicationProcess]: [R, n, o],
		[E.ApplicationService]: [R, n, o],
		[E.DataObject]: [R, n, o],
		// technology (13)
		[E.Artifact]: [R, n, o],
		[E.CommunicationNetwork]: [R, n, o],
		[E.Device]: [R, n, o],
		[E.Node]: [R, n, o],
		[E.Path]: [R, n, o],
		[E.SystemSoftware]: [R, n, o],
		[E.TechnologyCollaboration]: [R, n, o],
		[E.TechnologyEvent]: [R, n, o],
		[E.TechnologyFunction]: [R, n, o],
		[E.TechnologyInteraction]: [R, n, o],
		[E.TechnologyInterface]: [R, n, o],
		[E.TechnologyProcess]: [R, n, o],
		[E.TechnologyService]: [R, n, o],
		// physical (4)
		[E.DistributionNetwork]: [R, n, o],
		[E.Equipment]: [R, n, o],
		[E.Facility]: [R, n, o],
		[E.Material]: [R, n, o],
		// implementation & migration (5)
		[E.Deliverable]: [R, n, o],
		[E.ImplementationEvent]: [R, n, o],
		[E.WorkPackage]: [R, n, o],
		[E.Gap]: [o],
		[E.Plateau]: [C, g, R, n, o],
		// other (2)
		[E.Location]: [C, g, n, o],
		[E.Grouping]: [S, C, g, n, o],
	},
	[E.Driver]: {
		// motivation (10)
		[E.Assessment]: [n, o],
		[E.Constraint]: [n, o],
		[E.Driver]: [S, C, g, n, o],
		[E.Goal]: [n, o],
		[E.Meaning]: [n, o],
		[E.Outcome]: [n, o],
		[E.Principle]: [n, o],
		[E.Requirement]: [n, o],
		[E.Stakeholder]: [n, o],
		[E.Value]: [n, o],
		// strategy (4)
		[E.Capability]: [n, o],
		[E.ValueStream]: [n, o],
		[E.CourseOfAction]: [n, o],
		[E.Resource]: [n, o],
		// business (13)
		[E.BusinessActor]: [n, o],
		[E.BusinessCollaboration]: [n, o],
		[E.BusinessEvent]: [n, o],
		[E.BusinessFunction]: [n, o],
		[E.BusinessInteraction]: [n, o],
		[E.BusinessInterface]: [n, o],
		[E.BusinessObject]: [n, o],
		[E.BusinessProcess]: [n, o],
		[E.BusinessRole]: [n, o],
		[E.BusinessService]: [n, o],
		[E.Contract]: [n, o],
		[E.Product]: [n, o],
		[E.Representation]: [n, o],
		// application (9)
		[E.ApplicationCollaboration]: [n, o],
		[E.ApplicationComponent]: [n, o],
		[E.ApplicationEvent]: [n, o],
		[E.ApplicationFunction]: [n, o],
		[E.ApplicationInteraction]: [n, o],
		[E.ApplicationInterface]: [n, o],
		[E.ApplicationProcess]: [n, o],
		[E.ApplicationService]: [n, o],
		[E.DataObject]: [n, o],
		// technology (13)
		[E.Artifact]: [n, o],
		[E.CommunicationNetwork]: [n, o],
		[E.Device]: [n, o],
		[E.Node]: [n, o],
		[E.Path]: [n, o],
		[E.SystemSoftware]: [n, o],
		[E.TechnologyCollaboration]: [n, o],
		[E.TechnologyEvent]: [n, o],
		[E.TechnologyFunction]: [n, o],
		[E.TechnologyInteraction]: [n, o],
		[E.TechnologyInterface]: [n, o],
		[E.TechnologyProcess]: [n, o],
		[E.TechnologyService]: [n, o],
		// physical (4)
		[E.DistributionNetwork]: [n, o],
		[E.Equipment]: [n, o],
		[E.Facility]: [n, o],
		[E.Material]: [n, o],
		// implementation & migration (5)
		[E.Deliverable]: [n, o],
		[E.ImplementationEvent]: [n, o],
		[E.WorkPackage]: [n, o],
		[E.Gap]: [n, o],
		[E.Plateau]: [n, o],
		// other (2)
		[E.Location]: [C, g, n, o],
		[E.Grouping]: [S, C, g, n, o],
	},
	[E.Goal]: undefined,
	[E.Meaning]: undefined,
	[E.Outcome]: undefined,
	[E.Principle]: undefined,
	[E.Requirement]: undefined,
	[E.Stakeholder]: undefined,
	[E.Value]: undefined,
	// strategy (4)
	[E.Capability]: undefined,
	[E.ValueStream]: undefined,
	[E.CourseOfAction]: undefined,
	[E.Resource]: undefined,
	// business (13)
	[E.BusinessActor]: undefined,
	[E.BusinessCollaboration]: undefined,
	[E.BusinessEvent]: undefined,
	[E.BusinessFunction]: undefined,
	[E.BusinessInteraction]: undefined,
	[E.BusinessInterface]: undefined,
	[E.BusinessObject]: undefined,
	[E.BusinessProcess]: undefined,
	[E.BusinessRole]: undefined,
	[E.BusinessService]: undefined,
	[E.Contract]: undefined,
	[E.Product]: undefined,
	[E.Representation]: undefined,
	// application (9)
	[E.ApplicationCollaboration]: undefined,
	[E.ApplicationComponent]: undefined,
	[E.ApplicationEvent]: undefined,
	[E.ApplicationFunction]: undefined,
	[E.ApplicationInteraction]: undefined,
	[E.ApplicationInterface]: undefined,
	[E.ApplicationProcess]: undefined,
	[E.ApplicationService]: undefined,
	[E.DataObject]: undefined,
	// technology (13)
	[E.Artifact]: undefined,
	[E.CommunicationNetwork]: undefined,
	[E.Device]: undefined,
	[E.Node]: undefined,
	[E.Path]: undefined,
	[E.SystemSoftware]: undefined,
	[E.TechnologyCollaboration]: undefined,
	[E.TechnologyEvent]: undefined,
	[E.TechnologyFunction]: undefined,
	[E.TechnologyInteraction]: undefined,
	[E.TechnologyInterface]: undefined,
	[E.TechnologyProcess]: undefined,
	[E.TechnologyService]: undefined,
	// physical (4)
	[E.DistributionNetwork]: undefined,
	[E.Equipment]: undefined,
	[E.Facility]: undefined,
	[E.Material]: undefined,
	// implementation & migration (5)
	[E.Deliverable]: undefined,
	[E.ImplementationEvent]: undefined,
	[E.WorkPackage]: undefined,
	[E.Gap]: undefined,
	[E.Plateau]: undefined,
	// other (2)
	[E.Location]: undefined,
	[E.Grouping]: undefined,
} as const

/*

{
		// motivation (10)
		[E.Assessment]: undefined,
		[E.Constraint]: undefined,
		[E.Driver]: undefined,
		[E.Goal]: undefined,
		[E.Meaning]: undefined,
		[E.Outcome]: undefined,
		[E.Principle]: undefined,
		[E.Requirement]: undefined,
		[E.Stakeholder]: undefined,
		[E.Value]: undefined,
		// strategy (4)
		[E.Capability]: undefined,
		[E.ValueStream]: undefined,
		[E.CourseOfAction]: undefined,
		[E.Resource]: undefined,
		// business (13)
		[E.BusinessActor]: undefined,
		[E.BusinessCollaboration]: undefined,
		[E.BusinessEvent]: undefined,
		[E.BusinessFunction]: undefined,
		[E.BusinessInteraction]: undefined,
		[E.BusinessInterface]: undefined,
		[E.BusinessObject]: undefined,
		[E.BusinessProcess]: undefined,
		[E.BusinessRole]: undefined,
		[E.BusinessService]: undefined,
		[E.Contract]: undefined,
		[E.Product]: undefined,
		[E.Representation]: undefined,
		// application (9)
		[E.ApplicationCollaboration]: undefined,
		[E.ApplicationComponent]: undefined,
		[E.ApplicationEvent]: undefined,
		[E.ApplicationFunction]: undefined,
		[E.ApplicationInteraction]: undefined,
		[E.ApplicationInterface]: undefined,
		[E.ApplicationProcess]: undefined,
		[E.ApplicationService]: undefined,
		[E.DataObject]: undefined,
		// technology (13)
		[E.Artifact]: undefined,
		[E.CommunicationNetwork]: undefined,
		[E.Device]: undefined,
		[E.Node]: undefined,
		[E.Path]: undefined,
		[E.SystemSoftware]: undefined,
		[E.TechnologyCollaboration]: undefined,
		[E.TechnologyEvent]: undefined,
		[E.TechnologyFunction]: undefined,
		[E.TechnologyInteraction]: undefined,
		[E.TechnologyInterface]: undefined,
		[E.TechnologyProcess]: undefined,
		[E.TechnologyService]: undefined,
		// physical (4)
		[E.DistributionNetwork]: undefined,
		[E.Equipment]: undefined,
		[E.Facility]: undefined,
		[E.Material]: undefined,
		// implementation & migration (5)
		[E.Deliverable]: undefined,
		[E.ImplementationEvent]: undefined,
		[E.WorkPackage]: undefined,
		[E.Gap]: undefined,
		[E.Plateau]: undefined,
		// other (2)
		[E.Location]: undefined,
		[E.Grouping]: undefined,
	}

*/