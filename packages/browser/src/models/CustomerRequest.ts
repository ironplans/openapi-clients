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
/**
 * 
 * @export
 * @interface CustomerRequest
 */
export interface CustomerRequest {
    /**
     * 
     * @type {string}
     * @memberof CustomerRequest
     */
    sourceId: string;
}

export function CustomerRequestFromJSON(json: any): CustomerRequest {
    return CustomerRequestFromJSONTyped(json, false);
}

export function CustomerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceId': json['source_id'],
    };
}

export function CustomerRequestToJSON(value?: CustomerRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'source_id': value.sourceId,
    };
}

