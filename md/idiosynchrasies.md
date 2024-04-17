# Reduction of idiosyncrasies of ArchiMate® Model Exchange File Format

The XML Schemas for ArchiMate® Model Exchange File Format contain several entity attributes deemed optional. This [project](./project.md) has the position that if kept optional, loss of architecture information will take place.

With intent to prevent information loss, this project will incorporate the following modifications in relation to ArchiMate® Model Exchange File Format:

## XSDs

### Model

### View

### Diagram
* sourceAttachement and targetAttachement: must be mandatory attributes of connection

	If optional, it is particularly problematic if two nodes have multiple connections without bendpoints. The rendering process does not have any information where to position them without the risk of graphically overwriting.

	```
	<xs:element name="sourceAttachment" type="LocationType" minOccurs="0" maxOccurs="1" />
	<xs:element name="bendpoint" type="LocationType" minOccurs="0" maxOccurs="unbounded" />
	<xs:element name="targetAttachment" type="LocationType" minOccurs="0" maxOccurs="1" />
	```

* Font sizes: defined in 'pt'

* View sizes: defined in 'px'