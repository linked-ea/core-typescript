import type { IRI } from './common.ts';
import type { PropertyRecord } from './resource-propertydef.ts';
export interface RelationshipInfo extends PropertyRecord {
    type: RelationshipTypesUnion;
    source: IRI;
    target: IRI;
}
export type RelationshipTypesUnion = keyof typeof relationships;
export type TRelationshipCategories = 'Structural' | 'Dependency' | 'Dynamic' | 'Other';
export declare const relationships: {
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Access": {
        readonly category: "Structural";
        readonly sourceMarker: "diamond empty";
        readonly line: "dots";
        readonly endMarker: "none";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Aggregation": {
        readonly category: "Structural";
        readonly sourceMarker: "diamond empty";
        readonly line: "straight";
        readonly endMarker: "none";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Assignment": {
        readonly category: "Dependency";
        readonly sourceMarker: "none";
        readonly line: "straight";
        readonly endMarker: "full";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Association": {
        readonly category: "Structural";
        readonly sourceMarker: "none";
        readonly line: "straight";
        readonly endMarker: "none";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Composition": {
        readonly category: "Structural";
        readonly sourceMarker: "diamond full";
        readonly line: "straight";
        readonly endMarker: "none";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Flow": {
        readonly category: "Dynamic";
        readonly sourceMarker: "none";
        readonly line: "dashes";
        readonly endMarker: "full";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Influence": {
        readonly category: "Dynamic";
        readonly sourceMarker: "none";
        readonly line: "dashes";
        readonly endMarker: "none";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Realization": {
        readonly category: "Dependency";
        readonly sourceMarker: "none";
        readonly line: "dots";
        readonly endMarker: "empty";
        readonly alias: "RealisationRelationship";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Specialization": {
        readonly category: "Dependency";
        readonly sourceMarker: "none";
        readonly line: "straight";
        readonly endMarker: "empty";
        readonly alias: "SpecialisationRelationship";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/Triggering": {
        readonly category: "Dynamic";
        readonly sourceMarker: "none";
        readonly line: "straight";
        readonly endMarker: "full";
    };
    readonly "http://www.opengroup.org/xsd/archimate/3.0/UsedBy": {
        readonly category: "Dependency";
        readonly sourceMarker: "none";
        readonly line: "straight";
        readonly endMarker: "none";
    };
};
