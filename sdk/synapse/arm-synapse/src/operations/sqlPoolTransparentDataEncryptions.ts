/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/sqlPoolTransparentDataEncryptionsMappers";
import * as Parameters from "../models/parameters";
import { SynapseManagementClientContext } from "../synapseManagementClientContext";

/** Class representing a SqlPoolTransparentDataEncryptions. */
export class SqlPoolTransparentDataEncryptions {
  private readonly client: SynapseManagementClientContext;

  /**
   * Create a SqlPoolTransparentDataEncryptions.
   * @param {SynapseManagementClientContext} client Reference to the service client.
   */
  constructor(client: SynapseManagementClientContext) {
    this.client = client;
  }

  /**
   * Get a SQL pool's transparent data encryption configuration.
   * @summary Get a SQL pool's transparent data encryption configuration
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolTransparentDataEncryptionsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolTransparentDataEncryptionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  get(resourceGroupName: string, workspaceName: string, sqlPoolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TransparentDataEncryption>, callback?: msRest.ServiceCallback<Models.TransparentDataEncryption>): Promise<Models.SqlPoolTransparentDataEncryptionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.SqlPoolTransparentDataEncryptionsGetResponse>;
  }

  /**
   * Creates or updates a Sql pool's transparent data encryption configuration.
   * @summary Creates or updates a Sql pool's transparent data encryption configuration
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param [options] The optional parameters
   * @returns Promise<Models.SqlPoolTransparentDataEncryptionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.TransparentDataEncryption, options?: msRest.RequestOptionsBase): Promise<Models.SqlPoolTransparentDataEncryptionsCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.TransparentDataEncryption, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param workspaceName The name of the workspace
   * @param sqlPoolName SQL pool name
   * @param parameters The required parameters for creating or updating transparent data encryption.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.TransparentDataEncryption, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.TransparentDataEncryption>): void;
  createOrUpdate(resourceGroupName: string, workspaceName: string, sqlPoolName: string, parameters: Models.TransparentDataEncryption, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.TransparentDataEncryption>, callback?: msRest.ServiceCallback<Models.TransparentDataEncryption>): Promise<Models.SqlPoolTransparentDataEncryptionsCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        sqlPoolName,
        parameters,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.SqlPoolTransparentDataEncryptionsCreateOrUpdateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption/{transparentDataEncryptionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.transparentDataEncryptionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Synapse/workspaces/{workspaceName}/sqlPools/{sqlPoolName}/transparentDataEncryption/{transparentDataEncryptionName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.sqlPoolName,
    Parameters.transparentDataEncryptionName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.TransparentDataEncryption,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    201: {
      bodyMapper: Mappers.TransparentDataEncryption
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
