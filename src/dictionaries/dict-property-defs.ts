// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---

// --- dictionary exports ---
// TODO - associate property types to be used
export const propertyTypes = {
	integer: 'The integer type is used for integral numbers. Floating point numbers are rejected',
	number: 'Any numeric type, either integers or floating point numbers',
	date: 'year-month-day as defined by RFC 3339, section 5.6 (https://tools.ietf.org/html/rfc3339#section-5.6)',
	boolean: 'true or false',
	currency: 'number subject to system language-sensitive number formatting',
	duration: 'defined by the ISO 8601 ABNF for "duration" (https://www.w3.org/TR/xmlschema-2/#duration)',
	enumeration: 'list of possible text values',
	string: 'text',
} as const satisfies Record<string, string>