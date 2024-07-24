export const archimateBase = 'http://www.opengroup.org/xsd/archimate/3.0/'

export type ArchimateBase = typeof archimateBase

export function addBase(fragment: string) {
	return archimateBase + fragment
}