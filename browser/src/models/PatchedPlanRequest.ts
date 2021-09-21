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
    PlanFeatureRequest,
    PlanFeatureRequestFromJSON,
    PlanFeatureRequestFromJSONTyped,
    PlanFeatureRequestToJSON,
} from './';

/**
 * 
 * @export
 * @interface PatchedPlanRequest
 */
export interface PatchedPlanRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedPlanRequest
     */
    providerId?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedPlanRequest
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof PatchedPlanRequest
     */
    tier?: number;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedPlanRequest
     */
    isActive?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedPlanRequest
     */
    isPublic?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedPlanRequest
     */
    isTrialAllowed?: boolean;
    /**
     * Amount in cents
     * @type {number}
     * @memberof PatchedPlanRequest
     */
    perYearPriceCents?: number | null;
    /**
     * Amount in cents
     * @type {number}
     * @memberof PatchedPlanRequest
     */
    perMonthPriceCents?: number | null;
    /**
     * 
     * @type {Array<PlanFeatureRequest>}
     * @memberof PatchedPlanRequest
     */
    features?: Array<PlanFeatureRequest>;
}

export function PatchedPlanRequestFromJSON(json: any): PatchedPlanRequest {
    return PatchedPlanRequestFromJSONTyped(json, false);
}

export function PatchedPlanRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedPlanRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'providerId': !exists(json, 'provider_id') ? undefined : json['provider_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tier': !exists(json, 'tier') ? undefined : json['tier'],
        'isActive': !exists(json, 'is_active') ? undefined : json['is_active'],
        'isPublic': !exists(json, 'is_public') ? undefined : json['is_public'],
        'isTrialAllowed': !exists(json, 'is_trial_allowed') ? undefined : json['is_trial_allowed'],
        'perYearPriceCents': !exists(json, 'per_year_price_cents') ? undefined : json['per_year_price_cents'],
        'perMonthPriceCents': !exists(json, 'per_month_price_cents') ? undefined : json['per_month_price_cents'],
        'features': !exists(json, 'features') ? undefined : ((json['features'] as Array<any>).map(PlanFeatureRequestFromJSON)),
    };
}

export function PatchedPlanRequestToJSON(value?: PatchedPlanRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'provider_id': value.providerId,
        'name': value.name,
        'tier': value.tier,
        'is_active': value.isActive,
        'is_public': value.isPublic,
        'is_trial_allowed': value.isTrialAllowed,
        'per_year_price_cents': value.perYearPriceCents,
        'per_month_price_cents': value.perMonthPriceCents,
        'features': value.features === undefined ? undefined : ((value.features as Array<any>).map(PlanFeatureRequestToJSON)),
    };
}


