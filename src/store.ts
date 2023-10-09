/*

/model

/propertyDef
/propertyDef/{id}

/profile
/profile/{id}

/specialization
/specialization/{id}

/viewpoint
/viewpoint/{id}

/element						get, delete
/element/{id}					get, delete
/element/{id}/property			get, delete
/element/{id}/property/{id}		post, put, get, delete

/relationship
/relationship/{id}

/view
/view/{id}

/organization
/organization/{id}


*/
import * as CORE from './definitions.js'

export interface IResourceClass {
	class: CORE.TClass
	identifier: CORE.IRI
	modelIdentifier: CORE.IRI
}

// --- puts

// --- gets

// TODO - add get for multiple resources at the same time
type TGetOperation = CORE.TClass | 'elements'

// --- deletes
export type TDeleteOperation = CORE.TClass

// --- store structure
type IMaster = Pick<IResourceClass, "class" | "modelIdentifier">

type TPropertyDefMap = Map<CORE.IRI, CORE.IPropertyDefInfo>
type TPropertiesMap = Map<CORE.IRI, CORE.IPropertyInfo>
type TProfilesMap = Map<CORE.IRI, CORE.IProfileInfo>
type TSpecializationsMap = Map<CORE.IRI, CORE.ISpecializationInfo>
type TElementsMap = Map<CORE.IRI, CORE.IElementInfo>
type TRelationshipsMap = Map<CORE.IRI, CORE.IRelationshipInfo>
type TViewpointsMap = Map<CORE.IRI, CORE.IViewpointInfo>
type TViewsMap = Map<CORE.IRI, CORE.IViewInfo>
type TOrganizationsMap = Map<CORE.IRI, CORE.IOrganizationInfo>

interface IModelSet {
	info: CORE.IModelInfo,
	propertyDefs: TPropertyDefMap
	properties: TPropertiesMap,
	profiles: TProfilesMap,
	specializations: TSpecializationsMap,
	elements: TElementsMap,
	relationships: TRelationshipsMap,
	viewpoints: TViewpointsMap,
	views: TViewsMap,
	organizations: TOrganizationsMap,

}

export class Store {

	#modelIdentifier: CORE.IRI

	// 9 + 1
	#all = new Map<CORE.IRI, IMaster>()

	#models = new Map<CORE.IRI, IModelSet>()

	#allPropertyDefs = new Set<CORE.IRI>()
	#allProperties = new Set<CORE.IRI>()
	#allProfiles = new Set<CORE.IRI>()
	#allSpecializations = new Set<CORE.IRI>()
	#allElements = new Set<CORE.IRI>()
	#allRelationships = new Set<CORE.IRI>()
	#allViewpoints = new Set<CORE.IRI>()
	#allViews = new Set<CORE.IRI>()
	#allOrganizations = new Set<CORE.IRI>()

	constructor (identifier: CORE.IRI) {
		this.#modelIdentifier = identifier
	}

	// update parts of a resource
	public post () {}

	// create a new resource

	/**
	 * PUT - creates an individual resource
	 * @param put - the resource to create
	 * @returns boolean - true if resource was created, false if it already exists
	 */
	public put (put: CORE.TResource): boolean {

		const store = this

		function model (put: CORE.TResource): boolean {

			const model: IModelSet = {
				info: put.info as CORE.IModelInfo,
				propertyDefs: new Map(),
				properties: new Map(),
				profiles: new Map(),
				specializations: new Map(),
				elements: new Map(),
				relationships: new Map(),
				views: new Map(),
				organizations: new Map(),
				viewpoints: new Map(),
			}

			return true
		}

		function propertyDef (put: CORE.TResource): boolean {

			// TODO - check if type is valid

			// model table for specific class
			const table = store.#models.get(put.modelIdentifier)?.propertyDefs

			if (table) table.set(put.identifier, put as CORE.IPropertyDefInfo)

			return true
		}

		function profile (put: CORE.TResource): boolean {

			return true
		}

		function property (put: CORE.TResource): boolean {



			return true
		}

		function specialization (put: CORE.TResource): boolean {

			return true
		}

		function element (put: CORE.TResource): boolean {
			// TODO - check if type is valid

			// model table for specific class
			const table = store.#models.get(put.modelIdentifier)?.elements

			if (table) table.set(put.identifier, put.info as CORE.IElementInfo)

			return true
		}

		function relationship (put: CORE.TResource): boolean {
			// TODO - check if type is valid

			// TODO - check if source and target exist

			// TODO - check if source and target are valid

			// TODO - check if properties exist

			// TODO - check if properties are valid

			// model table for specific class
			const table = store.#models.get(put.modelIdentifier)?.relationships

			if (table) table.set(put.identifier, put.info as CORE.IRelationshipInfo)

			return true
		}

		function viewpoint (put: CORE.TResource): boolean {
			// model table for specific class
			const table = store.#models.get(put.modelIdentifier)?.viewpoints

			if (table) table.set(put.identifier, put.info as CORE.IViewpointInfo)

			return true
		}

		function view (put: CORE.TResource): boolean {
			// TODO - check if viewpoint exists

			// model table for specific class
			const table = store.#models.get(put.modelIdentifier)?.views

			if (table) table.set(put.identifier, put.info as CORE.IViewInfo)

			return true
		}

		function organization (put: CORE.TResource): boolean {
			// TODO - check if parent organization exists

			// model table for specific class
			const table = store.#models.get(put.modelIdentifier)?.organizations

			if (table) table.set(put.identifier, put.info as CORE.IOrganizationInfo)

			return true
		}

		const resourceFunctions: Record<CORE.TClass, {function: (put: CORE.TResource) => void, set: Set<CORE.IRI>}> = {
			'model': { function: model, set: this.#allModels},
			'propertyDef': { function: propertyDef, set: this.#allPropertyDefs},
			'property': { function: property, set: this.#allProperties },
			'profile': { function: profile, set: this.#allProfiles },
			'specialization': { function: specialization, set: this.#allSpecializations },
			'element': { function: element, set: this.#allElements },
			'relationship': { function: relationship, set: this.#allRelationships },
			'viewpoint': { function: viewpoint, set: this.#allViewpoints },
			'view': { function: view, set: this.#allViews },
			'organization': { function: organization, set: this.#allOrganizations }
		}

		// TODO - check if identifier is IRI

		// TODO - check if identifier is valid against model base IRI

		const resource = this.#all.get(put.identifier)

		// resource identifier already exists
		if (resource) return false

		// model & class specific
		resourceFunctions[put.class].function(put)

		// all
		this.#all.set(put.identifier, {modelIdentifier: put.modelIdentifier, class: put.class})

		// all class specific

		resourceFunctions[put.class].set.add(put.identifier)

		return true
	}

	/**
	 * GET - gets an individual resource
	 * @param identifier - the identifier of the resource to get info on, or resources assigned to it
	 * @returns resource if found, undefined if not found
	 */
	public get (identifier: CORE.IRI, propertyDefIdentifier: CORE.IRI): CORE.TResource | CORE.TResource[] | undefined {

		const store = this

		function model (master: IMaster): CORE.IModelInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.info as CORE.IModelInfo
		}

		function propertyDef (master: IMaster): CORE.IPropertyDefInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.propertyDefs.get(identifier)
		}

		function profile (master: IMaster): CORE.IProfileInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.profiles.get(identifier)
		}

		function property (master: IMaster): CORE.IPropertyInfo | undefined {
			// TODO - decide if properties do have IRI identifiers
			if (!propertyDefIdentifier) return undefined

			return
		}

		function specialization (master: IMaster): CORE.ISpecializationInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.specializations.get(identifier)
		}

		function element (master: IMaster): CORE.IElementInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.elements.get(identifier)
		}

		function elements (master: IMaster): CORE.IElementInfo[] | undefined {
			const collection: CORE.IElementInfo[] = []

			// TODO - validate if identifier is a model

			store.#models.get(master.modelIdentifier)?.elements.forEach((value, /* key, map */): void => { collection.push(value) })

			return collection
		}

		function relationship (master: IMaster): CORE.IRelationshipInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.relationships.get(identifier)
		}

		function viewpoint (master: IMaster): CORE.IViewpointInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.viewpoints.get(identifier)
		}

		function view (master: IMaster): CORE.IViewInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.views.get(identifier)
		}

		function organization (master: IMaster): CORE.IOrganizationInfo | undefined {
			return store.#models.get(master.modelIdentifier)?.organizations.get(identifier)
		}

		// TODO - how to identify elements, relationships, views, organizations, and viewpoints operations?
		const infoFunctions: Record<TGetOperation, (master: IMaster) => CORE.TInfo | CORE.TInfo[] | undefined > = {
			'model': model,
			'propertyDef': propertyDef,
			'property': property,
			'profile': profile,
			'specialization': specialization,
			'element': element,
			'elements': elements,
			'relationship': relationship,
			'viewpoint': viewpoint,
			'view': view,
			'organization': organization,
		}

		const master = this.#all.get(identifier)

		if (!master) return undefined

		const info = infoFunctions[master.class](master)

		// TODO - differentiate between single and multiple resources
		return {
			identifier: identifier,
			class: master.class,
			modelIdentifier: master.modelIdentifier,
			info
		}
	}

	// delete a resource
	public delete (identifier: CORE.IRI): boolean {

		const store = this

		function deleteModel (): void {

			store.#all.clear()

			store.#allPropertyDefs.clear()
			store.#allProperties.clear()
			store.#allProfiles.clear()
			store.#allSpecializations.clear()
			store.#allElements.clear()
			store.#allRelationships.clear()
			store.#allViews.clear()
			store.#allOrganizations.clear()
			store.#allViewpoints.clear()

		}

		function deletePropertyDef (): void {

			// TODO - delete all properties using this propertyDef

			store.#allPropertyDefs.delete(identifier)

		}

		function deleteProfile (): void {

			store.#allProfiles.delete(identifier)

		}

		function deleteProperty (): void {

			store.#allProperties.delete(identifier)
		}

		function deleteSpecialization (): void {

			store.#allSpecializations.delete(identifier)

		}

		function deleteElement (): void {

			// TODO - delete all nodes using this element

			store.#allElements.delete(identifier)

		}

		function deleteRelationship (): void {

			store.#allRelationships.delete(identifier)

		}

		function deleteViewpoint (): void {

			// TODO - delete all views using this viewpoint

			store.#allViewpoints.delete(identifier)

		}

		function deleteView (): void {

			// TODO - delete all organizations referencing this view

			// TODO - delete all nodels referencing this view

			// TODO - delete all elements referencing this view

			// TODO - delete all relationships referencing this view

			// TODO - delete all 'forks" referencing this view

			store.#allViews.delete(identifier)

		}

		function deleteOrganization (): void {

			// TODO - delete all organizations referencing this organization

			store.#allOrganizations.delete(identifier)

		}

		const resourceFunctions: Record<CORE.TClass, () => void> = {
			'model': deleteModel,
			'propertyDef': deletePropertyDef,
			'property': deleteProperty,
			'profile': deleteProfile,
			'specialization': deleteSpecialization,
			'element': deleteElement,
			'relationship': deleteRelationship,
			'viewpoint': deleteViewpoint,
			'view': deleteView,
			'organization': deleteOrganization,
		}

		const resource = this.#all.get(identifier)

		if (!resource) return false

		const deleteResource = resourceFunctions[resource.class]

		deleteResource(this)

		// TODO - convert switch to record to accont for all resource types

		this.#all.delete(identifier)

		return true

	}

	patch (identifier: CORE.IRI): boolean {

		const commandFunctions: Record<CORE.TClass, () => void> = {
			'model': deleteModel,
			'propertyDef': deletePropertyDef,
			'property': deleteProperty,
			'profile': deleteProfile,
			'specialization': deleteSpecialization,
			'element': deleteElement,
			'relationship': deleteRelationship,
			'viewpoint': deleteViewpoint,
			'view': deleteView,
			'organization': deleteOrganization,
		}

		const resource = this.#all.get(identifier)

		if (!resource) return false

		const store = this

		return true
	}
}