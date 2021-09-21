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
<tr>
<td colspan="2" valign="top"><strong>users</strong></td>
<td valign="top">[<a href="#user">User</a>!]!</td>
<td>

List of all users.

**Accessible for admins only.**

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userById</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Get user details based on their user id.

**Accessible for admins only.**

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The user's ID

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>userByEmail</strong></td>
<td valign="top"><a href="#user">User</a></td>
<td>

Get user details based on their email address.

**Accessible for admins only.**

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The user's email address

</td>
</tr>
</tbody>
</table>

## Mutation

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
<td colspan="2" valign="top"><strong>login</strong></td>
<td valign="top"><a href="#loginresponse">LoginResponse</a>!</td>
<td>

A mutation to login using email and password and get a JWT token for
authentication.

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">email</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">password</td>
<td valign="top"><a href="#string">String</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>addUser</strong></td>
<td valign="top"><a href="#adduserresponse">AddUserResponse</a>!</td>
<td>

Adds a new user.

**Accessible for admins only.**

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">user</td>
<td valign="top"><a href="#adduserinput">AddUserInput</a>!</td>
<td></td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>removeUser</strong></td>
<td valign="top"><a href="#removeuserresponse">RemoveUserResponse</a>!</td>
<td>

Removes a user.

**Accessible for admins only.**

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">id</td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The user's user id

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>editUser</strong></td>
<td valign="top"><a href="#edituserresponse">EditUserResponse</a>!</td>
<td>

Edits an existing user.

Specify the user you want to edit in the `userEdits` input's `id` field.

**Accessible for admins only.**

</td>
</tr>
<tr>
<td colspan="2" align="right" valign="top">user</td>
<td valign="top"><a href="#edituserinput">EditUserInput</a>!</td>
<td></td>
</tr>
</tbody>
</table>

## Objects

### AddUserResponse

The data returned by the `addUser` mutation.

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
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td>

The newly created user.

</td>
</tr>
</tbody>
</table>

### EditUserResponse

The data returned by the `editUser` mutation.

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
<td colspan="2" valign="top"><strong>user</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td>

The newly saved user details.

</td>
</tr>
</tbody>
</table>

### LoginResponse

The data returned by the `login` mutation.

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
<td colspan="2" valign="top"><strong>token</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

A JWT token for authentication.

Use the header `Authorization: Bearer [token]` in later API interactions.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>me</strong></td>
<td valign="top"><a href="#user">User</a>!</td>
<td>

Details about the authenticated user.

</td>
</tr>
</tbody>
</table>

### RemoveUserResponse

The data returned by the `removeUser` mutation.

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
<td colspan="2" valign="top"><strong>success</strong></td>
<td valign="top"><a href="#boolean">Boolean</a>!</td>
<td>

`true` if deletion was successful, `false` otherwise.

</td>
</tr>
</tbody>
</table>

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
<td valign="top"><a href="#string">String</a></td>
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

## Inputs

### AddUserInput

Input for the `addUser` mutation

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a>!</td>
<td>

The user's email address.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>password</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

The new user's password.

If not specified, the new user won't be able to login until the password gets
reset.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#userrole">UserRole</a></td>
<td>

The new user's role. Defaults to `user`.

</td>
</tr>
</tbody>
</table>

### EditUserInput

Input for the `editUser` mutation

<table>
<thead>
<tr>
<th colspan="2" align="left">Field</th>
<th align="left">Type</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td colspan="2" valign="top"><strong>id</strong></td>
<td valign="top"><a href="#id">ID</a>!</td>
<td>

The (existing !) user id.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>email</strong></td>
<td valign="top"><a href="#string">String</a></td>
<td>

A new email address, if applicable.

</td>
</tr>
<tr>
<td colspan="2" valign="top"><strong>role</strong></td>
<td valign="top"><a href="#userrole">UserRole</a></td>
<td>

A new user role, if applicable.

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

### JSON

A `JSONSerializable` value represented as its serialized JSON string.

### String

The `String` scalar type represents textual data, represented as UTF-8 character
sequences. The String type is most often used by GraphQL to represent free-form
human-readable text.

<!-- END graphql-markdown -->
