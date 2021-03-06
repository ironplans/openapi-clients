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
    RoleEnum,
    RoleEnumFromJSON,
    RoleEnumFromJSONTyped,
    RoleEnumToJSON,
} from './';

/**
 * 
 * @export
 * @interface PatchedInviteRequest
 */
export interface PatchedInviteRequest {
    /**
     * 
     * @type {string}
     * @memberof PatchedInviteRequest
     */
    sentToEmail?: string;
    /**
     * 
     * @type {boolean}
     * @memberof PatchedInviteRequest
     */
    isClaimed?: boolean;
    /**
     * 
     * @type {Date}
     * @memberof PatchedInviteRequest
     */
    expiresAt?: Date;
    /**
     * 
     * @type {RoleEnum}
     * @memberof PatchedInviteRequest
     */
    role?: RoleEnum;
    /**
     * 
     * @type {string}
     * @memberof PatchedInviteRequest
     */
    teamId?: string;
}

export function PatchedInviteRequestFromJSON(json: any): PatchedInviteRequest {
    return PatchedInviteRequestFromJSONTyped(json, false);
}

export function PatchedInviteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedInviteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sentToEmail': !exists(json, 'sent_to_email') ? undefined : json['sent_to_email'],
        'isClaimed': !exists(json, 'is_claimed') ? undefined : json['is_claimed'],
        'expiresAt': !exists(json, 'expires_at') ? undefined : (new Date(json['expires_at'])),
        'role': !exists(json, 'role') ? undefined : RoleEnumFromJSON(json['role']),
        'teamId': !exists(json, 'team_id') ? undefined : json['team_id'],
    };
}

export function PatchedInviteRequestToJSON(value?: PatchedInviteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sent_to_email': value.sentToEmail,
        'is_claimed': value.isClaimed,
        'expires_at': value.expiresAt === undefined ? undefined : (value.expiresAt.toISOString()),
        'role': RoleEnumToJSON(value.role),
        'team_id': value.teamId,
    };
}


