---
title: Macro Blocks
description: How to create and share Macro Blocks
sidebar:
    order: 3
---

A Macro Block is a node you can create yourself from any set of nodes.

It allows you to abstract complex logic into a selected subset of parameters.

Macro blocks are stored in your browser and can furthermore be stored remotely and shared with other users. They are also shared with Selenite Simple, even if only stored locally.

## Creating a macro block
First mark the inputs and outputs you want to expose by rightclicking them.
Then select the nodes you want to abstract in a macro block, or select none if you want to include all blocks.

Finally, you can enter the final step of the creation of a Macro block with the 'Create macro block' button. It will open a modal in which you can change properties like description or inouts / outputs names.

### Properties
The following properties are available when creating or updating a macro block.

#### Name
#### Description 
#### Tags
#### Public
#### Favorite 
#### Path

## Updating a macro block
Updating a macro block is accomplished with a process very similar to creation. Two macro blocks are considered the same when they share the same path, name and author. Therefore, if you want to update a macro block, make sure those properties are identical.

## Sharing macro blocks
Macroblocs can be shared between users. This unleashes the potential to create a substantial library of components to share with your team or company.

### Data sources
Data sources are storages where the macro blocks can be stored. At the moment, these data sources are supported:

#### GitHub
Macro blocks can be stored in a GitHub repository.

Note that an access token is required to access private repositories or write changes to repositories.

We recommend to generate a Fine Grained Access Token which can only access and write to the repositories you want to use for macro block storage.

##### Fine grained access token (FAT)
A Fine Grained Access Tokens is a token with limited access rights. It makes sure Selenite can only do what you want it to do (ie. write macro blocks).

The access token you provide to Selenite will be kept safely in the browser, it won't be sent to a remote server. 
