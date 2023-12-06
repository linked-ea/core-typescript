# Routing

Routing pattern:

https://{store domain}/{store}/v1/

# POST

## Creation of new model

This is the only request that does not follow the routing pattern, as the store has yet to be create:

https://{store domain}/v1/new  - create new model

## Creation of new concepts.

Rules of creation:

* Creations are limited to default model
* All methods use JSON body in the request representing concept

/link/{id}            - add linked model to default model. Store is responsible to resolve id and load related model.

/propertyDef/{id}     - add property definition to default model

/profile/{id}         - add given property def to default model

/specialization/{id}  - add given specialization to default model

/viewpoint/{id}       - add given viewpoint to default model

/element/{id}         - add given element to default model

/relationship/{id}    - add given relationship to default model

/view/{id}            - add given view to default model

/organization/{id}    - add given organization to default model

# GET

## Concept Collections

Retrieve collection of concepts and respective information.

### Parameters:

* model={id} - if not provided, will return collection from default model

Filter availble for all collections
* deprecated=true/false

Filters available for Elements, Relationships, Views collections
* type={id} - filters resources of a given type
* propertyDef={id}

Filters available for Elements, Relationships collections
* profile={id}
* specialization={id}

Filters available for Profiles, Specializations, Images, Views, Organizations collections
* reference={id}

| Collection      | name | documentation | language | deprecated | type | profile | property | referencedBy |
|-----------------|:----:|:-------------:|:--------:|:----------:|:----:|:-------:|:--------:|:------------:|
| models          | X    | X             | X        | X          |      |         |          |              |
| propertyDef     | X    | X             | X        | X          |      |         |          |              |
| profiles        | X    | X             | X        | X          |      |         |          |              |
| specializations | X    | X             | X        | X          |      |         |          |              |
| images          | X    | X             | X        | X          |      |         |          |              |
| viewpoints      | X    | X             | X        | X          |      |         |          |              |
| elements        | X    | X             | X        | X          | X    | X       | X        |              |
| relationships   | X    | X             | X        | X          | X    | X       | X        | X            |
| views           | X    | X             | X        | X          | X    |         |          | X            |
| organizations   | X    | X             | X        | X          |      |         |          | X            |

| Collection uses | model | propertyDef | profile | specialization | image | viewpoint | element | relationship | view | organization |
|-----------------|:-----:|:-----------:|:-------:|:--------------:|:-----:|:---------:|:-------:|-------------:|:----:|:------------:|
| models          | X     | X           | X       | X              | X     | X         | X       | X            | X    |              |
| propertyDef     |       |             |         |                |       |           |         |              |      |              |
| profiles        |       | X           |         |                |       |           |         |              |      |              |
| specializations |       |             | X       |                | X     |           |         |              |      |              |
| images          |       |             |         |                |       |           |         |              |      |              |
| viewpoints      |       |             |         |                |       |           |         |              |      |              |
| elements        |       | X           | X       | X              | X     |           |         |              |      |              |
| relationships   |       | X           | X       | X              |       |           | X       |              |      |              |
| views           |       |             |         |                | X     | X         | X       | X            | X    |              |
| organizations   |       |             |         |                |       |           | X       | X            | X    | X            |



/collection/propertyDefs                    - get all property definitions of default or given model

/collection/profiles                        - get all profiles of default or given model

/collection/images                          - get all images of default or given model

/collection/specializations                 - get all specializations of default or given model

/collection/viewpoints                      - get all viewpoints of default or given model

/collection/elements                        - get all elements of default or given model

/collection/relationships?to:{id}&from:{id} - get all relationships of model

/collection/views                           - get all views of default or given model

/collection/organizations                   - get all organizations of default or given model

## Individual Concepts

Retrieve information from given concept.

/concept/{id}                                - get information about given concept

# PUT

Update existing concepts, limited to idempotent actions. Updates are limited to default model.

/concept/{id}/name          - update names of a concept

/concept/{id}/documentation - update documentation of a concept

/concept/{id}/property/{id} - update given property of a concept

# DELETE

Mark concepts within default model as deprecated.

/concept/{id}           - delete given concept
