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
    Usage,
    UsageFromJSON,
    UsageFromJSONTyped,
    UsageToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaginatedUsageList
 */
export interface PaginatedUsageList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedUsageList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUsageList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedUsageList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Usage>}
     * @memberof PaginatedUsageList
     */
    results?: Array<Usage>;
}

export function PaginatedUsageListFromJSON(json: any): PaginatedUsageList {
    return PaginatedUsageListFromJSONTyped(json, false);
}

export function PaginatedUsageListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedUsageList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(UsageFromJSON)),
    };
}

export function PaginatedUsageListToJSON(value?: PaginatedUsageList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(UsageToJSON)),
    };
}


