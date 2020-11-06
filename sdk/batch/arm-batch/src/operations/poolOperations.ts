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
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/poolOperationsMappers";
import * as Parameters from "../models/parameters";
import { BatchManagementClientContext } from "../batchManagementClientContext";

/** Class representing a PoolOperations. */
export class PoolOperations {
  private readonly client: BatchManagementClientContext;

  /**
   * Create a PoolOperations.
   * @param {BatchManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all of the pools in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolListByBatchAccountResponse>
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, options?: Models.PoolListByBatchAccountOptionalParams): Promise<Models.PoolListByBatchAccountResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param callback The callback
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, callback: msRest.ServiceCallback<Models.ListPoolsResult>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBatchAccount(resourceGroupName: string, accountName: string, options: Models.PoolListByBatchAccountOptionalParams, callback: msRest.ServiceCallback<Models.ListPoolsResult>): void;
  listByBatchAccount(resourceGroupName: string, accountName: string, options?: Models.PoolListByBatchAccountOptionalParams | msRest.ServiceCallback<Models.ListPoolsResult>, callback?: msRest.ServiceCallback<Models.ListPoolsResult>): Promise<Models.PoolListByBatchAccountResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        options
      },
      listByBatchAccountOperationSpec,
      callback) as Promise<Models.PoolListByBatchAccountResponse>;
  }

  /**
   * Creates a new pool inside the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param parameters Additional parameters for pool creation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolCreateResponse>
   */
  create(resourceGroupName: string, accountName: string, poolName: string, parameters: Models.Pool, options?: Models.PoolCreateOptionalParams): Promise<Models.PoolCreateResponse> {
    return this.beginCreate(resourceGroupName,accountName,poolName,parameters,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PoolCreateResponse>;
  }

  /**
   * Updates the properties of an existing pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param parameters Pool properties that should be updated. Properties that are supplied will be
   * updated, any property not supplied will be unchanged.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolUpdateResponse>
   */
  update(resourceGroupName: string, accountName: string, poolName: string, parameters: Models.Pool, options?: Models.PoolUpdateOptionalParams): Promise<Models.PoolUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param parameters Pool properties that should be updated. Properties that are supplied will be
   * updated, any property not supplied will be unchanged.
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, poolName: string, parameters: Models.Pool, callback: msRest.ServiceCallback<Models.Pool>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param parameters Pool properties that should be updated. Properties that are supplied will be
   * updated, any property not supplied will be unchanged.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, accountName: string, poolName: string, parameters: Models.Pool, options: Models.PoolUpdateOptionalParams, callback: msRest.ServiceCallback<Models.Pool>): void;
  update(resourceGroupName: string, accountName: string, poolName: string, parameters: Models.Pool, options?: Models.PoolUpdateOptionalParams | msRest.ServiceCallback<Models.Pool>, callback?: msRest.ServiceCallback<Models.Pool>): Promise<Models.PoolUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        parameters,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.PoolUpdateResponse>;
  }

  /**
   * Deletes the specified pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolDeleteResponse>
   */
  deleteMethod(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolDeleteResponse> {
    return this.beginDeleteMethod(resourceGroupName,accountName,poolName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PoolDeleteResponse>;
  }

  /**
   * Gets information about the specified pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolGetResponse>
   */
  get(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, poolName: string, callback: msRest.ServiceCallback<Models.Pool>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, accountName: string, poolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pool>): void;
  get(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pool>, callback?: msRest.ServiceCallback<Models.Pool>): Promise<Models.PoolGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PoolGetResponse>;
  }

  /**
   * Disables automatic scaling for a pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolDisableAutoScaleResponse>
   */
  disableAutoScale(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolDisableAutoScaleResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param callback The callback
   */
  disableAutoScale(resourceGroupName: string, accountName: string, poolName: string, callback: msRest.ServiceCallback<Models.Pool>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The optional parameters
   * @param callback The callback
   */
  disableAutoScale(resourceGroupName: string, accountName: string, poolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pool>): void;
  disableAutoScale(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pool>, callback?: msRest.ServiceCallback<Models.Pool>): Promise<Models.PoolDisableAutoScaleResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      disableAutoScaleOperationSpec,
      callback) as Promise<Models.PoolDisableAutoScaleResponse>;
  }

  /**
   * This does not restore the pool to its previous state before the resize operation: it only stops
   * any further changes being made, and the pool maintains its current state. After stopping, the
   * pool stabilizes at the number of nodes it was at when the stop operation was done. During the
   * stop operation, the pool allocation state changes first to stopping and then to steady. A resize
   * operation need not be an explicit resize pool request; this API can also be used to halt the
   * initial sizing of the pool when it is created.
   * @summary Stops an ongoing resize operation on the pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolStopResizeResponse>
   */
  stopResize(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolStopResizeResponse>;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param callback The callback
   */
  stopResize(resourceGroupName: string, accountName: string, poolName: string, callback: msRest.ServiceCallback<Models.Pool>): void;
  /**
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param options The optional parameters
   * @param callback The callback
   */
  stopResize(resourceGroupName: string, accountName: string, poolName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Pool>): void;
  stopResize(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Pool>, callback?: msRest.ServiceCallback<Models.Pool>): Promise<Models.PoolStopResizeResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      stopResizeOperationSpec,
      callback) as Promise<Models.PoolStopResizeResponse>;
  }

  /**
   * Creates a new pool inside the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param parameters Additional parameters for pool creation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, accountName: string, poolName: string, parameters: Models.Pool, options?: Models.PoolBeginCreateOptionalParams): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        parameters,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes the specified pool.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param poolName The pool name. This must be unique within the account.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, accountName: string, poolName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        accountName,
        poolName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Lists all of the pools in the specified account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PoolListByBatchAccountNextResponse>
   */
  listByBatchAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PoolListByBatchAccountNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByBatchAccountNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ListPoolsResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByBatchAccountNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ListPoolsResult>): void;
  listByBatchAccountNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ListPoolsResult>, callback?: msRest.ServiceCallback<Models.ListPoolsResult>): Promise<Models.PoolListByBatchAccountNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByBatchAccountNextOperationSpec,
      callback) as Promise<Models.PoolListByBatchAccountNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByBatchAccountOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.maxresults,
    Parameters.select,
    Parameters.filter,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ListPoolsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.poolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Pool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolUpdateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.PoolUpdateHeaders
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.poolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolGetHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.PoolGetHeaders
    }
  },
  serializer
};

const disableAutoScaleOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/disableAutoScale",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.poolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolDisableAutoScaleHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.PoolDisableAutoScaleHeaders
    }
  },
  serializer
};

const stopResizeOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}/stopResize",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.poolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolStopResizeHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.PoolStopResizeHeaders
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.poolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.Pool,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Pool,
      headersMapper: Mappers.PoolCreateHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.PoolCreateHeaders
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Batch/batchAccounts/{accountName}/pools/{poolName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.accountName1,
    Parameters.poolName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      headersMapper: Mappers.PoolDeleteHeaders
    },
    202: {
      headersMapper: Mappers.PoolDeleteHeaders
    },
    204: {
      headersMapper: Mappers.PoolDeleteHeaders
    },
    default: {
      bodyMapper: Mappers.CloudError,
      headersMapper: Mappers.PoolDeleteHeaders
    }
  },
  serializer
};

const listByBatchAccountNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ListPoolsResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};