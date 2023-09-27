# archimate-json-schema
JSON schema and Typescript types which are functional equivalents of Archimate Exchange Format.

## Problem & Motivation
To some extent, every single architecture initiative that is based on an Enterprise Architecture model starts from scratch, and typically locked to an software tool or service. Through the selected tool, an architecture metamodel is defined, architecture domains are identified, template diagrams are developed, and architecture data to be used is identified, activities that become as time consuming as the architecture initiative itself, before the actual work starts.

The metaphor I like to use is that "the construction of road that takes us to the to-be built facility is bigger than the facility itself". In other words, business organizations developed a "traumatic disorder" in respect to architecture initiatives, perceiving the benefits being small than the effort and costs. One of its effects is that enterprise architecture teams are assembled and disassembled due to their perceived cost/benefit, and organizations unknowingly (or accepting it) loose tacit and coded knowledge of their business, information and technnology architectures.

* Federation of architecture models, so initiatives leverage existing one

## Principles
* Don't reinvent the wheel (*leverage existing standards*)
* Federate data (avoid imports)
* Changes should be easy (architectures are not static, should evolve over time)
* Accessible ("it takes a village" to develop architectures)


## Use Cases
* Federation of vendor-provided specializations (e.g. AWS services)
* Federation of application portfolios (e.g. managed by ServiceNow CMDB)
* Decorators for views

## How
* Allow federation of Enterprise Architecture models.
* Make easier for models to be provided via API.

## References
* [Archimate 3.2](https://)
* OpenAPI 3.1
* JSON Schema 2012
*

## Issues with ArchiMate® Model Exchange File Format (EFF), Version 3.0
* Specification at http://www.opengroup.org/library/c174, compared to Archimate 3.2 specification
* Attributes Data Types
	* URL data types support
		* Correction: added support for 'url'

## Language Customization
The features below are indicated as "customizations" by Archimate 3.2 specification, instead of language extensions by earlier versions. They are considered crucial by this work to support federation of architectue models.
* Profiles
	* Added support to profiles
* Specialization
	* Addes support to specializations

## Customizations, Extensions to Archimate(R)
* Archimate Exchange Format
	* Inclusion of referred models
		* Tools are responsible to resolve location of referred models
	* Properties
		* Multiple value indicator
		* Enumeration support
	* Organizations
		* Items identifiers are required, to allow them to be consumed via REST/JSON APIs in the future

## Roadmap
	* Organizations
		* Item properties support, to support use cases as filters to views, decorators


# Trademarks
* [ArchiMate® is a registered trademark of The Open Group.](https://www.opengroup.org/archimate-forum/archimate-overview)