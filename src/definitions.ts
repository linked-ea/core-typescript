// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// FIXME: naming convention for types and interfaces

// --- common ---
export type TLang = string

export type Identifier = string // attribute of identifier IRI, to be used in conjunction with Base, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base

export type TLangString = Record<TLang, string>

export interface ICoordinates {
	x: number // x coordinate starting at top left
	y: number // y coordinate starting at top left
}

export interface IDimensions {
	w: number // width
	h: number // height
}

export interface IRgbColor {
	r: number // 0-255
	g: number // 0-255
	b: number // 0-255
}

export interface IRgbaColor extends IRgbColor {
	a: number // 0-1
}

export interface IFont {
	fontName?: string // font name, if absent, use default
	fontSize?: number // font size, if absent, use default
	fontColor?: IRgbColor // font color, if absent, use default
}

export interface IStyle {
	font?: IFont
	lineColor?: IRgbColor // if absent, use default
	fillColor?: IRgbColor // if absent, use default
}

export interface IDocumentation {
	documentation?: TLangString
}

export interface IName {
	name: TLangString // name of the concept
}

export interface ILabel {
	label: TLangString // name of the concept
}

export interface IAlias {
	alias?: string // alias of the concept
}

// --- aspects ---
export type TAspects =
	| 'Passive Structure'
	| 'Behavior'
	| 'Active Structure'
	| 'Motivation'

export type TAspectCorners = 'round' | 'square' | 'diagonal'

export interface IAspectInfo {
	darken: number
	corners: TAspectCorners
}

export const aspects: Record<TAspects, IAspectInfo> = {
	'Passive Structure': {
		darken: 0,
		corners: 'square',
	},
	Behavior: {
		darken: 0.1,
		corners: 'round',
	},
	'Active Structure': {
		darken: 0.2,
		corners: 'square',
	},
	Motivation: {
		darken: 0,
		corners: 'diagonal',
	},
}

// --- layers ---
export interface ILayersInfo {
	name: string
	color: IRgbColor // hex color
	initial: string
}

export type TLayers =
	| 'Strategy'
	| 'Business'
	| 'Application'
	| 'Technology'
	| 'Motivation'
	| 'Implementation & Migration'
	| 'Physical'

export const layers: Record<TLayers, ILayersInfo> = {
	Strategy: {
		name: 'Strategy',
		color: {
			r: 250,
			g: 230,
			b: 196,
		}, // #FAE6C4
		initial: 'S',
	},
	Business: {
		name: 'Business',
		color: {
			r: 255,
			g: 255,
			b: 208,
		}, // #FFFFD0
		initial: 'B',
	},
	Application: {
		name: 'Application',
		color: {
			r: 191,
			g: 251,
			b: 254,
		}, // #BFFBFE
		initial: 'A',
	},
	Technology: {
		name: 'Technology',
		color: {
			r: 148,
			g: 255,
			b: 161,
		}, // 148 255 161 #94FFA1
		initial: 'T',
	},
	Motivation: {
		name: 'Motivation',
		color: {
			r: 238,
			g: 239,
			b: 254,
		}, //238 239 254 #EEEFFE
		initial: 'M',
	},
	'Implementation & Migration': {
		name: 'Implementation & Migration',
		color: {
			r: 255,
			g: 223,
			b: 224,
		}, // #FFDFE0
		initial: 'I',
	},
	Physical: {
		name: 'Physical',
		color: {
			r: 194,
			g: 247,
			b: 199,
		}, // 'green'
		initial: 'P',
	},
}

// --- properties ---
export type TPropertyDataTypes =
	| 'string'
	| 'number'
	| 'date'
	| 'boolean'
	| 'currency'
	| 'time'

export interface IPropertyDefinitionInfo {
	name: TLangString
	type: TPropertyDataTypes
}

export type TPropertyDefinitionRecord = Record<
	Identifier,
	IPropertyDefinitionInfo
>

export type TPropertyValue = string | number | boolean | Date | TLangString // FIXME: how to define property value?

export interface IPropertyInfo {
	propertyDefinitionRef: Identifier
	value: TPropertyValue
}

// FIXME: how to define this?
// export type TPropertyRecord<T extends string> = Record<T, TPropertyTypes>
export type TPropertyRecord = Record<Identifier, IPropertyInfo>

export interface IProperties {
	properties?: TPropertyRecord
}

// --- profiles ---

// --- stereotypes ---

// --- elements ---
export type TElementTypes =
	// Motivation Elements
	| 'Assessment'
	| 'Constraint'
	| 'Driver'
	| 'Goal'
	| 'Meaning'
	| 'Outcome'
	| 'Principle'
	| 'Requirement'
	| 'Stakeholder'
	| 'Value'
	// Business Layer
	| 'BusinessActor'
	| 'BusinessCollaboration'
	| 'BusinessEvent'
	| 'BusinessFunction'
	| 'BusinessInteraction'
	| 'BusinessInterface'
	| 'BusinessObject'
	| 'BusinessProcess'
	| 'BusinessRole'
	| 'BusinessService'
	| 'Contract'
	| 'Representation'
	| 'Product'
	// Application Layer
	| 'ApplicationCollaboration'
	| 'ApplicationComponent'
	| 'ApplicationEvent'
	| 'ApplicationFunction'
	| 'ApplicationInteraction'
	| 'ApplicationInterface'
	| 'ApplicationProcess'
	| 'ApplicationService'
	| 'DataObject'
	// Strategy Layer
	| 'Capability'
	| 'CourseOfAction'
	| 'Resource'
	| 'ValueStream'
	// Technology Layer
	| 'Artifact'
	| 'Device'
	| 'CommunicationNetwork'
	| 'Node'
	| 'Path'
	| 'SystemSoftware'
	| 'TechnologyCollaboration'
	| 'TechnologyEvent'
	| 'TechnologyFunction'
	| 'TechnologyInteraction'
	| 'TechnologyInterface'
	| 'TechnologyProcess'
	| 'TechnologyService'
	// Physical Elements
	| 'DistributionNetwork'
	| 'Equipment'
	| 'Facility'
	| 'Material'
	// Implementation & Migration Layer
	| 'Deliverable'
	| 'Gap'
	| 'ImplementationEvent'
	| 'Plateau'
	| 'WorkPackage'
	// Other Elements
	| 'Grouping'
	| 'Location'
	| 'AndJunction'
	| 'OrJunction'

export interface IElementTypeInfo extends IAlias {
	name: string
	// layer: TLayers
	layer: TLayers
	aspect: TAspects
	definition: string
}

export const elements: Record<TElementTypes, IElementTypeInfo> = {
	ApplicationCollaboration: {
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
} as const

export interface IElementInfo extends IName, IDocumentation, IProperties {
	type: TElementTypes
}

export type ElementsRecord = Record<Identifier, IElementInfo>

// --- relationships ---
// export type TBaseRelationshipTypes =
export type TRelationshipTypes =
	| 'Access'
	| 'Aggregation'
	| 'Assignment'
	| 'Association'
	| 'Composition'
	| 'Flow'
	| 'Influence'
	| 'Realization'
	| 'Specialization'
	| 'Triggering'
	| 'UsedBy'

// export type TRelationshipTypes = `${TBaseRelationshipTypes}`

export type TRelationshipCategories =
	| 'Structural'
	| 'Dependency'
	| 'Dynamic'
	| 'Other'

type TSourceMarker = 'none' | 'diamond full' | 'diamond empty'
type TEndMarker = 'none' | 'full' | 'empty' | 'open'
type TLine = 'straight' | 'dots' | 'dashes'

export interface RelationshipTypeInfo extends IAlias {
	category: TRelationshipCategories
	sourceMarker: TSourceMarker
	line: TLine
	endMarker: TEndMarker
}

// FIXME: move alias to import, as they are only used there
export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
// export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
	Access: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'dots',
		endMarker: 'none',
	},
	Aggregation: {
		category: 'Structural',
		sourceMarker: 'diamond empty',
		line: 'straight',
		endMarker: 'none',
	},
	Assignment: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	Association: {
		category: 'Structural',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
	Composition: {
		category: 'Structural',
		sourceMarker: 'diamond full',
		line: 'straight',
		endMarker: 'none',
	},
	Flow: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'full',
	},
	Influence: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'dashes',
		endMarker: 'none',
	},
	Realization: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'dots',
		endMarker: 'empty',
		alias: 'RealisationRelationship',
	},
	Specialization: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'empty',
		alias: 'SpecialisationRelationship',
	},
	Triggering: {
		category: 'Dynamic',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'full',
	},
	UsedBy: {
		category: 'Dependency',
		sourceMarker: 'none',
		line: 'straight',
		endMarker: 'none',
	},
} as const

export interface IRelationshipInfo extends IName, IDocumentation, IProperties {
	type?: TRelationshipTypes
	source: Identifier
	target: Identifier
}

export type RelationshipRecord = Record<Identifier, IRelationshipInfo>

// --- nodes ---
export type TNodeTypes = 'Element' | 'Container' | 'Label'

export interface INodeInfo extends ICoordinates, IDimensions, IStyle {
	elementRef?: Identifier
	type?: TNodeTypes
	// TODO - use ILabel interface, but make it optional
	label?: TLangString
}

export type NodesRecord = Record<Identifier, INodeInfo>

// --- connections ---
export type TConnectionTypes = 'Line' | 'Relationship'

export interface IConnectionInfo extends IStyle {
	// type: Identifier // TODO - what is it for?
	source: Identifier
	target: Identifier
	relationshipRef?: Identifier
	bendpoints?: ICoordinates[]
	type: TConnectionTypes
}

export type IConnectionRecord = Record<Identifier, IConnectionInfo>

// TODO - add viewRef

// --- diagram ---
export type TViewpoint =
	// Composition
	| 'Organization'
	| 'Application Structure'
	| 'Information Structure'
	| 'Technology'
	| 'Layered'
	| 'Physical'
	// Support
	| 'Product'
	| 'Application Usage'
	| 'Technology Usage'
	// Cooperation
	| 'Business Process Cooperation'
	| 'Application Cooperation'
	// Realization
	| 'Service Realization'
	| 'Implementation and Deployment'

export interface IViewInfo extends IName, IDocumentation {
	viewpoint?: TViewpoint
	nodes?: NodesRecord
	connections?: IConnectionRecord
}

export type ViewsRecord = Record<Identifier, IViewInfo>

// --- organizations ---
export interface IItemInfo {
	identifierRef?: Identifier
}

export interface IOrganizationInfo extends ILabel, IDocumentation {
	items?: ItemsRecord
}

export type ItemsRecord = Record<Identifier, IOrganizationInfo | IItemInfo>

// --- model ---
interface IDublinCore11 {
	title?: string
	subject?: string
	format?: string
	language?: TLang // identifies default language of the document, if absent, use 'en'
}

type IMetadata = IDublinCore11

// base of identifier IRI, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base
// to be used in conjunction with Identifier. Base must end with a slash (/) or a hash (#)
export type Base = string

export interface IModel extends IDocumentation, IName, IProperties {
	identifier: Identifier
	base: Base
	version?: string
	metadata?: IMetadata
	propertyDefinitions?: TPropertyDefinitionRecord
	views?: ViewsRecord
	elements: ElementsRecord
	relationships?: RelationshipRecord
	organizations?: ItemsRecord
}
