---
id: "ServerState.DataFormats"
title: "Namespace: DataFormats"
sidebar_label: "DataFormats"
custom_edit_url: null
---

[ServerState](ServerState.md).DataFormats

Standard data formats

**`see`** https://server-state.github.io/specs/#/arch/data-formats

## Type aliases

### HierarchicalData

Ƭ **HierarchicalData**: `Object`

Hierarchical weighted data describes a tree structure, where nodes contain n child nodes and where all nodes have the size of the sum of the sum of all child nodes, with leaf nodes having an explicit size.

Suggested visualizations: Lists, tables, treemaps, sunburst charts

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `children?` | [`HierarchicalData`](ServerState.DataFormats.md#hierarchicaldata)[] | The node's child nodes |
| `color?` | `string` \| `number` | The color of the point. This can either be a string containing the HEX value of a color or a number marking the index in an arbitrary color scheme. |
| `size?` | `number` | The leaf node's size. Can get used for leaf nodes, i.e., where `children.length === 0`. |
| `title?` | `string` | A label of the point. Can, e.g., get shown on mouse hover above a datapoint in a visualization |

#### Defined in

index.d.ts:65

___

### KeyValuePairData

Ƭ **KeyValuePairData**: `Object`

A series of key-value-pair string | number | boolean values, where keys are unique strings

 Please note that `true`/`false` should get mapped to _yes_/_no_ in visualizations.

Suggested visualizations: Table, List

#### Index signature

▪ [key: `string`]: `string` \| `number` \| `boolean`

#### Defined in

index.d.ts:119

___

### Markdown

Ƭ **Markdown**: `string`

Raw Markdown that gets generated in the SM and rendered in the client

Suggested visualizations: Markdown renderer, Raw text renderer for environments with no Rich Text support

#### Defined in

index.d.ts:88

___

### TableData

Ƭ **TableData**: `Object`

Data that's "display-able" in a table format.

Suggested visualizations: Table, Data Table, Selective charts (mapping numerical fields to x and y in line data)

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `_fields` | `string`[] | an array of strings containing the fields (columns) each rows has |
| `rows` | { [_field: string]: `string` \| `number` \| `boolean`;  }[] | an array of objects that include `string | number | boolean` values for the keys defined in `_fields` |

#### Defined in

index.d.ts:100

___

### Text

Ƭ **Text**: `string`

Raw text that gets generated in the SM and rendered in the client

Suggested visualizations: Plain text output

#### Defined in

index.d.ts:94

___

### XYData

Ƭ **XYData**: [`XYDataPoint`](ServerState.DataFormats.md#xydatapoint)[]

We call numeric data containing 2D-points that can get plotted in a graph XYData. Below, you can find its specifications.

#### Defined in

index.d.ts:59

___

### XYDataPoint

Ƭ **XYDataPoint**: `Object`

A datapoint with an X- and a Y-coordinate. Can have a color and possibly a label (`title`).

Suggested visualizations: Point in a scatter plot, point on a map

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `color?` | `string` \| `number` | The color of the point. This can either be a string containing the HEX value of a color or a number marking the index in an arbitrary color scheme. |
| `title?` | `string` | A label of the point. Can, e.g., get shown on mouse hover above a datapoint in a visualization |
| `x` | `number` | The X coordinate of the point |
| `y` | `number` | The Y coordinate of the point |

#### Defined in

index.d.ts:38
