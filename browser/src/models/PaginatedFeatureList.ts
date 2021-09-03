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
    Feature,
    FeatureFromJSON,
    FeatureFromJSONTyped,
    FeatureToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaginatedFeatureList
 */
export interface PaginatedFeatureList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedFeatureList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFeatureList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedFeatureList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Feature>}
     * @memberof PaginatedFeatureList
     */
    results?: Array<Feature>;
}

export function PaginatedFeatureListFromJSON(json: any): PaginatedFeatureList {
    return PaginatedFeatureListFromJSONTyped(json, false);
}

export function PaginatedFeatureListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedFeatureList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(FeatureFromJSON)),
    };
}

export function PaginatedFeatureListToJSON(value?: PaginatedFeatureList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(FeatureToJSON)),
    };
}

