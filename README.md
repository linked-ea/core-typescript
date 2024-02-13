# typescript-core
TypeScript representation of FED-EA core data model.

## Features
* FED-EA Resource TypeScript definitions
* List of supported ISO 639-1-Alpha-2 language codes
* ArchiMate® Element dictionary
* ArchiMate® Relationship dictionary

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

## Roadmap
* [ ] Time property definition, aligned with ArchiMate®
* [ ] Currency Codes
* [ ] Separate Element and Relationship dictionaries from Resource definition

## Trademarks
* [ArchiMate® is a registered trademark of The Open Group.](https://www.opengroup.org/archimate-forum/archimate-overview)

## Principles
* Use nomenclature of ArchiMate® Model Exchange File Format as much as possible
* For brevity, default values defined by ArchiMate® specification, such as layer colors, should not be expressed