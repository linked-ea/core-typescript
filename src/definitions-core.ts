// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview
//

// FIXME: naming convention for types and interfaces

// --- project imports ---
import { ISO_639_1_Alpha_2 } from 'iso-639-1-alpha-2.js'

// --- re-exports ---
export { ISO_639_1_Alpha_2 }

// --- common ---
export type TLangCode = keyof typeof ISO_639_1_Alpha_2

// TODO - identifier should be read-only
export type IRI = string // attribute of identifier IRI, to be used in conjunction with Base, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base

export interface IIdentifier {
	identifier: Readonly<IRI>
}

export type TLangString = Record<TLangCode, string>

export interface IModelIdentifier {
	modelIdentifier: IRI
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

export interface IRgbColor {
	r: number // 0-255
	g: number // 0-255
	b: number // 0-255
}

export interface IRgbaColor extends IRgbColor {
	a: number // 0-1
}

interface IDeprecated {
	deprecated?: boolean
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
export type TPropertyTypes = Record<string, string>

// TODO - default currency for model?
export const propertyTypes: TPropertyTypes = {
	'string': '',
	'integer': 'The integer type is used for integral numbers. Floating point numbers are rejected',
	'number': 'Any numeric type, either integers or floating point numbers',
	'date': '',
	'boolean': '',
	'currency': '',
	'duration': 'defined by the ISO 8601 ABNF for "duration" (https://www.w3.org/TR/xmlschema-2/#duration)'
}

interface PropertyTypeBase extends IName, IDocumentation{
	type: keyof typeof propertyTypes
}

interface PropertyTypeString extends PropertyTypeBase {
	type: 'string'
	pattern?: RegExp
	format?: string
}

interface PropertyTypeInteger extends PropertyTypeBase {
	type: 'integer'
	range?: {minimum: number, maximum: number}
}

interface PropertyTypeNumber extends PropertyTypeBase {
	type: 'number'
	range?: {minimum: number, maximum: number}
}

interface PropertyTypeDate extends PropertyTypeBase {
	type: 'date'
	range?: {minimum: Date, maximum: Date}
}

interface PropertyTypeBoolean extends PropertyTypeBase {
	type: 'boolean'
}

interface PropertyTypeCurrency extends PropertyTypeBase {
	type: 'currency'
}

interface PropertyTypeDuration extends PropertyTypeBase {
	type: 'duration'
}

export type IPropertyDefInfo = PropertyTypeString | PropertyTypeInteger | PropertyTypeNumber | PropertyTypeDate | PropertyTypeBoolean | PropertyTypeCurrency | PropertyTypeDuration

export type TPropertyDefinitionRecord = Record<
	IRI,
	IPropertyDefInfo
>

export type TPropertyValue = string | number | boolean | Date | TLangString // FIXME: how to define property value?

export interface IPropertyInfo extends IDeprecated {
	propertyDefinitionRef: IRI
	value: TPropertyValue
}

// FIXME: how to define this?
// export type TPropertyRecord<T extends string> = Record<T, TPropertyTypes>
export type TPropertyRecord = Record<IRI, any>

export interface IProperties {
	properties?: TPropertyRecord
}

// --- profiles ---
export interface IProfileInfo extends IName, IDocumentation {}

// --- stereotypes ---
export interface IStereotypes extends IName, IDocumentation {}

// --- specializations ---
export interface ISpecializationInfo extends IName, IDocumentation {}

// --- elements ---

type TElementTypesBase="http://www.opengroup.org/xsd/archimate/3.0/"

export type TElementTypesUnion =
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

export type TElementTypes = `${TElementTypesBase}${TElementTypesUnion}`

export interface IElementTypeInfo extends IAlias, IDeprecated {
	name: string
	// layer: TLayers
	layer: TLayers
	aspect: TAspects
	definition: string
}

export const elements: Record<TElementTypesUnion, IElementTypeInfo> = {
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

export interface IElementInfo extends IName, IDocumentation, IProperties, IDeprecated {
	type: TElementTypesUnion
}

export type ElementsRecord = Record<IRI, IElementInfo>

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
	source: IRI
	target: IRI
}

export type RelationshipRecord = Record<IRI, IRelationshipInfo>

// --- organizations ---
export interface IItemInfo extends IIdentifier {
	identifierRef?: IRI
}

export interface IOrganizationInfo extends IIdentifier, ILabel, IDocumentation {
	items?: ItemsRecord
}

export type ItemsRecord = Record<IRI, IOrganizationInfo | IItemInfo>

// --- model ---
export interface IViewpointInfo extends IIdentifier, IName, IDocumentation, IProperties {
	type: IRI
}

// --- view ---
export interface ICoordinates {
	x: number // x coordinate starting at top left
	y: number // y coordinate starting at top left
}

export interface IDimensions {
	w: number // width
	h: number // height
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

// --- nodes ---
export type TNodeTypes = 'Element' | 'Container' | 'Label'

export interface INodeInfo extends ICoordinates, IDimensions, IStyle {
	elementRef?: IRI
	type?: TNodeTypes
	// TODO - use ILabel interface, but make it optional
	label?: TLangString
}

// --- connections ---
export type TConnectionTypes = 'Line' | 'Relationship'

export interface IConnectionInfo extends IStyle {
	// type: Identifier // TODO - what is it for?
	source: IRI
	target: IRI
	relationshipRef?: IRI
	bendpoints?: ICoordinates[]
	type: TConnectionTypes
}

// TODO - add viewRef

export interface IDiagram {
	nodes?: Record<IRI, INodeInfo>
	connections?: Record<IRI, IConnectionInfo>
}

export interface IViewInfo extends IName, IDocumentation {
	viewpoint?: IRI
	diagram: IDiagram
}

// --- image ---
export interface IImageInfo extends IName, IDocumentation {
	location: IRI
}

interface IReferencedModel extends Omit<IModelInfo, "referencedModels"> {}

export interface IModelInfo extends IIdentifier, IDocumentation, IName {
	base: Readonly<Base>
	version: number // Version counter, positive integer, maps to Dublin Core 1.1
	language: TLangCode // Default language, must be included in all language entries, maps to Dublin Core 1.1
	additionalLanguages?: TLangCode[] // Additional Languages supported by model, maps to Dublin Core 1.1
	coverage?: string // Dublin Core 1.1 - The spatial or temporal topic of the resource, the spatial applicability of the resource, or the jurisdiction under which the resource is relevant
	creator: string // Dublin Core 1.1 - An entity primarily responsible for making the resource
	contributor?: string[] // Dublin Core 1.1 - An entity responsible for making contributions to the resource
	date: Date // Dublin Core 1.1
	rights?: string // Dublin Core 1.1 - Information about rights held in and over the resource
	referencedModels?: IReferencedModel[]
	previousVersion?: IRI
}

// base of identifier IRI, similar to specification https://www.w3.org/TR/rdf-syntax-grammar/#section-Syntax-ID-xml-base
// to be used in conjunction with Identifier. Base must end with a slash (/) or a hash (#)
export type Base = string

// --- core info
/*
type TInfo =
IModelInfo |
IPropertyDefInfo |
IProfileInfo |
ISpecializationInfo |
IElementInfo |
IRelationshipInfo |
IViewpointInfo |
IViewInfo |
IOrganizationInfo |
IImageInfo
*/
// --- core resources

// ISSUE: should classes be ArchiMate(r) IRI's or just strings?

export type TResourceClass =
'model' |
'propertyDef' |
'profile' |
'specialization' |
'element' |
'relationship' |
'viewpoint' |
'view' |
'organization' |
'image'

// base resource interface
export interface IResource<TResourceClass> extends IModelIdentifier, IIdentifier {
	resourceClass: TResourceClass
	// info: TInfo
}

// specific resource interfaces

// export type IModel = IResource<'model'> & IModelInfo
export interface IModel extends IResource<'model'> /* , IModelInfo */ {
	// resourceClass: 'model'
	info: IModelInfo
}

// export type IPropertyDef = IResource<'propertyDef'> & IPropertyDefInfo
export interface IPropertyDef extends IResource<'propertyDef'> /* , IPropertyDefInfo */ {
	// resourceClass: 'propertyDef'
	info: IPropertyDefInfo
}

// export type IProfile = IResource<'profile'> & IProfileInfo
export interface IProfile extends IResource<'profile'> /* , IProfileInfo */ {
	// resourceClass: 'profile'
	info: IProfileInfo
}

// export type ISpecialization = IResource<'specialization'> & ISpecializationInfo
export interface ISpecialization extends IResource<'specialization'> /* , ISpecializationInfo */ {
	// resourceClass: 'specialization'
	info: ISpecializationInfo
}

// export type IElement = IResource<'element'> & IElementInfo
export interface IElement extends IResource<'element'> /* , IElementInfo */ {
	// resourceClass: 'element'
	info: IElementInfo
}

// export type IRelationship = IResource<'relationship'> & IRelationshipInfo
export interface IRelationship extends IResource<'relationship'> /* , IRelationshipInfo */ {
	// resourceClass: 'relationship'
	info: IRelationshipInfo
}

// export type IViewpoint = IResource<'viewpoint'> & IViewpointInfo
export interface IViewpoint extends IResource<'viewpoint'> /* , IViewpointInfo */ {
	resourceClass: 'viewpoint'
	info: IViewpointInfo
}

// export type IView = IResource<'view'> & IViewInfo
export interface IView extends IResource<'view'> /*, IViewInfo */ {
	// resourceClass: 'view'
	info: IViewInfo
}

// export type IOrganization = IResource<'organization'> & IOrganizationInfo
export interface IOrganization extends IResource<'organization'> /*, IOrganizationInfo */ {
	// resourceClass: 'organization'
	info: IOrganizationInfo
}

// export type IImage = IResource<'image'> & IImageInfo
export interface IImage extends IResource<'image'> /*, IImageInfo */ {
	// resourceClass: 'image'
	info: IImageInfo
}
