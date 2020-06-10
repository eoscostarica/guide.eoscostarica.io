---
id: accounts-and-permissions
title: Accounts and Permissions
sidebar_label: Accounts and Permissions
---

## Accounts

An **account** on EOSIO is a legible name for humans that get stored on the blockchain. An account can belong to an individual or group of individuals depending on the permissions configuration. An account is required in order to execute any transaction on the blockchain.

The account name must comply with certain requirements: characters from `a` to `z` in lower case, numbers from `1` to `5` and have 12 characters length. E. g. `eosioaccount`

Read more on [EOSIO accounts](https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions#2-accounts)

## Account Permissions

EOSIO allows to create custom hierarchical permissions that stem from the owner permission. A custom permission is basically a key that can only perform the actions you allow it to perform.

>**For example:** Any account can create a custom permission with its unique key pair to solely interact with a single contract.

In this way EOSIO offers state of the art permissioning capabilities with huge flexibility to configure simple or complex built in to the base protocol.

Account permissions also strengthen security in case someone who is unauthorized gets a hold of a private key, all they can ever do is the actions that key has been limited to execute.

## Authorizations

Any given account can define a mapping between any of its named permissions and a smart contract or action within that contract. This allows finer control over action authorizations which makes it very easy for accounts belonging to actors with different roles within an organization reflect the organizational structure on the blockchain.

In other words each account's permission can be linked to an authority table used to determine whether a given action authorization can be satisfied

To get more information about these concepts, see [accounts and permissions documentation](https://developers.eos.io/welcome/latest/protocol/accounts_and_permissions).

## Authenticators (Wallets)

The wallets are clients that store private keys associated with the permissions of one or more accounts. Ideally, a wallet has a locked state (encrypted) and unlock (unencrypted) that is protected by a high entropy password.

### Transit Wallet Access Layer

This library is a small abstraction layer on top of `eosjs` which aims to assist EOS dApp (decentralized app) developers with wallet communication (signature verification and acceptance) by providing a simple and intuitive API.

Instead of focusing on supporting specific signature providers one by one, developers can support every one that has built a Transit plugin, allowing the user to use their signature provider of choice. This way, the best UX for signature providers wins and the developers can focus on building their dApp instead of setting up `eosjs` and wallet connections.

Please see the "Quick Start" and thorough guide in the `eos-transit` [package docs](https://github.com/eosnewyork/eos-transit)

### Universal Authenticator Library

A library exists that allows apps to easily use different auth providers. App Developers need to support many authentication providers (wallets) in order to maximize user reach and permit user choice.

The [Universal Authenticator Library (UAL)](https://github.com/EOSIO/universal-authenticator-library) achieves this goal by abstracting the internal business logic of many authentication providers and exposing a single universal API.

### Available Authenticators:

* [UAL for Scatter](https://github.com/EOSIO/ual-scatter)
* [UAL for Lynx](https://github.com/EOSIO/ual-lynx)
* [UAL for Ledger](https://github.com/EOSIO/ual-ledger)
* [UAL for Token Pocket](https://github.com/EOSIO/ual-token-pocket)
* [UAL for MEET.ONE](https://github.com/meet-one/ual-meetone)
* [UAL for Anchor](https://github.com/greymass/ual-anchor)

### KEOSD

In the EOSIO's distribution comes included a CLI client called `cleos` that interacts with lite client called `keosd` which provides a secure wallet service and API endpoint for applications that require back-end integration with a signature provider.
