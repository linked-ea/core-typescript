// 60 element types

/*
// Core - Business Layer (13)
export const BusinessActor 					= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessActor' as const
export const BusinessCollaboration 			= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessCollaboration' as const
export const BusinessEvent 					= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessEvent' as const
export const BusinessFunction 				= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessFunction' as const
export const BusinessInteraction 			= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessInteraction' as const
export const BusinessInterface 				= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessInterface' as const
export const BusinessObject 				= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessObject' as const
export const BusinessProcess 				= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessProcess' as const
export const BusinessRole 					= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessRole' as const
export const BusinessService 				= 'http://www.opengroup.org/xsd/archimate/3.0/BusinessService' as const
export const Contract 						= 'http://www.opengroup.org/xsd/archimate/3.0/Contract' as const
export const Representation 				= 'http://www.opengroup.org/xsd/archimate/3.0/Representation' as const
export const Product 						= 'http://www.opengroup.org/xsd/archimate/3.0/Product' as const
// Core - Application Layer (9)
export const ApplicationComponent 			= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationComponent' as const
export const ApplicationCollaboration 		= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationCollaboration' as const
export const ApplicationEvent 				= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationEvent' as const
export const ApplicationFunction 			= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationFunction' as const
export const ApplicationInteraction 		= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationInteraction' as const
export const ApplicationInterface 			= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationInterface' as const
export const ApplicationProcess 			= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationProcess' as const
export const ApplicationService 			= 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationService' as const
export const DataObject 					= 'http://www.opengroup.org/xsd/archimate/3.0/DataObject' as const
// Motivation Layer (10)
export const Assessment 					= 'http://www.opengroup.org/xsd/archimate/3.0/Assessment' as const
export const Constraint 					= 'http://www.opengroup.org/xsd/archimate/3.0/Constraint' as const
export const Driver 						= 'http://www.opengroup.org/xsd/archimate/3.0/Driver' as const
export const Goal 							= 'http://www.opengroup.org/xsd/archimate/3.0/Goal' as const
export const Meaning 						= 'http://www.opengroup.org/xsd/archimate/3.0/Meaning' as const
export const Outcome 						= 'http://www.opengroup.org/xsd/archimate/3.0/Outcome' as const
export const Principle 						= 'http://www.opengroup.org/xsd/archimate/3.0/Principle' as const
export const Requirement 					= 'http://www.opengroup.org/xsd/archimate/3.0/Requirement' as const
export const Stakeholder 					= 'http://www.opengroup.org/xsd/archimate/3.0/Stakeholder' as const
export const Value 							= 'http://www.opengroup.org/xsd/archimate/3.0/Value' as const
// Core - Technology Layer (17)
export const Artifact 						= 'http://www.opengroup.org/xsd/archimate/3.0/Artifact' as const
export const CommunicationNetwork 			= 'http://www.opengroup.org/xsd/archimate/3.0/CommunicationNetwork' as const
export const Device 						= 'http://www.opengroup.org/xsd/archimate/3.0/Device' as const
export const DistributionNetwork 			= 'http://www.opengroup.org/xsd/archimate/3.0/DistributionNetwork' as const
export const Equipment 						= 'http://www.opengroup.org/xsd/archimate/3.0/Equipment' as const
export const Facility 						= 'http://www.opengroup.org/xsd/archimate/3.0/Facility' as const
export const Material 						= 'http://www.opengroup.org/xsd/archimate/3.0/Material' as const
export const Node 							= 'http://www.opengroup.org/xsd/archimate/3.0/Node' as const
export const Path 							= 'http://www.opengroup.org/xsd/archimate/3.0/Path' as const
export const SystemSoftware 				= 'http://www.opengroup.org/xsd/archimate/3.0/SystemSoftware' as const
export const TechnologyCollaboration 		= 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyCollaboration' as const
export const TechnologyEvent 				= 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyEvent' as const
export const TechnologyFunction 			= 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyFunction' as const
export const TechnologyInteraction 			= 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyInteraction' as const
export const TechnologyInterface 			= 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyInterface' as const
export const TechnologyProcess 				= 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyProcess' as const
export const TechnologyService 				= 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyService' as const
// Implementation & Migration Layer (5)
export const Deliverable 					= 'http://www.opengroup.org/xsd/archimate/3.0/Deliverable' as const
export const Gap 							= 'http://www.opengroup.org/xsd/archimate/3.0/Gap' as const
export const ImplementationEvent 			= 'http://www.opengroup.org/xsd/archimate/3.0/ImplementationEvent' as const
export const Plateau 						= 'http://www.opengroup.org/xsd/archimate/3.0/Plateau' as const
export const WorkPackage 					= 'http://www.opengroup.org/xsd/archimate/3.0/WorkPackage' as const
// Strategy Layer (4)
export const Resource 						= 'http://www.opengroup.org/xsd/archimate/3.0/Resource' as const
export const ValueStream 					= 'http://www.opengroup.org/xsd/archimate/3.0/ValueStream' as const
export const Capability 					= 'http://www.opengroup.org/xsd/archimate/3.0/Capability' as const
export const CourseOfAction 				= 'http://www.opengroup.org/xsd/archimate/3.0/CourseOfAction' as const
// Composites (2)
export const Grouping 						= 'http://www.opengroup.org/xsd/archimate/3.0/Grouping' as const
export const Location 						= 'http://www.opengroup.org/xsd/archimate/3.0/Location' as const
*/




/**
 * Represents the types of elements available in ArchiMate® specification.
 */
export const ElementType = {
// Core - Business Layer (13)
BusinessActor 					: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessActor',
BusinessCollaboration 			: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessCollaboration',
BusinessEvent 					: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessEvent',
BusinessFunction 				: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessFunction',
BusinessInteraction 			: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessInteraction',
BusinessInterface 				: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessInterface',
BusinessObject 					: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessObject',
BusinessProcess 				: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessProcess',
BusinessRole 					: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessRole',
BusinessService 				: 'http://www.opengroup.org/xsd/archimate/3.0/BusinessService',
Contract 						: 'http://www.opengroup.org/xsd/archimate/3.0/Contract',
Representation 					: 'http://www.opengroup.org/xsd/archimate/3.0/Representation',
Product 						: 'http://www.opengroup.org/xsd/archimate/3.0/Product',
// Core - Application Layer (9)
ApplicationComponent 			: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationComponent',
ApplicationCollaboration 		: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationCollaboration',
ApplicationEvent 				: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationEvent',
ApplicationFunction 			: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationFunction',
ApplicationInteraction 			: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationInteraction',
ApplicationInterface 			: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationInterface',
ApplicationProcess 				: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationProcess',
ApplicationService 				: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationService',
DataObject 						: 'http://www.opengroup.org/xsd/archimate/3.0/DataObject',
// Motivation Layer (10)
Assessment 						: 'http://www.opengroup.org/xsd/archimate/3.0/Assessment',
Constraint 						: 'http://www.opengroup.org/xsd/archimate/3.0/Constraint',
Driver 							: 'http://www.opengroup.org/xsd/archimate/3.0/Driver',
Goal 							: 'http://www.opengroup.org/xsd/archimate/3.0/Goal',
Meaning 						: 'http://www.opengroup.org/xsd/archimate/3.0/Meaning',
Outcome 						: 'http://www.opengroup.org/xsd/archimate/3.0/Outcome',
Principle 						: 'http://www.opengroup.org/xsd/archimate/3.0/Principle',
Requirement 					: 'http://www.opengroup.org/xsd/archimate/3.0/Requirement',
Stakeholder 					: 'http://www.opengroup.org/xsd/archimate/3.0/Stakeholder',
Value 							: 'http://www.opengroup.org/xsd/archimate/3.0/Value',
// Core - Technology Layer (17)
Artifact 						: 'http://www.opengroup.org/xsd/archimate/3.0/Artifact',
CommunicationNetwork 			: 'http://www.opengroup.org/xsd/archimate/3.0/CommunicationNetwork',
Device 							: 'http://www.opengroup.org/xsd/archimate/3.0/Device',
DistributionNetwork 			: 'http://www.opengroup.org/xsd/archimate/3.0/DistributionNetwork',
Equipment 						: 'http://www.opengroup.org/xsd/archimate/3.0/Equipment',
Facility 						: 'http://www.opengroup.org/xsd/archimate/3.0/Facility',
Material 						: 'http://www.opengroup.org/xsd/archimate/3.0/Material',
Node 							: 'http://www.opengroup.org/xsd/archimate/3.0/Node',
Path 							: 'http://www.opengroup.org/xsd/archimate/3.0/Path',
SystemSoftware 					: 'http://www.opengroup.org/xsd/archimate/3.0/SystemSoftware',
TechnologyCollaboration 		: 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyCollaboration',
TechnologyEvent 				: 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyEvent',
TechnologyFunction 				: 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyFunction',
TechnologyInteraction 			: 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyInteraction',
TechnologyInterface 			: 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyInterface',
TechnologyProcess 				: 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyProcess',
TechnologyService 				: 'http://www.opengroup.org/xsd/archimate/3.0/TechnologyService',
// Implementation & Migration Layer (5)
Deliverable 					: 'http://www.opengroup.org/xsd/archimate/3.0/Deliverable',
Gap 							: 'http://www.opengroup.org/xsd/archimate/3.0/Gap',
ImplementationEvent 			: 'http://www.opengroup.org/xsd/archimate/3.0/ImplementationEvent',
Plateau 						: 'http://www.opengroup.org/xsd/archimate/3.0/Plateau',
WorkPackage 					: 'http://www.opengroup.org/xsd/archimate/3.0/WorkPackage',
// Strategy Layer (4)
Resource 						: 'http://www.opengroup.org/xsd/archimate/3.0/Resource',
ValueStream 					: 'http://www.opengroup.org/xsd/archimate/3.0/ValueStream',
Capability 						: 'http://www.opengroup.org/xsd/archimate/3.0/Capability',
CourseOfAction 					: 'http://www.opengroup.org/xsd/archimate/3.0/CourseOfAction',
// Composites (2)
Grouping 						: 'http://www.opengroup.org/xsd/archimate/3.0/Grouping',
Location 						: 'http://www.opengroup.org/xsd/archimate/3.0/Location',
} as const
