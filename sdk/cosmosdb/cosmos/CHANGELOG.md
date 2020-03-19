# Release History

## 3.6.3 (Unreleased)


## 3.6.2 (2020-2-20)

- BUG FIX: Support signing in web workers where this === self

## 3.6.1 (2020-2-11)

- BUG FIX: Normalize location names when selecting endpoint. Allows passing of normalized endpoint names

## 3.6.0 (2020-2-10)

- FEATURE: Add support for spatial indexing, bounding boxes, and geospatial configuration
- BUG FIX: Fix bug when passing forceQueryPlan to QueryIterator for non-item resources (#7333)

## 3.5.4 (2020-1-28)

- BUG FIX: Return parsed number instead of string for request charge

## 3.5.3 (2020-1-06)

- BUG FIX: maxDegreeOfParallelism was defaulting to 1 and should default to the number of partitions of the collection
- BUF FIX: maxItemCount was defaulting to 10 and should default to undefined
- Set default TLS version to 1.2 (#6761)
- Use tslib 1.10.0 (#6710)
- Add partition key to code sample (#6612)

## 3.5.2 (2019-12-03)

- Fix handling of special characters in item ids when signing tokens in the browser (#6379)

## 3.5.1 (2019-11-25)

- Fix bug when paginating GROUP BY queries or using in conjunction with TOP/OFFSET/LIMIT (#6003)
- Improve error message for mixed type ORDER BY (#6306)

## 3.5.0 (2019-11-21)

- FEATURE: Endpoint discovery and multi-region failover improvements. See https://github.com/Azure/azure-sdk-for-js/pull/6283 for more information on this change. (#6283)
- Makes changeFeed and query options optional. Fix #6232 Fix #6277 (#6273)

## 3.4.2 (2019-11-07)

- Fixes bug where the query may throw a 410 error during a split operation. Instead, throw 503 (#6074)

## 3.4.1 (2019-11-05)

- Fix region drop failover scenario and add test (#5892)

## 3.4.0 (2019-10-28)

- FEATURE: GROUP BY query support (#5749)
- Update proxy-agent. Remove types folder (#5854)
- Typo: Fix "an" vs "a" (#5812)
- Update to Mocha 6.2.2 (#5824)
- Remove unused Range type (#5686)
- Remove universal-user-agent (#5869)

## 3.3.4 (2019-10-14)

- Query bug fix. Empty result last call not reporting proper RUs (#5517)
- Sign headers using internal package (#5523)
- Use internal digest function instead of crypto-hash package (#5493)
- Remove internal binary-search-bounds package (#5417)
- Fix atob bug impacting browser users (#5375)

## 3.3.2 (2019-10-03)

- Export TokenProvider and RequestInfo types (#5262)
- Remove atob package in favor of local version (#5334)
- Fix incorrect lib version in UserAgent (#5295)
- Allow zero for Item TTL (#5257)

## 3.3.0 (2019-09-24)

- FEATURE: Add userAgentSuffix to CosmosClient constructor options (#5068)
- Guard process.env to fix webpack issues (#5223)
- Fixes bug where initial QueryIterator promise was not being created (#5215)
- Fix aggregates bug when query was returning no results (#5184)
- sideEffects field set to false (#5022)

## 3.2.0 (2019-08-26)

- FEATURE: Endpoint resolution now blocks until initialized (#409)
- FEATURE: Add bufferItems support & other cross-partition perf improvements (#397)
- Fix missing AbortSignal type for users not targeting the DOM (#416)
- Add sample for bulk update with continuation token (#402)
- Export default partition key path (#405)

## 3.1.1 (2019-08-07)

- Fix bug where offset limit iterator was being called for each item under the offset count (#398)
- Add retry on EPIPE error (#400)

## 3.1.0 (2019-07-26)

- FEATURE: Set default ResponseContinuationTokenLimitInKB to 1kb. Prevents header limit errors (#384)
- Remove unused disableSSLVerification options (#388)

## 3.0.4 (2019-07-22)

- Allow initialHeaders to explicitly set partition key header (#383)
- Use package.json#files to prevent extraneous files from being pubished (#382)
- Fix for routing map sort error on older version of node+v8 (#378)
- Fixes bug when user supplies partial retry options. Close #377 (#379)
- README updates (#374)

## 3.0.3 (2019-07-17)

- Fix webpack usage. Prevent resolving modules called with `require` (#373)
- Various internal API cleanups and sample fixes

## 3.0.2 (2019-07-09)

Fixes a long outstanding bug where RUs were always being reported as 0 for aggregate queries (#366)

## 3.0.1 (2019-07-02)

Fixes broken session tokens in the browser. Cosmos uses file system friendly base64 to represent resources internally but does not work with the builtin browser atob function (#363)

## 3.0.0 (2019-06-28)

🎉 v3 release! 🎉 Many new features, bug fixes, and a few breaking changes. Primary goals of this release:

- Implement major new features:
  - DISTINCT queries
  - LIMIT/OFFSET queries
  - User cancelable requests
- Update to the latest Cosmos REST API version where [all containers have unlimited scale](https://docs.microsoft.com/en-us/azure/cosmos-db/migrate-containers-partitioned-to-nonpartitioned)
- Make it easier to use Cosmos from the browser
- Better align with the new [Azure JS SDK guidlines](https://azuresdkspecs.z5.web.core.windows.net/TypeScriptSpec.html)

### Migration Guide for Breaking Changes

#### Improved Client Constructor Options (#246)

Constructor options have been simplified:

- `masterKey` was renamed `key` and moved to the top-level
- Properties previously under `options.auth` have moved to the top-level

```js
// v2
const client = new CosmosClient({
  endpoint: "https://your-database.cosmos.azure.com",
  auth: {
    masterKey: "your-primary-key"
  }
});

// v3
const client = new CosmosClient({
  endpoint: "https://your-database.cosmos.azure.com",
  key: "your-primary-key"
});
```

#### Simplified QueryIterator API (#238 #316)

In v2 there were many different ways to iterate or retrieve results from a query. We have attempted to simplify the v3 API and remove similar or duplciate APIs:

- Remove iterator.next() and iterator.current(). Use fetchNext() to get pages of results.
- Remove iterator.forEach(). Use async iterators instead.
- iterator.executeNext() renamed to iterator.fetchNext()
- iterator.toArray() renamed to iterator.fetchAll()
- Pages are now proper `Response` objects intead of plain JS objects

```js
const container = client.database(dbId).container(containerId)

// v2
container.items.query('SELECT * from c').toArray()
container.items.query('SELECT * from c').executeNext()
container.items.query('SELECT * from c').forEach(({ body: item }) => { console.log(item.id) })

// v3
container.items.query('SELECT * from c').fetchAll()
container.items.query('SELECT * from c').fetchNext()
for await(const { result: item } in client.databases.readAll().getAsyncIterator()) {
    console.log(item.id)
}
```

#### Fixed Containers are now Paritioned (#308)

[The Cosmos service now supports partition keys on all containers, including those that were previously created as fixed containers](https://docs.microsoft.com/en-us/azure/cosmos-db/migrate-containers-partitioned-to-nonpartitioned). The v3 SDK updates to the latest API version that implements this change, but it is not breaking. If you do not supply a partition key for operations, we will default to a system key that works with all your existing containers and documents.

#### `upsert` removed for Stored Procedures (#356)

Previously `upsert` was allowed for non-partitioned collections, but with the API version update, all collections are partitioned so we removed it entirely.

#### Item reads will not throw on 404 (#343, Community Request)

```js
const container = client.database(dbId).container(containerId);

// v2
try {
  container.items.read(id, undefined);
} catch (e) {
  if (e.code === 404) {
    console.log("item not found");
  }
}

// v3
const { result: item } = container.items.read(id, undefined);
if (item === undefined) {
  console.log("item not found");
}
```

#### Default Multi Region Write (#335)

The SDK will now write to multiple regions by default if your database configuration supports it. This was previously opt-in behavior.

#### Proper Error Objects (#334, Community Request)

Failed requests now throw proper `Error` or subclasses of `Error`. Previously they threw plain JS objects.

### New Features

#### User Cancellable Requests (#263, Community Request)

The move to `fetch` internally allows us to use the browser `AbortController` API to support user cancellable operations. In the case of operations where multiple requests are potentially in progress (like cross partition queries), all requests for the operation will be canceled. Modern browser users will already have `AbortController`. Node.js users will need to use a [polyfill library](https://www.npmjs.com/package/node-abort-controller)

```js
const controller = new AbortController();
const { result: item } = await items.query("SELECT * from c", { abortSignal: controller.signal });
controller.abort();
```

#### Set throughput as part of db/container create operation (#220)

```js
const { database } = client.databases.create({ id: "my-database", throughput: 10000 });
database.containers.create({ id: "my-container", throughput: 10000 });
```

#### @azure/cosmos-sign (#213)

Header token generation was split out into a new library, @azure/cosmos-sign. Anyone calling the Cosmos REST API directly can use this to sign headers using the same code we call inside @azure/cosmos.

#### UUID for generated IDs (#355)

v2 had custom code to generate item IDs. We have switched to the well known and maintained community library `uuid`.

#### Connection Strings (#350, Community Request)

It is now possible to pass a connection string copied from the Azure portal:

```js
const client = new CosmosClient(
  "AccountEndpoint=https://test-account.documents.azure.com:443/;AccountKey=<KEY HERE>;"
);
```

#### Add DISTINCT and LIMIT/OFFSET queries (#306)

```js
const { results } = await items.query("SELECT DISTINCT VALUE r.name FROM ROOT").fetchAll();
const { results } = await items.query("SELECT * FROM root r OFFSET 1 LIMIT 2").fetchAll();
```

### Improved Browser Experience

While it was possible to use the v2 SDK in the browser it was not an ideal experience. You needed to polyfill several node.js built-in libraries and use a bundler like Webpack or Parcel. The v3 SDK makes the out of the box experience much better for browser users.

- Replace request internals with `fetch` (#245)
- Remove usage of Buffer (#330)
- Remove node builtin usage in favor of universal packages/APIs (#328)
- Switch to node-abort-controller (#294)

### Bug Fixes

- Fix offer read and bring back offer tests (#224)
- Fix EnableEndpointDiscovery (#207)
- Fix missing RUs on paginated results (#360)
- Expand SQL query parameter type (#346)
- Add ttl to ItemDefinition (#341)
- Fix CP query metrics (#311)
- Add activityId to FeedResponse (#293)
- Switch \_ts type from string to number (#252)(#295)
- Fix Request Charge Aggregation (#289)
- Allow blank string partition keys (#277)
- Add string to conflict query type (#237)
- Add uniqueKeyPolicy to container (#234)

### Engineering Systems

Not always the most visible changes, but they help our team ship better code, faster.

- Use rollup for production builds (#104)
- Update to Typescript 3.5 (#327)
- Convert to TS project references. Extract test folder (#270)
- Enable noUnusedLocals and noUnusedParameters (#275)
- Azure Pipelines YAML for CI builds (#298)

## 2.0.1

- Fix type issue (See #141)

## 2.0.0

- Multi-region Write support
- Shared resource response properties added to responses
- Changed query to allow for customer types for all Resource types
- Modified items.query to allow for cross partition query
- Misc fixes/doc updates

## 2.0.0-3

- New object model
- Updated documentation and samples
- Improved types
- Added `createdIfNotExists` for database and container
- Added prettier
- Added public CI (Travis and VSTS)

## 2.0.0-0

- Added Promise support
- Added token handler option for auth
- typings now emitted from source (moved source to TypeScript)
- Added CosmosClient (DocumentClient now considered deprecated)

## 1.14.4

- npm documentation fixed.

## 1.14.3

- Added support for default retries on connection issues.
- Added support to read collection change feed.
- Fixed session consistency bug that intermittently caused "read session not available".
- Added support for query metrics.
- Modified http Agent's maximum number of connections.

## 1.14.2

- Updated documentation to use Azure Cosmos DB.
- Added Support for proxyUrl setting in ConnectionPolicy.

## 1.14.1

- Minor fix for case sensitive file systems.

## 1.14.0

- Adds support for Session Consistency.
- This SDK version requires the latest version of Azure Cosmos DB Emulator available for download from https://aka.ms/cosmosdb-emulator.

## 1.13.0

- Splitproofed cross partition queries.
- Adds supports for resource link with leading and trailing slashes (and corresponding tests).

## 1.12.2

- npm documentation fixed.

## 1.12.1

- Fixed bug in executeStoredProcedure where documents involved had special unicode characters (LS, PS).
- Fixed bug in handling documents with unicode characters in partition key.
- Fixed support for creating collection with name media (github #114).
- Fixed support for permission authorization token (github #178).

## 1.12.0

- Added support for Request Unit per Minute (RU/m) feature.
- Added support for a new consistency level called ConsistentPrefix.
- Added support for UriFactory.
- Fixed the unicode support bug (github #171)

## 1.11.0

- Added the support for aggregation queries (COUNT, MIN, MAX, SUM, and AVG).
- Added the option for controlling degree of parallelism for cross partition queries.
- Added the option for disabling SSL verification when running against Emulator.
- Lowered minimum throughput on partitioned collections from 10,100 RU/s to 2500 RU/s.
- Fixed the continuation token bug for single partition collection (github #107).
- Fixed the executeStoredProcedure bug in handling 0 as single param (github #155).

## 1.10.2

- Fixed user-agent header to include the SDK version.
- Minor code cleanup.

## 1.10.1

- Disabling SSL verification when using the SDK to target the emulator(hostname=localhost).
- Added support for enabling script logging during stored procedure execution.

## 1.10.0

- Added support for cross partition parallel queries.
- Added support for TOP/ORDER BY queries for partitioned collections.

## 1.9.0

- Added retry policy support for throttled requests. (Throttled requests receive a request rate too large exception, error code 429.)
  By default, DocumentClient retries nine times for each request when error code 429 is encountered, honoring the retryAfter time in the response header.
  A fixed retry interval time can now be set as part of the RetryOptions property on the ConnectionPolicy object if you want to ignore the retryAfter time returned by server between the retries.
  DocumentClient now waits for a maximum of 30 seconds for each request that is being throttled (irrespective of retry count) and returns the response with error code 429.
  This time can also be overriden in the RetryOptions property on ConnectionPolicy object.

- DocumentClient now returns x-ms-throttle-retry-count and x-ms-throttle-retry-wait-time-ms as the response headers in every request to denote the throttle retry count and the cummulative time the request waited between the retries.

- The RetryOptions class was added, exposing the RetryOptions property on the ConnectionPolicy class that can be used to override some of the default retry options.

## 1.8.0

- Added the support for geo-replicated database accounts.

## 1.7.0

- Added the support for TimeToLive(TTL) feature for documents.

## 1.6.0

- Added support for Partitioned Collections.
- Added support for new offer types.

## 1.5.6

- Fixed RangePartitionResolver.resolveForRead bug where it was not returning links due to a bad concat of results.
- Move compareFunction from Range class to RangePartitionResolver class.

## 1.5.5

- Fixed hashParitionResolver resolveForRead(): When no partition key supplied was throwing exception, instead of returning a list of all registered links.

## 1.5.4

- Dedicated HTTPS Agent: Avoid modifying the global. Use a dedicated agent for all of the lib’s requests.

## 1.5.3

- Properly handle dashes in the mediaIds.

## 1.5.2

- Fix memory leak.

## 1.5.1

- Renamed "Hash" directory to "hash".

## 1.5.0

- Added client-side sharding support.
- Added hash partition resolver implementation.
- Added range partitoin resolver implementation.

## 1.4.0

- Implement Upsert. New upsertXXX methods on documentClient.

## 1.3.0

- Skipped to bring version numbers in alignment with other SDKs.

## 1.2.2

- Split Q promises wrapper to new repository.
- Update to package file for npm registry.

## 1.2.1

- Implements ID Based Routing.
- Fixes Issue [#49](https://github.com/Azure/azure-documentdb-node/issues/49) - current property conflicts with method current().

## 1.2.0

- Added support for GeoSpatial index.
- Validates id property for all resources. Ids for resources cannot contain ?, /, #, \\, characters or end with a space.
- Adds new header "index transformation progress" to ResourceResponse.

## 1.1.0

- Implements V2 indexing policy.

## 1.0.3

- Issue [#40](https://github.com/Azure/azure-documentdb-node/issues/40) - Implemented eslint and grunt configurations in the core and promise SDK.

## 1.0.2

- Issue [#45](https://github.com/Azure/azure-documentdb-node/issues/45) - Promises wrapper does not include header with error.

## 1.0.1

- Implemented ability to query for conflicts by adding readConflicts, readConflictAsync, queryConflicts.
- Updated API documentation.
- Issue [#41](https://github.com/Azure/azure-documentdb-node/issues/41) - client.createDocumentAsync error.

Microsoft will provide notification at least **12 months** in advance of retiring an SDK in order to smooth the transition to a newer/supported version.

New features, functionality, and optimizations are only added to the current SDK. So it's recommended that you always upgrade to the latest SDK version as early as possible.

Any request to Cosmos DB using a retired SDK will be rejected by the service.

> [!WARNING]
> All versions **1.x** of the Cosmos JavaScript SDK for SQL API will be retired on **August 30, 2020**.
>
> <br/>

| Version                  | Release Date       | Retirement Date |
| ------------------------ | ------------------ | --------------- |
| [3.4.2](#3.4.2)          | November 7, 2019   | ---             |
| [3.4.1](#3.4.1)          | November 5, 2019   | ---             |
| [3.4.0](#3.4.0)          | October 28, 2019   | ---             |
| [3.3.6](#3.3.6)          | October 14, 2019   | ---             |
| [3.3.5](#3.3.5)          | October 14, 2019   | ---             |
| [3.3.4](#3.3.4)          | October 14, 2019   | ---             |
| [3.3.3](#3.3.3)          | October 3, 2019    | ---             |
| [3.3.2](#3.3.2)          | October 3, 2019    | ---             |
| [3.3.1](#3.3.1)          | October 1, 2019    | ---             |
| [3.3.0](#3.3.0)          | September 24, 2019 | ---             |
| [3.2.0](#3.2.0)          | August 26, 2019    | ---             |
| [3.1.1](#3.1.1)          | August 7, 2019     | ---             |
| [3.1.0](#3.1.0)          | July 26, 2019      | ---             |
| [3.0.4](#3.0.4)          | July 22, 2019      | ---             |
| [3.0.3](#3.0.3)          | July 17, 2019      | ---             |
| [3.0.2](#3.0.2)          | July 9, 2019       | ---             |
| [3.0.0](#3.0.0)          | June 28, 2019      | ---             |
| [2.1.5](#2.1.5)          | March 20, 2019     | ---             |
| [2.1.4](#2.1.4)          | March 15, 2019     | ---             |
| [2.1.3](#2.1.3)          | March 8, 2019      | ---             |
| [2.1.2](#2.1.2)          | January 28, 2019   | ---             |
| [2.1.1](#2.1.1)          | December 5, 2018   | ---             |
| [2.1.0](#2.1.0)          | December 4, 2018   | ---             |
| [2.0.5](#2.0.5)          | November 7, 2018   | ---             |
| [2.0.4](#2.0.4)          | October 30, 2018   | ---             |
| [2.0.3](#2.0.3)          | October 30, 2018   | ---             |
| [2.0.2](#2.0.2)          | October 10, 2018   | ---             |
| [2.0.1](#2.0.1)          | September 25, 2018 | ---             |
| [2.0.0](#2.0.0)          | September 24, 2018 | ---             |
| [2.0.0-3 (RC)](#2.0.0-3) | August 2, 2018     | ---             |
| [1.14.4](#1.14.4)        | May 03, 2018       | August 30, 2020 |
| [1.14.3](#1.14.3)        | May 03, 2018       | August 30, 2020 |
| [1.14.2](#1.14.2)        | December 21, 2017  | August 30, 2020 |
| [1.14.1](#1.14.1)        | November 10, 2017  | August 30, 2020 |
| [1.14.0](#1.14.0)        | November 9, 2017   | August 30, 2020 |
| [1.13.0](#1.13.0)        | October 11, 2017   | August 30, 2020 |
| [1.12.2](#1.12.2)        | August 10, 2017    | August 30, 2020 |
| [1.12.1](#1.12.1)        | August 10, 2017    | August 30, 2020 |
| [1.12.0](#1.12.0)        | May 10, 2017       | August 30, 2020 |
| [1.11.0](#1.11.0)        | March 16, 2017     | August 30, 2020 |
| [1.10.2](#1.10.2)        | January 27, 2017   | August 30, 2020 |
| [1.10.1](#1.10.1)        | December 22, 2016  | August 30, 2020 |
| [1.10.0](#1.10.0)        | October 03, 2016   | August 30, 2020 |
| [1.9.0](#1.9.0)          | July 07, 2016      | August 30, 2020 |
| [1.8.0](#1.8.0)          | June 14, 2016      | August 30, 2020 |
| [1.7.0](#1.7.0)          | April 26, 2016     | August 30, 2020 |
| [1.6.0](#1.6.0)          | March 29, 2016     | August 30, 2020 |
| [1.5.6](#1.5.6)          | March 08, 2016     | August 30, 2020 |
| [1.5.5](#1.5.5)          | February 02, 2016  | August 30, 2020 |
| [1.5.4](#1.5.4)          | February 01, 2016  | August 30, 2020 |
| [1.5.2](#1.5.2)          | January 26, 2016   | August 30, 2020 |
| [1.5.2](#1.5.2)          | January 22, 2016   | August 30, 2020 |
| [1.5.1](#1.5.1)          | January 4, 2016    | August 30, 2020 |
| [1.5.0](#1.5.0)          | December 31, 2015  | August 30, 2020 |
| [1.4.0](#1.4.0)          | October 06, 2015   | August 30, 2020 |
| [1.3.0](#1.3.0)          | October 06, 2015   | August 30, 2020 |
| [1.2.2](#1.2.2)          | September 10, 2015 | August 30, 2020 |
| [1.2.1](#1.2.1)          | August 15, 2015    | August 30, 2020 |
| [1.2.0](#1.2.0)          | August 05, 2015    | August 30, 2020 |
| [1.1.0](#1.1.0)          | July 09, 2015      | August 30, 2020 |
| [1.0.3](#1.0.3)          | June 04, 2015      | August 30, 2020 |
| [1.0.2](#1.0.2)          | May 23, 2015       | August 30, 2020 |
| [1.0.1](#1.0.1)          | May 15, 2015       | August 30, 2020 |
| [1.0.0](#1.0.0)          | April 08, 2015     | August 30, 2020 |