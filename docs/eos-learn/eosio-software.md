---
id: eosio-software
title: EOSIO Software
sidebar_label: EOSIO Software
---

EOSIO is a free, open-source blockchain software protocol that provides developers and entrepreneurs with a platform on which to build, deploy and run high-performing decentralized applications.

The EOSIO software introduces a new blockchain architecture designed to enable vertical and horizontal scaling of decentralized applications. This is achieved by creating an operating system-like construct upon which applications can be built. The software provides accounts, authentication, databases, asynchronous communication and the scheduling of applications across many CPU cores or clusters. The resulting technology is a blockchain architecture that may ultimately scale to millions of transactions per second, eliminates user fees, and allows for quick and easy deployment and maintenance of decentralized applications, in the context of a governed blockchain.

## Characteristics

- Free Rate Limited Transactions.
- Low Latency Block confirmation (0.5 seconds).
- Low-overhead Byzantine Fault Tolerant Finality.
- Designed for optional high-overhead, low-latency BFT finality.
- Smart contract platform powered by Web Assembly.
- Designed for Sparse Header Light Client Validation.
- Scheduled Recurring Transactions.
- Time Delay Security.
- Hierarchical Role-Based Permissions.
- Support for Biometric Hardware Secured Keys (e.g. Apple Secure Enclave).
- Designed for Parallel Execution of Context Free Validation Logic.
- Designed for Inter Blockchain Communication.

## Delegated Proof of Stake (DPoS)

{{<youtube OVKAOwzAwHI>}}

A consensus algorithm is a process in computer science used to achieve agreement on a single data value among distributed processes or systems.

Blockchain technology relies on consensus algorithms to reach an agreement among nodes. A blockchain can be thought of as a decentralized database that is managed by distributed computers on a peer-to-peer (P2P) network. Each peer maintains a copy of the ledger to prevent a single point of failure (SPOF). Updates and validations are reflected in all copies simultaneously.

EOSIO software utilizes the only known decentralized consensus algorithm proven capable of meeting the performance requirements of applications on the blockchain, Delegated Proof of Stake (DPOS). Under this algorithm, those who hold tokens on a blockchain adopting the EOSIO software may select block producers through a continuous approval voting system. Anyone may choose to participate in block production and will be allowed to produce blocks, provided they can persuade token holders to vote for them.

 - [DPOS Consensus Algorithm - The Missing White Paper](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper)
 - [BitShares DPOS](https://bitshares.org/technology/delegated-proof-of-stake-consensus/)

## Main Components

EOSIO comes with several programs. The primary ones that you will use, and the ones that are covered here, are:

- `nodeos` (node + eos = nodeos) - the core EOSIO node daemon that can be configured with plugins to run a node. Example uses are block production, dedicated API endpoints, and local development.
- `cleos` (cli + eos = cleos) - command line interface to interact with the blockchain and to manage wallets
- `keosd` (key + eos = keosd) - component that securely stores EOSIO keys in wallets.

The basic relationship between these components is illustrated in the following diagram. In the sections that follow, you will build the EOSIO components, and deploy them in a single host, single node test network (testnet) configuration.

<p align="center">
	<img src="/img/eos-blockchain/eos-system-architecture.png" width="100%">
  <br/>
  <small>source: developers.eos.io/eosio-nodeos/docs</small>
</p>

## EOSIO permissions

EOSIO permissions make it possible to strengthen account security to the point where lost or stolen keys become nothing more than minor inconveniences. This EOS Weekly episode covers what EOSIO permissions are at the conceptual level, and the trend towards a strong, mesh network of interconnected accounts.

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/kTjF0-Edxw8" frameborder="0" allowfullscreen="true">
  </iframe>
</figure>

Learn more at https://developers.eos.io/