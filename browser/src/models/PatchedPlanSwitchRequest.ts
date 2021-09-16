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
 * @interface PatchedPlanSwitchRequest
 */
export interface PatchedPlanSwitchRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedPlanSwitchRequest
     */
    planId?: string;
}

export function PatchedPlanSwitchRequestFromJSON(json: any): PatchedPlanSwitchRequest {
    return PatchedPlanSwitchRequestFromJSONTyped(json, false);
}

export function PatchedPlanSwitchRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedPlanSwitchRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'planId': !exists(json, 'plan_id') ? undefined : json['plan_id'],
    };
}

export function PatchedPlanSwitchRequestToJSON(value?: PatchedPlanSwitchRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'plan_id': value.planId,
    };
}

