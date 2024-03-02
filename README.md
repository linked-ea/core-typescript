# typescript-core
TypeScript type representation of FED-EA core data model.

## Features
* FED-EA Resource TypeScript definitions
* Dictionaries covering
	* ArchiMate®
		* Aspects
		* Elements
		* Layers
		* Relationships
	* ISO
		* Language Codes (ISO 639-1 Alpha-2)
* Broader than ArchiMate® XML Schema, with type definitions for:
	* Profiles
	* Specializations
	* Viewpoints

## Instalation

```
npm install @fed-ea/core-typescript
```

```
bun add @fed-ea/core-typescript
```
## Usage
```
import * as CORE from '@fed-ea/core-typescript'
```

## Observations
* Supports ArchiMate® version 3.2
* Aspire to align nomenclature to ArchiMate® XML Schemas as much as possible

## Roadmap
* [ ] Reference to other FED-EA models
* [ ] Time property definition, aligned with ArchiMate®
* [ ] Currency Code Dictionary
* [ ] Adopt XML Schema REF-ID

## Trademarks
* [ArchiMate® is a registered trademark of The Open Group.](https://www.opengroup.org/archimate-forum/archimate-overview)

## Principles
* Use nomenclature of ArchiMate® Model Exchange File Format as much as possible
* For brevity, default values defined by ArchiMate® specification, such as layer colors, should not be expressed