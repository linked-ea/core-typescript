// ArchiMate® is a registered trademark of The Open Group. https://www.opengroup.org/archimate-forum/archimate-overview

// MARK: --- exported types ---
export type MimeType = 'image/svg+xml'

// MARK: --- resource definition ---
export interface ImageInfo {
	mimeType: MimeType
	encode: string // TODO: base64 encoded svg image
}
