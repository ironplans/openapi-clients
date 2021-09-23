/* tslint:disable */
/* eslint-disable */
/**
 * Iron Plans API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    Invite,
    InviteFromJSON,
    InviteFromJSONTyped,
    InviteToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaginatedInviteList
 */
export interface PaginatedInviteList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedInviteList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedInviteList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedInviteList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Invite>}
     * @memberof PaginatedInviteList
     */
    results?: Array<Invite>;
}

export function PaginatedInviteListFromJSON(json: any): PaginatedInviteList {
    return PaginatedInviteListFromJSONTyped(json, false);
}

export function PaginatedInviteListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedInviteList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(InviteFromJSON)),
    };
}

export function PaginatedInviteListToJSON(value?: PaginatedInviteList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(InviteToJSON)),
    };
}


