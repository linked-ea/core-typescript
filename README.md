[![JSR](https://jsr.io/badges/@linked-ea/core-typescript)](https://jsr.io/@linked-ea/core-typescript)
[![JSR Score](https://jsr.io/badges/@linked-ea/core-typescript/score)](https://jsr.io/@linked-ea/core-typescript)

# core-typescript
TypeScript type representation of linked-EA core data model.

## Features

* [Foundational Types](https://jsr.io/@linked-ea/core-typescript/doc/Foundation/~), used broadly across the specification
* [Enumerations](https://jsr.io/@linked-ea/core-typescript/doc/Enum/~), to prevent hard-coding of constants as linked-ea specification evolves
* [Dictionaries](https://jsr.io/@linked-ea/core-typescript/doc/Dict/~), to enable functionality by configuration. Also allow internationalization of specification
* [Resources](https://jsr.io/@linked-ea/core-typescript/doc/Resource/~), definition of core architecture resources used by the specification



## Installation

```
npx jsr add @linked-ea/core-typescript
```

```
bunx jsr add @linked-ea/core-typescript
```

```
pnpm dlx jsr add @linked-ea/core-typescript
```


## Usage
```
import * as CORE from '../src/index.js'

export const modelIdentifier: CORE.IRI = "http://x.y.z/"
export const base: string = 'http://this.is.base/path#'
export const defaultLanguage = 'en'

export const resourceModel: CORE.Model = {
	resourceClass: 'model',
	modelIdentifier,
	identifier: `${base}model1`,
	name: {[defaultLanguage]: 'model 1'},
	documentation: { [defaultLanguage]: 'documentation goes here'},
	info: {
		base: base,
		version: 1,
		language: 'en',
		date: '2024-01-01',
		currency: 'USD'
	}
} as const

export const costPropertyDefResource: CORE.PropertyDef = {
	resourceClass: 'propertyDef',
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

export const resourceResource: CORE.Element = {
	resourceClass: 'element',
	modelIdentifier,
	identifier: `${base}element1`,
	name: { en: 'element 1' },
	documentation: { en: 'documentation goes here' },
	info: {
		type: CORE.ENUM.ElementTypeEnum.ApplicationComponent
	},
	properties: {
		[`${base}costPropertyDef`]: 1000.01
	}
} as const

export const relationshipResource: CORE.Relationship = {
	resourceClass: 'relationship',
	modelIdentifier,
	identifier: `${base}relationship1`,
	name: { en: 'relationship 1' },
	documentation: { en: 'documentation goes here' },
	info: {
		type: CORE.ENUM.RelationshipTypeEnum.Association,
		source: `${base}element1`,
		target: `${base}element1`,
	}
}

export const viewResource: CORE.View = {
	resourceClass: 'view',
	modelIdentifier,
	identifier: `${base}view1`,
	name: { en: 'view1' },
	documentation: { en: 'documentation goes here' },
	info: {
	}
} as const
```

## Documentation
* [Principles](./md/principles.md)
* [Reduced idiosyncrasies of ArchiMate® Model Exchange File Format](./md/idiosynchrasies.md)
* [Roadmap](./md/roadmap.md)

## Trademarks
* [ArchiMate® is a registered trademark of The Open Group.](https://www.opengroup.org/archimate-forum/archimate-overview)
