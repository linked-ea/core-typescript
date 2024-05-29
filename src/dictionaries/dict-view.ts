// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---
import type { ItemTypeUnion } from '../resources/view.js'

// --- dictionary exports ---
// TODO - associate property types to be used
export const viewItemTypes: Record<ItemTypeUnion, string> = {
	Element: 'Element',
	Relationship: 'Relationship',
	Container: 'Container',
	Label: 'Label',
	Line: 'Line',
	Connector: 'Connector',
} as const

export function isViewItemType (value: string): value is ItemTypeUnion {
	return Object.keys(viewItemTypes).includes(value)
}