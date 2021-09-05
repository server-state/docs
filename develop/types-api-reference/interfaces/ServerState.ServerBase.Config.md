---
id: "ServerState.ServerBase.Config"
title: "Interface: Config"
sidebar_label: "Config"
custom_edit_url: null
---

[ServerState](../namespaces/ServerState.md).[ServerBase](../namespaces/ServerState.ServerBase.md).Config

The config that gets passed to the server-base constructor

## Properties

### logFilePath

• `Optional` **logFilePath**: `string`

Path to the file in which messages should get logged (in case `logToFile` is `true`).

**`default`** './server-state.log'

#### Defined in

index.d.ts:146

___

### logToConsole

• `Optional` **logToConsole**: `boolean`

If true, messages will get logged via stdout and stderr

**`default`** true

#### Defined in

index.d.ts:136

___

### logToFile

• `Optional` **logToFile**: `boolean`

If `true`, messages will get logged to the file specified as `logFilePath`.

**`default`** false

#### Defined in

index.d.ts:141

## Methods

### isAuthorized

▸ `Optional` **isAuthorized**(`req`, `authorizedGroups`): `boolean`

A callback that checks whether the current user (of the request) is authorized to access the resource

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `req` | `Request`<`ParamsDictionary`, `any`, `any`, `ParsedQs`, `Record`<`string`, `any`\>\> | The HTTP request to evaluate tokens or other forms of authentication |
| `authorizedGroups` | `string`[] | The groups that have the authorization to access the resource |

#### Returns

`boolean`

Is authorized? In other words: Is there an intersection between the groups the user belongs to and `authorizedGroups`?

#### Defined in

index.d.ts:153
