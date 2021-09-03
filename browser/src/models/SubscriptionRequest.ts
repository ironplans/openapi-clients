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
 * @interface SubscriptionRequest
 */
export interface SubscriptionRequest {
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionRequest
     */
    startAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof SubscriptionRequest
     */
    endAt?: Date | null;
}

export function SubscriptionRequestFromJSON(json: any): SubscriptionRequest {
    return SubscriptionRequestFromJSONTyped(json, false);
}

export function SubscriptionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubscriptionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'startAt': (new Date(json['start_at'])),
        'endAt': !exists(json, 'end_at') ? undefined : (json['end_at'] === null ? null : new Date(json['end_at'])),
    };
}

export function SubscriptionRequestToJSON(value?: SubscriptionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'start_at': (value.startAt.toISOString()),
        'end_at': value.endAt === undefined ? undefined : (value.endAt === null ? null : value.endAt.toISOString()),
    };
}

