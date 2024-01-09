import type { IRI, IIdentifier } from './common.ts';
export interface OrganizationInfo {
}
export interface IItemInfo extends IIdentifier {
    identifierRef?: IRI;
}
export interface OrganizationInfo {
    items?: ItemsRecord;
}
export type ItemsRecord = Record<IRI, OrganizationInfo | IItemInfo>;
