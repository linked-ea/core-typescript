// --- project imports ---
// import * as CORE from '../src/index.js'
import * as DICTIONARY from '../src/dictionaries/index.js'
import * as Enum from '../src/enums/index.js'
import * as Resource from '../src/resources/index.js'
import * as Foundation from '../src/foundation/index.js'

// --- data ---
export const modelIdentifier: Foundation.IRI = "http://x.y.z/"
export const base: string = 'http://this.is.base/path#'
export const defaultLanguage = 'en'

export const resourceModel: Resource.Model = {
	resourceClass: Enum.ResourceClass.Model,
	modelIdentifier,
	identifier: `${base}model1`,
	name: {[defaultLanguage]: 'model 1'},
	documentation: { [defaultLanguage]: 'documentation goes here'},
	info: {
		base: base,
		version: 1,
		language: 'en',
		date: '2024-01-01',
		currency: 'USD',
		colorPalette: DICTIONARY.colorPalette.Alternative.fillColorPalette
	}
} as const

export const costPropertyDefResource: Resource.PropertyDef = {
	resourceClass: Enum.ResourceClass.PropertyDef,
	modelIdentifier,
	identifier: `${base}costPropertyDef`,
	name: { en: 'cost' },
	documentation: { en: 'cost of the item' },
	info: {
		type: 'currency',
		defaultValue: 2.5,
		minimum: 1.5,
		maximum: 3.5
	}
} as const

export const resourceResource: Resource.Element = {
	resourceClass: Enum.ResourceClass.Element,
	modelIdentifier,
	identifier: `${base}element1`,
	name: { en: 'element 1' },
	documentation: { en: 'documentation goes here' },
	info: {
		type: Enum.ElementType.ApplicationComponent
	},
	properties: {
		[`${base}costPropertyDef`]: 1000.01
	}
} as const

export const relationshipResource: Resource.Relationship = {
	resourceClass: Enum.ResourceClass.Relationship,
	modelIdentifier,
	identifier: `${base}relationship1`,
	name: { en: 'relationship 1' },
	documentation: { en: 'documentation goes here' },
	info: {
		type: Enum.RelationshipType.Association,
		source: `${base}element1`,
		target: `${base}element1`,
	}
}

export const specializedRelationshipResource: Resource.Relationship = {
	resourceClass: Enum.ResourceClass.Relationship,
	modelIdentifier,
	identifier: `${base}relationship1`,
	name: { en: 'relationship 1' },
	documentation: { en: 'documentation goes here' },
	info: {
		specializationRef: `${base}specialization1`,
		source: `${base}element1`,
		target: `${base}element1`,
	}
}

export const viewResource: Resource.View = {
	resourceClass: Enum.ResourceClass.View,
	modelIdentifier,
	identifier: `${base}view1`,
	name: { en: 'view1' },
	documentation: { en: 'documentation goes here' },
	info: {
	}
} as const
