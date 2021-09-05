---
id: "ServerState"
title: "Namespace: ServerState"
sidebar_label: "ServerState"
sidebar_position: 0
custom_edit_url: null
---

Common types for the different repositories of @server-state.

**`see`** https://github.com/server-state

**`author`** Pablo Klaschka, Server State

**`copyright`** 2020 by Server State

**`version`** 1.0.0

## Namespaces

- [DataFormats](ServerState.DataFormats.md)
- [ServerBase](ServerState.ServerBase.md)

## Type aliases

### JSONSerializable

Ƭ **JSONSerializable**: `number` \| `string` \| `boolean` \| { [key: string]: [`JSONSerializable`](ServerState.md#jsonserializable);  } \| [`JSONSerializable`](ServerState.md#jsonserializable)[]

A JSON-serializable type that can get sent back as JSON via HTTP/-S

#### Defined in

index.d.ts:13

___

### SMF

Ƭ **SMF**: [`SMFProps`](ServerState.md#smfprops) & [`SMFFunction`](ServerState.md#smffunction)

A server module function.

**`see`** https://server-state.github.io/specs/#/terminology/server-module-function

#### Defined in

index.d.ts:27

___

### SMFFunction

Ƭ **SMFFunction**: (`args`: `any`) => [`JSONSerializable`](ServerState.md#jsonserializable) \| `Promise`<[`JSONSerializable`](ServerState.md#jsonserializable)\>

#### Type declaration

▸ (`args`): [`JSONSerializable`](ServerState.md#jsonserializable) \| `Promise`<[`JSONSerializable`](ServerState.md#jsonserializable)\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `args` | `any` |

##### Returns

[`JSONSerializable`](ServerState.md#jsonserializable) \| `Promise`<[`JSONSerializable`](ServerState.md#jsonserializable)\>

#### Defined in

index.d.ts:22

___

### SMFProps

Ƭ **SMFProps**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `sampleData?` | [`JSONSerializable`](ServerState.md#jsonserializable)[] | Samples of possible return values of the SMF |

#### Defined in

index.d.ts:16
