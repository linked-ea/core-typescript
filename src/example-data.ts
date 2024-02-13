// eslint-disable-next-line import/no-unresolved

// --- project imports
import * as CORE from './index.js'

// function isA(obj: CORE.Resource): obj is CORE.ModelInfo { return obj.type === 'A' }
// function isB(obj:  CORE.Resource): obj is ResourceB { return obj.type === 'B' }

export const modelIdentifier: CORE.IRI = "http://x.y.z/"
export const base: string = 'http://this.is.base/path#'
export const defaultLanguage = 'en'

// TODO - get name type
const name = {
	en: 'name'
}
// TODO - get documentation type
const documentation = {
	en: 'documentation'
}

export namespace model {
	const identifier = 'http://mymodel/testmodel#version1'

	export const resource = {
		resourceClass: 'model',
		modelIdentifier,
		identifier,
		name,
		documentation,
		info: {
			base: base,
			version: 1,
			language: defaultLanguage,
			date: Date(),
			currency: 'USD'
		}
	} as const satisfies CORE.Resource
}

export namespace propertyDefinitons {
	export namespace base {
		const type: CORE.PropertyDefTypesUnion = 'string'

		export const identifier = `${base}propDef${type}-base}`

		export const resource = {
			name: {
				'en': `propDef ${type}`
			},
			info: {
				resourceClass: 'propertyDef',
				type,
			}
		}
	}

	export namespace string {
		const type: CORE.PropertyDefTypesUnion = 'string'

		export const identifier = `${base}propDef${type}}`

		export const stringResource = {
			resourceClass: 'propertyDef',
			modelIdentifier,
			identifier,
			name,
			documentation,
			info: {
				type,
				defaultValue: 'default string value'
			}
		} as const satisfies CORE.Resource
	}

	export namespace number {
		const type: CORE.PropertyDefTypesUnion = 'number'

		export const identifier = `${base}propDef${type}}`

		export const numberResource = {
			resourceClass: 'propertyDef',
			modelIdentifier,
			identifier,
			name,
			documentation,
			info: {
				type,
				// defaultValue: 2.5,
				range: {
					minimum: 1.5,
					maximum: 3.5
				}
			}
		} as const satisfies CORE.Resource
	}

	/*
	export namespace integer {
		const type: CORE.PropertyDefTypes = 'INTEGER'

		export const resource = {
			resourceClass: 'propertyDef',
			modelIdentifier,
			identifier,
			name,
			documentation,
			info: {
				type,
				// defaultValue: 2,
				range: {
					minimum: 1,
					maximum: 3
				}
			},
		} as const satisfies CORE.Resource
	}
*/
	export namespace currency {
		const type: CORE.PropertyDefTypesUnion = 'currency'

		export const identifier = `${base}propDef${type}}`

		export const resource = {
			resourceClass: 'propertyDef',
			modelIdentifier,
			identifier,
			name,
			documentation,
			info: {
				type,
				// defaultValue: 2.5,
				range: {
					minimum: 1.5,
					maximum: 3.5
				}
			}
		} as const satisfies CORE.Resource
	}

	export namespace date {
		const type: CORE.PropertyDefTypesUnion = 'date'

		export const identifier = `${base}propDef${type}}`

		export const resource = {
			resourceClass: 'propertyDef',
			modelIdentifier,
			identifier,
			name,
			documentation,
			info: {
				type,
				// defaultValue: '2022-07-01',
				range: {
					minimum: '2022-01-01',
					maximum: '2022-12-31'
				}
			}
		} as const satisfies CORE.Resource
	}
}

export namespace profile {
	const resourceClass: CORE.ResourceClasses = 'profile'

	export const resource = {
		resourceClass,
		modelIdentifier,
		identifier: `${base}${resourceClass}}`,
		name,
		documentation,
		info: {
		}
	} as const satisfies CORE.Resource
}

export namespace image {
	const resourceClass: CORE.ResourceClasses = 'image'

	export const resource = {
		resourceClass,
		modelIdentifier,
		identifier: `${base}${resourceClass}}`,
		name,
		documentation,
		info: {
		}
	} as const satisfies CORE.Resource
}

/*
export const specialization: CORE.SpecializationResource = {
	modelIdentifier,
	identifier: 'http://x.y.z#profile',
	name: {
		'en': 'profile'
	},
	info: {
		resourceClass: 'specialization',
		// TODO - specialization info
	}
}
*/

export namespace element {
	const resourceClass: CORE.ResourceClasses = 'element'

	export const resource = {
		resourceClass,
		modelIdentifier,
		identifier: `${base}${resourceClass}}`,
		name,
		documentation,
		info: {
			type: 'http://www.opengroup.org/xsd/archimate/3.0/ApplicationComponent'
		}
	} as const satisfies CORE.Resource
}

export namespace relationship {
	export const identifier = `${base}relationship`

	export const resourcePut = {
		modelIdentifier,
		identifier,
		name: {
			'en': 'relationship'
		},
		documentation: {
			'en': 'documentation'
		},
		info: {
			resourceClass: 'relationship',
			type: 'http://www.opengroup.org/xsd/archimate/3.0/Association',
			// TODO - location, what if offline?
			// location: 'http://x.y.z#imagelocation',
			source: 'element.identifier of same base',
			target: 'element.identifier of same base',
		}
	}
}

export namespace view {
	export const identifier = `${base}view`

	export const resource = {
		resourceClass: 'view',
		modelIdentifier,
		identifier,
		name: {
			'en': 'view'
		},
		documentation: {
			'en': 'documentation'
		},
		info: {
		}
	} as const satisfies CORE.Resource
}
