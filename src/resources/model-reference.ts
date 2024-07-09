// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// --- project imports ---

// --- types ---
/**
* schemes supported: http, https, file
*/
type Service = string

// --- resource ---
export interface ModelReferenceInfo {
	/**
	 * location or service providing referenced model
	 */
	service: Service
}
