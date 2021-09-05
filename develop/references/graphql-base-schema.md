---
title: GraphQL Base Schema
description:
  The base GraphQL schema that all Server State Servers have to comply with
sidebar_position: 1
---

Server State makes heavy use of an extensible GraphQL API.

While the complete schema depends on the extensions installed by the user, the
following schema provides the base for every such schema. It can, thus, be
trusted to exist during plugin/extension development.

_Generated using
[`graphql-markdown`](https://github.com/exogen/graphql-markdown)_

<!-- Auto-generated! -->

<!-- START graphql-markdown -->

## Query

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>serverState</strong></td>
<td valign="top"><a href="#serverstate">ServerState</a>!</td>
<td>

The APIs for inspecting the server state.

This is the core of the Server State ecosystem and what most plugins will
interact with.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>me</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

The currently authenticated user, if any

</td>
</tr>
</tbody>
</table>

## Objects

### ServerState

The ServerState type that represents every query about the server state.

Extensions may extend this type with a property identical to their own ID to add
additional "query-able" parameters.

For example (with a plugin id of `ABCDEF`):

```graphql
extend type ServerState {
	ABCDEF: ABCDEF_State
}

type ABCDEF_State {
	randomNumber: Int
}
```

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>timestamp</strong></td>
<td valign="top"><a href="#int">Int</a></td>
<td>

The timestamp of the query's execution

</td>
</tr>
</tbody>
</table>

### User

An object representing a single user

<table>
<thead>
<tr>
<th align="left">Field</th>
<th align="right">Argument</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The user's unique ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The user's email address

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#userrole">UserRole</a></td>
<td>

The user's role within the system

</td>
</tr>
</tbody>
</table>

## Enums

### UserRole

A user's role. This defines the user's privileges within the system.

<table>
<thead>
<th align="left">Value</th>
<th align="left">Description</th>
</thead>
<tbody>
<tr>
<td valign="top"><strong>admin</strong></td>
<td>

An admin user with additional privileges (like managing other user accounts and
installing extensions)

</td>
</tr>
<tr>
<td valign="top"><strong>user</strong></td>
<td>

A "normal" user without any special privileges

</td>
</tr>
</tbody>
</table>

## Scalars

### Boolean

The `Boolean` scalar type represents `true` or `false`.

### ID

The `ID` scalar type represents a unique identifier, often used to refetch an
object or as key for a cache. The ID type appears in a JSON response as a
String; however, it is not intended to be human-readable. When expected as an
input type, any string (such as `"4"`) or integer (such as `4`) input value will
be accepted as an ID.

### Int

The `Int` scalar type represents non-fractional signed whole numeric values. Int
can represent values between -(2^31) and 2^31 - 1.

### JSON

A `JSONSerializable` value represented as its serialized JSON string.

### String

The `String` scalar type represents textual data, represented as UTF-8 character
sequences. The String type is most often used by GraphQL to represent free-form
human-readable text.

<!-- END graphql-markdown -->
