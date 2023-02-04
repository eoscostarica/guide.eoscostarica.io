---
id: demux-pattern
title: Demux architecture pattern
sidebar_label: Demux Pattern
description: Description of demux pattern
keywords: [demux, backend architectural pattern, demux pattern, demux architecture pattern, EOSIO, EOS Costa Rica]
---

import useBaseUrl from '@docusaurus/useBaseUrl';

## Demux pattern

[Demux](https://medium.com/eosio/introducing-demux-deterministic-databases-off-chain-verified-by-the-eosio-blockchain-bd860c49b017) is an architectural pattern for backend infrastructure based on [Flux Architecture](https://facebook.github.io/flux/docs/in-depth-overview.html) and [Redux](https://github.com/reduxjs/redux/).

It’s used for applications built on the EOSIO blockchain to sourcing to event blockchain events to update queryable datastores and trigger deterministically side effects on the blockchain or external services.

Likewise, the pattern in question was born considering the following:

- Separate the concern of how the state exists on the blockchain and how the client frontend queries it.
- The client frontend is not the only one responsible for determining the derived, reduced, and/or accumulated state.
- The capacity for blockchain events to trigger new transactions, as well as other side effects outside of the blockchain.
- The blockchain is the single source of truth for all application state. 

In general, demux allows you to get the benefits of blockchain and traditional databases, for one hand, properties such as immutability, traceability, and trust of blockchain, and on the other hand the facility, velocity, and flexibility to query databases. It’s because how to make complex queries on the blockchain has high costs and is taken advantage of thanks to different optimizations of databases the number of resources needed is lower.

## Separated Persistence Layer

The storage of data in an indexed state on the blockchain could be useful for the next three reasons:

- The decentralized consensus of the computational results.
- The use of state within other blockchain computations.
- The retrieve of the state for use in client interfaces.

However, when more complex frontends are built some problems start to appear when directly querying the blockchain, is because of this that demux addresses the scaling problem by off-loading queries to any persistence layer that is defined according to the needs, for this reason, the data are preprocessed and indexed in a traditional database.

This avoids adding more endpoints nodes when you need to scale the load of queries and also omits having to perform an excessive number of queries to the blockchain and process the extremely costly data. The previous is useful when complex applications need to retrieve data from the blockchain.

Thus, as the blockchain events are produced, the chosen database is updated by update functions (`Updaters`) that deterministically process the `Actions` object array. Then, the database is kept updated concerning the blockchain state and the DAPP frontend queries the database through the appropriate `API`.

## Single Source of Truth

- If the database is deleted or lost it can be recovered by reproducing the actions of the blockchain.
- If the application is open-source and the blockchain is public, the state of the application could be audited. 
- It’s not necessary to keep multiple ways of updating the state.

## Side Effects

Since you have a system for acting on specific blockchain events deterministically, you can use this system to handle non-deterministic events as well. 

These effect functions (`Effects`) work almost the same as update functions, except that they run asynchronously, do not run during replays, and modification of the deterministic data store is out of bounds. 

Some examples of side effects are:

- Signing and broadcasting a transaction.
- Sending an email.
- Begin a traditional fiat payment.

## Data Flow

Like [Flux](https://facebook.github.io/flux/docs/in-depth-overview.html#structure-and-data-flow) and [Redux](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#redux-terms-and-concepts), the data flow in demux is unidirectional. Starting from the DAPP frontend, it can write to the data string through `Transactions`, which will be read by an observer (`Action Watcher`) to notify that they should be handled which can cause side effects, after that through the update functions the event will be recorded in the database which will be queried through an `API` by the DAPP.

### Demux Data Flow Diagram

<div style={{  textAlign: "center" }}>
    <img alt="Demux Data Flow Diagram" title="Demux Patern Diagram" 
    src={ useBaseUrl( '/img/diagrams/demux-pattern.webp' )} loading="lazy"/> 
</div>

### Sequence of Demux Data Flow

1. The client sends a transaction to the blockchain.
1. The `Action Watcher` invokes `Action Reader` to check for new blocks.
1. The `Action Reader` sees transactions in the new block and parses actions.
1. The `Action Watcher` sends actions to `Action Handler`.
1. The `Action Handler` processes actions through `Updaters` and `Effects`.
1. `Actions` run their corresponding `Updaters`, updating the state of the Datastore.
1. `Actions` run their corresponding `Effects`, triggering external events.
1. The client queries `API` for updated data.

## Implementation at EOS Costa Rica

We use our solution inspired by the demux architectural pattern, which use the nodeos State History Plugin as `Action Watcher`.

### Open-source projects

Some of our open source projects implemented the solution based on the demux pattern:

- [EOS Rate](https://github.com/eoscostarica/eos-rate)
- [Antelope Tools](https://github.com/edenia/antelope-tools)
- [MyvoteEOS](https://github.com/eoscostarica/MyvoteEOS-proxy)
- [EOSIO Spend Explorer](https://github.com/eoscostarica/eosio-spend-explorer)
