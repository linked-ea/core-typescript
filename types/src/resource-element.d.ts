import type { IAlias } from './common.ts';
import type { TAspects, TLayers } from './foundation-context.ts';
import type { PropertyRecord } from './resource-propertydef.ts';
export interface ElementInfo extends PropertyRecord {
    type: ElementTypesUnion;
}
export type ElementTypesUnion = keyof typeof elements;
export interface IElementConcept extends IAlias {
    name: string;
    layer: TLayers;
    aspect: TAspects;
    definition: string;
}
export declare const elements: {
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationCollaboration": {
        readonly name: "Application Collaboration";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationComponent": {
        readonly name: "Application Component";
        readonly layer: "Application";
        readonly aspect: "Passive Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationEvent": {
        readonly name: "Application Event";
        readonly layer: "Application";
        readonly aspect: "Passive Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationFunction": {
        readonly name: "Application Function";
        readonly layer: "Application";
        readonly aspect: "Behavior";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationInteraction": {
        readonly name: "Application Interaction";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationInterface": {
        readonly name: "Application Interface";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationProcess": {
        readonly name: "Application Process";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ApplicationService": {
        readonly name: "Application Service";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Artifact": {
        readonly name: "Artifact";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Assessment": {
        readonly name: "Assessment";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessActor": {
        readonly name: "Business Actor";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessCollaboration": {
        readonly name: "Business Collaboration";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessEvent": {
        readonly name: "Business Event";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessFunction": {
        readonly name: "Business Function";
        readonly layer: "Business";
        readonly aspect: "Passive Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessInteraction": {
        readonly name: "Business Interaction";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessInterface": {
        readonly name: "Business Interface";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessObject": {
        readonly name: "Business Object";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessProcess": {
        readonly name: "Business Process";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessRole": {
        readonly name: "Business Role";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/BusinessService": {
        readonly name: "Business Service";
        readonly layer: "Business";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Capability": {
        readonly name: "Capability";
        readonly layer: "Strategy";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/CommunicationNetwork": {
        readonly name: "Communication Network";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
        readonly alias: "Network";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Constraint": {
        readonly name: "Constraint";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Contract": {
        readonly name: "Contract";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/CourseOfAction": {
        readonly name: "Course Of Action";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/DataObject": {
        readonly name: "Data Object";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Deliverable": {
        readonly name: "Deliverable";
        readonly layer: "Implementation & Migration";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Device": {
        readonly name: "Device";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/DistributionNetwork": {
        readonly name: "Distribution Network";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Driver": {
        readonly name: "Driver";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Equipment": {
        readonly name: "Equipment";
        readonly layer: "Physical";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Facility": {
        readonly name: "Facility";
        readonly layer: "Physical";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Gap": {
        readonly name: "Gap";
        readonly layer: "Implementation & Migration";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Goal": {
        readonly name: "Goal";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ImplementationEvent": {
        readonly name: "Implementation Event";
        readonly layer: "Implementation & Migration";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Location": {
        readonly name: "Location";
        readonly layer: "Physical";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Material": {
        readonly name: "Material";
        readonly layer: "Physical";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Meaning": {
        readonly name: "Meaning";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Node": {
        readonly name: "Node";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Outcome": {
        readonly name: "Outcome";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Path": {
        readonly name: "Path";
        readonly layer: "Strategy";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Plateau": {
        readonly name: "Plateau";
        readonly layer: "Implementation & Migration";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Principle": {
        readonly name: "Principle";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Product": {
        readonly name: "Product";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Representation": {
        readonly name: "Representation";
        readonly layer: "Application";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Requirement": {
        readonly name: "Requirement";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Resource": {
        readonly name: "Resource";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Stakeholder": {
        readonly name: "Stakeholder";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/SystemSoftware": {
        readonly name: "System Software";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/TechnologyCollaboration": {
        readonly name: "Technology Collaboration";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/TechnologyEvent": {
        readonly name: "Technology Event";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/TechnologyFunction": {
        readonly name: "Technology Function";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
        readonly alias: "InfrastructureFunction";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/TechnologyInteraction": {
        readonly name: "Technology Interaction";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/TechnologyInterface": {
        readonly name: "Technology Interface";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
        readonly alias: "InfrastructureInterface";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/TechnologyProcess": {
        readonly name: "Technology Process";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/TechnologyService": {
        readonly name: "Technology Service";
        readonly layer: "Technology";
        readonly aspect: "Active Structure";
        readonly definition: "";
        readonly alias: "InfrastructureService";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Value": {
        readonly name: "Value";
        readonly layer: "Motivation";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/ValueStream": {
        readonly name: "Value Stream";
        readonly layer: "Strategy";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/WorkPackage": {
        readonly name: "Work Package";
        readonly layer: "Implementation & Migration";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Grouping": {
        readonly name: "Grouping";
        readonly layer: "Strategy";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/AndJunction": {
        readonly name: "AND Junction";
        readonly layer: "Strategy";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/OrJunction": {
        readonly name: "OR Junction";
        readonly layer: "Strategy";
        readonly aspect: "Active Structure";
        readonly definition: "";
    };
};
