/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as coreHttp from "@azure/core-http";
import * as Models from "../models";
import * as Mappers from "../models/appendBlobMappers";
import * as Parameters from "../models/parameters";
import { StorageClientContext } from "../storageClientContext";

/** Class representing a AppendBlob. */
export class AppendBlob {
  private readonly client: StorageClientContext;

  /**
   * Create a AppendBlob.
   * @param {StorageClientContext} client Reference to the service client.
   */
  constructor(client: StorageClientContext) {
    this.client = client;
  }

  /**
   * The Create Append Blob operation creates a new append blob.
   * @param contentLength The length of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppendBlobCreateResponse>
   */
  create(contentLength: number, options?: Models.AppendBlobCreateOptionalParams): Promise<Models.AppendBlobCreateResponse>;
  /**
   * @param contentLength The length of the request.
   * @param callback The callback
   */
  create(contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param contentLength The length of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(contentLength: number, options: Models.AppendBlobCreateOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  create(contentLength: number, options?: Models.AppendBlobCreateOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.AppendBlobCreateResponse> {
    return this.client.sendOperationRequest(
      {
        contentLength,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.AppendBlobCreateResponse>;
  }

  /**
   * The Append Block operation commits a new block of data to the end of an existing append blob.
   * The Append Block operation is permitted only if the blob was created with x-ms-blob-type set to
   * AppendBlob. Append Block is supported only on version 2015-02-21 version or later.
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppendBlobAppendBlockResponse>
   */
  appendBlock(body: coreHttp.HttpRequestBody, contentLength: number, options?: Models.AppendBlobAppendBlockOptionalParams): Promise<Models.AppendBlobAppendBlockResponse>;
  /**
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param callback The callback
   */
  appendBlock(body: coreHttp.HttpRequestBody, contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param body Initial data
   * @param contentLength The length of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  appendBlock(body: coreHttp.HttpRequestBody, contentLength: number, options: Models.AppendBlobAppendBlockOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  appendBlock(body: coreHttp.HttpRequestBody, contentLength: number, options?: Models.AppendBlobAppendBlockOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.AppendBlobAppendBlockResponse> {
    return this.client.sendOperationRequest(
      {
        body,
        contentLength,
        options
      },
      appendBlockOperationSpec,
      callback) as Promise<Models.AppendBlobAppendBlockResponse>;
  }

  /**
   * The Append Block operation commits a new block of data to the end of an existing append blob
   * where the contents are read from a source url. The Append Block operation is permitted only if
   * the blob was created with x-ms-blob-type set to AppendBlob. Append Block is supported only on
   * version 2015-02-21 version or later.
   * @param sourceUrl Specify a URL to the copy source.
   * @param contentLength The length of the request.
   * @param [options] The optional parameters
   * @returns Promise<Models.AppendBlobAppendBlockFromUrlResponse>
   */
  appendBlockFromUrl(sourceUrl: string, contentLength: number, options?: Models.AppendBlobAppendBlockFromUrlOptionalParams): Promise<Models.AppendBlobAppendBlockFromUrlResponse>;
  /**
   * @param sourceUrl Specify a URL to the copy source.
   * @param contentLength The length of the request.
   * @param callback The callback
   */
  appendBlockFromUrl(sourceUrl: string, contentLength: number, callback: coreHttp.ServiceCallback<void>): void;
  /**
   * @param sourceUrl Specify a URL to the copy source.
   * @param contentLength The length of the request.
   * @param options The optional parameters
   * @param callback The callback
   */
  appendBlockFromUrl(sourceUrl: string, contentLength: number, options: Models.AppendBlobAppendBlockFromUrlOptionalParams, callback: coreHttp.ServiceCallback<void>): void;
  appendBlockFromUrl(sourceUrl: string, contentLength: number, options?: Models.AppendBlobAppendBlockFromUrlOptionalParams | coreHttp.ServiceCallback<void>, callback?: coreHttp.ServiceCallback<void>): Promise<Models.AppendBlobAppendBlockFromUrlResponse> {
    return this.client.sendOperationRequest(
      {
        sourceUrl,
        contentLength,
        options
      },
      appendBlockFromUrlOperationSpec,
      callback) as Promise<Models.AppendBlobAppendBlockFromUrlResponse>;
  }
}

// Operation Specifications
const serializer = new coreHttp.Serializer(Mappers, true);
const createOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds
  ],
  headerParameters: [
    Parameters.contentLength,
    Parameters.metadata,
    Parameters.encryptionScope,
    Parameters.version,
    Parameters.requestId,
    Parameters.blobType1,
    Parameters.blobContentType,
    Parameters.blobContentEncoding,
    Parameters.blobContentLanguage,
    Parameters.blobContentMD5,
    Parameters.blobCacheControl,
    Parameters.blobContentDisposition,
    Parameters.leaseId0,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  responses: {
    201: {
      headersMapper: Mappers.AppendBlobCreateHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobCreateHeaders
    }
  },
  isXML: true,
  serializer
};

const appendBlockOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp15
  ],
  headerParameters: [
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.transactionalContentCrc64,
    Parameters.encryptionScope,
    Parameters.version,
    Parameters.requestId,
    Parameters.leaseId0,
    Parameters.maxSize,
    Parameters.appendPosition,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch
  ],
  requestBody: {
    parameterPath: "body",
    mapper: {
      required: true,
      serializedName: "body",
      type: {
        name: "Stream"
      }
    }
  },
  contentType: "application/octet-stream",
  responses: {
    201: {
      headersMapper: Mappers.AppendBlobAppendBlockHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobAppendBlockHeaders
    }
  },
  isXML: true,
  serializer
};

const appendBlockFromUrlOperationSpec: coreHttp.OperationSpec = {
  httpMethod: "PUT",
  path: "{containerName}/{blob}",
  urlParameters: [
    Parameters.url
  ],
  queryParameters: [
    Parameters.timeoutInSeconds,
    Parameters.comp15
  ],
  headerParameters: [
    Parameters.sourceUrl,
    Parameters.sourceRange1,
    Parameters.sourceContentMD5,
    Parameters.sourceContentCrc64,
    Parameters.contentLength,
    Parameters.transactionalContentMD5,
    Parameters.encryptionScope,
    Parameters.version,
    Parameters.requestId,
    Parameters.encryptionKey,
    Parameters.encryptionKeySha256,
    Parameters.encryptionAlgorithm,
    Parameters.leaseId0,
    Parameters.maxSize,
    Parameters.appendPosition,
    Parameters.ifModifiedSince,
    Parameters.ifUnmodifiedSince,
    Parameters.ifMatch,
    Parameters.ifNoneMatch,
    Parameters.sourceIfModifiedSince,
    Parameters.sourceIfUnmodifiedSince,
    Parameters.sourceIfMatch,
    Parameters.sourceIfNoneMatch
  ],
  responses: {
    201: {
      headersMapper: Mappers.AppendBlobAppendBlockFromUrlHeaders
    },
    default: {
      bodyMapper: Mappers.StorageError,
      headersMapper: Mappers.AppendBlobAppendBlockFromUrlHeaders
    }
  },
  isXML: true,
  serializer
};