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
 * @interface Subscription
 */
export interface Subscription {
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    readonly id: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    readonly planId: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    readonly teamId: string;
    /**
     * 
     * @type {Date}
     * @memberof Subscription
     */
    startAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Subscription
     */
    endAt?: Date | null;
}

export function SubscriptionFromJSON(json: any): Subscription {
    return SubscriptionFromJSONTyped(json, false);
}

export function SubscriptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Subscription {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'planId': json['plan_id'],
        'teamId': json['team_id'],
        'startAt': (new Date(json['start_at'])),
        'endAt': !exists(json, 'end_at') ? undefined : (json['end_at'] === null ? null : new Date(json['end_at'])),
    };
}

export function SubscriptionToJSON(value?: Subscription | null): any {
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


