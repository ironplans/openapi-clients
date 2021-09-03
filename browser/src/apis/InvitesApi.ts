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


import * as runtime from '../runtime';
import {
    CreateInviteRequest,
    CreateInviteRequestFromJSON,
    CreateInviteRequestToJSON,
} from '../models';

export interface InvitesV1CreateRequest {
    createInviteRequest: CreateInviteRequest;
}

/**
 * 
 */
export class InvitesApi extends runtime.BaseAPI {

    /**
     * Claim an invite and be redirected to provider\'s auth url.
     */
    async invitesV1ClaimRetrieveRaw(initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        const response = await this.request({
            path: `/invites/v1/claim/`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Claim an invite and be redirected to provider\'s auth url.
     */
    async invitesV1ClaimRetrieve(initOverrides?: RequestInit): Promise<void> {
        await this.invitesV1ClaimRetrieveRaw(initOverrides);
    }

    /**
     * Send an invitation via email.
     */
    async invitesV1CreateRaw(requestParameters: InvitesV1CreateRequest, initOverrides?: RequestInit): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.createInviteRequest === null || requestParameters.createInviteRequest === undefined) {
            throw new runtime.RequiredError('createInviteRequest','Required parameter requestParameters.createInviteRequest was null or undefined when calling invitesV1Create.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("OAuth2", []);
        }

        const response = await this.request({
            path: `/invites/v1/`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateInviteRequestToJSON(requestParameters.createInviteRequest),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * Send an invitation via email.
     */
    async invitesV1Create(requestParameters: InvitesV1CreateRequest, initOverrides?: RequestInit): Promise<void> {
        await this.invitesV1CreateRaw(requestParameters, initOverrides);
    }

}
