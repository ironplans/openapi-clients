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
    Invoice,
    InvoiceFromJSON,
    InvoiceFromJSONTyped,
    InvoiceToJSON,
} from './';

/**
 * 
 * @export
 * @interface PaginatedInvoiceList
 */
export interface PaginatedInvoiceList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedInvoiceList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedInvoiceList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedInvoiceList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Invoice>}
     * @memberof PaginatedInvoiceList
     */
    results?: Array<Invoice>;
}

export function PaginatedInvoiceListFromJSON(json: any): PaginatedInvoiceList {
    return PaginatedInvoiceListFromJSONTyped(json, false);
}

export function PaginatedInvoiceListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedInvoiceList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(InvoiceFromJSON)),
    };
}

export function PaginatedInvoiceListToJSON(value?: PaginatedInvoiceList | null): any {
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
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(InvoiceToJSON)),
    };
}


