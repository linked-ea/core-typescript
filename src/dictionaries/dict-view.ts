// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ViewItemTypes } from '../resources/view.js'

// --- dictionary exports ---
// TODO - associate property types to be used
export const viewItemTypes: Record<ViewItemTypes, string> = {
	Element: 'Element',
	Relationship: 'Relationship',
	Container: 'Container',
	Label: 'Label',
	Line: 'Line',
} as const

export function isViewItemType (value: string): value is ViewItemTypes {
	return Object.keys(viewItemTypes).includes(value)
}