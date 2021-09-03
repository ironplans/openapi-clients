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
 * @interface PlanFeatureRequest
 */
export interface PlanFeatureRequest {
    /**
     * 
     * @type {string}
     * @memberof PlanFeatureRequest
     */
    featureId: string;
    /**
     * 
     * @type {string}
     * @memberof PlanFeatureRequest
     */
    specId?: string;
    /**
     * 
     * @type {string}
     * @memberof PlanFeatureRequest
     */
    display?: string;
    /**
     * 
     * @type {number}
     * @memberof PlanFeatureRequest
     */
    maxLimit?: number;
}

export function PlanFeatureRequestFromJSON(json: any): PlanFeatureRequest {
    return PlanFeatureRequestFromJSONTyped(json, false);
}

export function PlanFeatureRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PlanFeatureRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'featureId': json['feature_id'],
        'specId': !exists(json, 'spec_id') ? undefined : json['spec_id'],
        'display': !exists(json, 'display') ? undefined : json['display'],
        'maxLimit': !exists(json, 'max_limit') ? undefined : json['max_limit'],
    };
}

export function PlanFeatureRequestToJSON(value?: PlanFeatureRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'feature_id': value.featureId,
        'spec_id': value.specId,
        'display': value.display,
        'max_limit': value.maxLimit,
    };
}

