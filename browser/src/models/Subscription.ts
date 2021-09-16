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
    planId: string;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    teamId: string;
    /**
     * 
     * @type {Date}
     * @memberof Subscription
     */
    readonly startAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof Subscription
     */
    readonly endAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof Subscription
     */
    isPaused?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Subscription
     */
    readonly isActive: string;
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
        'endAt': (new Date(json['end_at'])),
        'isPaused': !exists(json, 'is_paused') ? undefined : json['is_paused'],
        'isActive': json['is_active'],
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
        
        'plan_id': value.planId,
        'team_id': value.teamId,
        'is_paused': value.isPaused,
    };
}


