// out/definitions.js
var aspects = {
  "Passive Structure": {
    darken: 0,
    corners: "square"
  },
  Behavior: {
    darken: 0.1,
    corners: "round"
  },
  "Active Structure": {
    darken: 0.2,
    corners: "square"
  },
  Motivation: {
    darken: 0,
    corners: "diagonal"
  }
};
var layers = {
  Strategy: {
    name: "Strategy",
    color: {
      r: 250,
      g: 230,
      b: 196
    },
    initial: "S"
  },
  Business: {
    name: "Business",
    color: {
      r: 255,
      g: 255,
      b: 208
    },
    initial: "B"
  },
  Application: {
    name: "Application",
    color: {
      r: 191,
      g: 251,
      b: 254
    },
    initial: "A"
  },
  Technology: {
    name: "Technology",
    color: {
      r: 148,
      g: 255,
      b: 161
    },
    initial: "T"
  },
  Motivation: {
    name: "Motivation",
    color: {
      r: 238,
      g: 239,
      b: 254
    },
    initial: "M"
  },
  "Implementation & Migration": {
    name: "Implementation & Migration",
    color: {
      r: 255,
      g: 223,
      b: 224
    },
    initial: "I"
  },
  Physical: {
    name: "Physical",
    color: {
      r: 194,
      g: 247,
      b: 199
    },
    initial: "P"
  }
};
var elements = {
  ApplicationCollaboration: {
    name: "Application Component",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  ApplicationComponent: {
    name: "Application Component",
    layer: "Application",
    aspect: "Passive Structure",
    definition: ""
  },
  ApplicationEvent: {
    name: "Application Event",
    layer: "Application",
    aspect: "Passive Structure",
    definition: ""
  },
  ApplicationFunction: {
    name: "Application Function",
    layer: "Application",
    aspect: "Behavior",
    definition: ""
  },
  ApplicationInteraction: {
    name: "Application Interaction",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  ApplicationInterface: {
    name: "Application Interface",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  ApplicationProcess: {
    name: "Application Process",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  ApplicationService: {
    name: "Application Service",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  Artifact: {
    name: "Artifact",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  Assessment: {
    name: "Assessment",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessActor: {
    name: "Business Actor",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessCollaboration: {
    name: "Business Collaboration",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessEvent: {
    name: "Business Event",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessFunction: {
    name: "Business Function",
    layer: "Business",
    aspect: "Passive Structure",
    definition: ""
  },
  BusinessInteraction: {
    name: "Business Interaction",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessInterface: {
    name: "Business Interface",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessObject: {
    name: "Business Object",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessProcess: {
    name: "Business Process",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessRole: {
    name: "Business Role",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  BusinessService: {
    name: "Business Service",
    layer: "Business",
    aspect: "Active Structure",
    definition: ""
  },
  Capability: {
    name: "Capability",
    layer: "Strategy",
    aspect: "Active Structure",
    definition: ""
  },
  CommunicationNetwork: {
    name: "Communication Network",
    layer: "Technology",
    aspect: "Active Structure",
    definition: "",
    alias: "Network"
    // This usage is still permitted but deprecated and will be removed from a future version of the standard
  },
  Constraint: {
    name: "Constraint",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  Contract: {
    name: "Contract",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  CourseOfAction: {
    name: "Course Of Action",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  DataObject: {
    name: "Data Object",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  // FIXME: check Deliverable aspect
  Deliverable: {
    name: "Deliverable",
    layer: "Implementation & Migration",
    aspect: "Active Structure",
    definition: ""
  },
  Device: {
    name: "Device",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  DistributionNetwork: {
    name: "Distribution Network",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  Driver: {
    name: "Driver",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  Equipment: {
    name: "Equipment",
    layer: "Physical",
    aspect: "Active Structure",
    definition: ""
  },
  Facility: {
    name: "Facility",
    layer: "Physical",
    aspect: "Active Structure",
    definition: ""
  },
  // FIXME: check Gap aspect
  Gap: {
    name: "Gap",
    layer: "Implementation & Migration",
    aspect: "Active Structure",
    definition: ""
  },
  Goal: {
    name: "Goal",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  ImplementationEvent: {
    name: "Implementation Event",
    layer: "Implementation & Migration",
    aspect: "Active Structure",
    definition: ""
  },
  Location: {
    name: "Location",
    layer: "Physical",
    aspect: "Active Structure",
    definition: ""
  },
  Material: {
    name: "Material",
    layer: "Physical",
    aspect: "Active Structure",
    definition: ""
  },
  Meaning: {
    name: "Meaning",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  Node: {
    name: "Node",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  Outcome: {
    name: "Outcome",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  Path: {
    name: "Path",
    layer: "Strategy",
    aspect: "Active Structure",
    definition: ""
  },
  // FIXME: check Plateau aspect
  Plateau: {
    name: "Plateau",
    layer: "Implementation & Migration",
    aspect: "Active Structure",
    definition: ""
  },
  Principle: {
    name: "Principle",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  Product: {
    name: "Product",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  Representation: {
    name: "Representation",
    layer: "Application",
    aspect: "Active Structure",
    definition: ""
  },
  Requirement: {
    name: "Requirement",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  Resource: {
    name: "Resource",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  Stakeholder: {
    name: "Stakeholder",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  SystemSoftware: {
    name: "System Software",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  TechnologyCollaboration: {
    name: "Technology Collaboration",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  TechnologyEvent: {
    name: "Technology Event",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  TechnologyFunction: {
    name: "Technology Function",
    layer: "Technology",
    aspect: "Active Structure",
    definition: "",
    alias: "InfrastructureFunction"
    // This usage is still permitted but deprecated and will be removed from a future version of the standard
  },
  TechnologyInteraction: {
    name: "Technology Interaction",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  TechnologyInterface: {
    name: "Technology Interface",
    layer: "Technology",
    aspect: "Active Structure",
    definition: "",
    alias: "InfrastructureInterface"
    // This usage is still permitted but deprecated and will be removed from a future version of the standard
  },
  TechnologyProcess: {
    name: "Technology Process",
    layer: "Technology",
    aspect: "Active Structure",
    definition: ""
  },
  TechnologyService: {
    name: "Technology Service",
    layer: "Technology",
    aspect: "Active Structure",
    definition: "",
    alias: "InfrastructureService"
    // This usage is still permitted but deprecated and will be removed from a future version of the standard
  },
  Value: {
    name: "Value",
    layer: "Motivation",
    aspect: "Active Structure",
    definition: ""
  },
  ValueStream: {
    name: "Value Stream",
    layer: "Strategy",
    aspect: "Active Structure",
    definition: ""
  },
  WorkPackage: {
    name: "Work Package",
    layer: "Implementation & Migration",
    aspect: "Active Structure",
    definition: ""
  },
  // other elements
  Grouping: {
    name: "Grouping",
    layer: "Strategy",
    aspect: "Active Structure",
    definition: ""
  },
  // TODO: validate layer, aspect and definition
  AndJunction: {
    name: "AND Junction",
    layer: "Strategy",
    aspect: "Active Structure",
    definition: ""
  },
  OrJunction: {
    name: "OR Junction",
    layer: "Strategy",
    aspect: "Active Structure",
    definition: ""
  }
};
var relationships = {
  // export const relationships: Record<TRelationshipTypes, RelationshipTypeInfo> = {
  Access: {
    category: "Structural",
    sourceMarker: "diamond empty",
    line: "dots",
    endMarker: "none"
  },
  Aggregation: {
    category: "Structural",
    sourceMarker: "diamond empty",
    line: "straight",
    endMarker: "none"
  },
  Assignment: {
    category: "Dependency",
    sourceMarker: "none",
    line: "straight",
    endMarker: "full"
  },
  Association: {
    category: "Structural",
    sourceMarker: "none",
    line: "straight",
    endMarker: "none"
  },
  Composition: {
    category: "Structural",
    sourceMarker: "diamond full",
    line: "straight",
    endMarker: "none"
  },
  Flow: {
    category: "Dynamic",
    sourceMarker: "none",
    line: "dashes",
    endMarker: "full"
  },
  Influence: {
    category: "Dynamic",
    sourceMarker: "none",
    line: "dashes",
    endMarker: "none"
  },
  Realization: {
    category: "Dependency",
    sourceMarker: "none",
    line: "dots",
    endMarker: "empty",
    alias: "RealisationRelationship"
  },
  Specialization: {
    category: "Dependency",
    sourceMarker: "none",
    line: "straight",
    endMarker: "empty",
    alias: "SpecialisationRelationship"
  },
  Triggering: {
    category: "Dynamic",
    sourceMarker: "none",
    line: "straight",
    endMarker: "full"
  },
  UsedBy: {
    category: "Dependency",
    sourceMarker: "none",
    line: "straight",
    endMarker: "none"
  }
};
export {
  aspects,
  elements,
  layers,
  relationships
};
//# sourceMappingURL=definitions.js.map
