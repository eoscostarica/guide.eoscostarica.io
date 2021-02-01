---
id: eosio-protocol
title: EOSIO Protocol
sidebar_label: EOSIO Protocol
---

EOSIO is open-source software that enables launching highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. [EOSIO](https://eos.io/) was created in 2018 and is maintained by [Block One](https://block.one/). The first public network launched on EOSIO is called EOS, also referred as "mainnet". EOS is however just one of multiple public blockchain networks currently using EOSIO. Take a look at the following [EOSIO network list](https://guide.eoscostarica.io/docs/community-resources/eosio-networks). There are also multiple private networks currently using EOSIO.

Some innovative features of EOSIO include:

- **Free transactions** with consumption limits
- **Low latency** confirming new blocks (0.5 seconds)
- **Byzantine Fault Tolerance**
- Human Readable Account Names (`eosioaccount`)
- **ACL Permissions** based on hierarchical roles
- Updatable contracts **written in C++**
- Support for keys protected by **biometric hardware** (`Apple Secure Enclave`)
- Designed for **Inter-Blockchain communication**
- Designed for Sparse Header Light Client Validation
- Scheduled Recurring Transactions
- Time Delay Security
- Designed for Parallel Execution of Context Free Validation Logic

Another important feature of EOSIO based blockchain networks is it's flexible architecture, because many of the network's "rules of engagement" are defined through **system contracts**.

This flexibility is achieved thanks to a set of smart contracts separated from the EOSIO core protocol. Because of this, the core functionality that validates blocks and transactions is separated from the **system contracts**.

## System Contracts

System contracts allow EOSIO networks to :

- Easily configure the network governance through smart contracts
- To have transparent rules for the operation of the system
- Synchronize the changes in system contracts in a instantaneous way with the whole network, which reduces the administration costs and delays of any governance updates
- Maintain total compatibility with other EOSIO blockchains