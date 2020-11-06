/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "../models";
import * as Mappers from "../models/restorableDroppedManagedDatabasesMappers";
import * as Parameters from "../models/parameters";
import { SqlManagementClientContext } from "../sqlManagementClientContext";

/** Class representing a RestorableDroppedManagedDatabases. */
export class RestorableDroppedManagedDatabases {
  private readonly client: SqlManagementClientContext;

  /**
   * Create a RestorableDroppedManagedDatabases.
   * @param {SqlManagementClientContext} client Reference to the service client.
   */
  constructor(client: SqlManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of restorable dropped managed databases.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDroppedManagedDatabasesListByInstanceResponse>
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorableDroppedManagedDatabasesListByInstanceResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, callback: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstance(resourceGroupName: string, managedInstanceName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>): void;
  listByInstance(resourceGroupName: string, managedInstanceName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>, callback?: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>): Promise<Models.RestorableDroppedManagedDatabasesListByInstanceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        options
      },
      listByInstanceOperationSpec,
      callback) as Promise<Models.RestorableDroppedManagedDatabasesListByInstanceResponse>;
  }

  /**
   * Gets a restorable dropped managed database.
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDroppedManagedDatabasesGetResponse>
   */
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorableDroppedManagedDatabasesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, callback: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabase>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the resource. You can
   * obtain this value from the Azure Resource Manager API or the portal.
   * @param managedInstanceName The name of the managed instance.
   * @param restorableDroppedDatabaseId
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabase>): void;
  get(resourceGroupName: string, managedInstanceName: string, restorableDroppedDatabaseId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorableDroppedManagedDatabase>, callback?: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabase>): Promise<Models.RestorableDroppedManagedDatabasesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        managedInstanceName,
        restorableDroppedDatabaseId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.RestorableDroppedManagedDatabasesGetResponse>;
  }

  /**
   * Gets a list of restorable dropped managed databases.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.RestorableDroppedManagedDatabasesListByInstanceNextResponse>
   */
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.RestorableDroppedManagedDatabasesListByInstanceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByInstanceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>): void;
  listByInstanceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>, callback?: msRest.ServiceCallback<Models.RestorableDroppedManagedDatabaseListResult>): Promise<Models.RestorableDroppedManagedDatabasesListByInstanceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByInstanceNextOperationSpec,
      callback) as Promise<Models.RestorableDroppedManagedDatabasesListByInstanceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByInstanceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedManagedDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Sql/managedInstances/{managedInstanceName}/restorableDroppedDatabases/{restorableDroppedDatabaseId}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.managedInstanceName,
    Parameters.restorableDroppedDatabaseId,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion4
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedManagedDatabase
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByInstanceNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.RestorableDroppedManagedDatabaseListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};