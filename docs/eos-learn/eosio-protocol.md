---
id: eosio-protocol
title: EOSIO Protocol
sidebar_label: EOSIO Protocol
---

## What is EOSIO? 

EOSIO is open-source software that enables the launching of highly configurable blockchain networks on which developers and entrepreneurs can run highly performant blockchain applications. [EOSIO](https://eos.io/) was created in 2018 by [Block One](https://block.one/) (B1). 

EOSIO is software that allows developers to create and run decentralized applications by simulating a computer with resources such as network bandwidth, CPU bandwidth, and RAM. In the same way, EOSIO gives a wide set of tools and protocols for security and permissions for the blockchain networks.

## Differences between EOSIO and EOS

It's important to know the difference between EOSIO and EOS to as not to confuse the two concepts, as mentioned before is the software to develop customized blockchains, in contrast, EOS, also referred to as `mainnet`, corresponds to the first public network launched on EOSIO in the first version.

EOS, in addition to being one of the blockchains deployed on EOSIO also `EOS` is the token symbol used as the mainnet's "system token" that is used to control import aspects of the network such as block producer voting and resource management.

The characteristics of EOS were highly customized by the community through **system contracts**, so EOS is an example of how to use EOSIO, but, is not its definition, for this reason, EOS is not owned by B1 otherwise its owned and controlled by the EOS community. 

As well as there are other blockchains developed with EOSIO such as LACChain, Proton, Telos, and WAX, among others. Take a look at the following [EOSIO network list](https://guide.eoscostarica.io/docs/community-resources/eosio-networks). There are also multiple private networks currently using EOSIO.

## EOSIO Protocol

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

Another important feature of EOSIO-based blockchain networks is its flexible architecture, because EOSIO allows a multi-chain ecosystem that is highly customizable and inter-compatible by not setting the rules in the protocol, but rather many of the network's "rules of engagement" are defined through the **system contracts**.

This flexibility is achieved thanks to a set of smart contracts separated from the EOSIO core protocol. Because of this, the core functionality that validates blocks and transactions is separated from the **system contracts**.

## System Contracts

System contracts allow EOSIO networks to :

- Easily configure the network governance through smart contracts
- To have transparent rules for the operation of the system
- Synchronize the changes in system contracts in an instantaneous way with the whole network, which reduces the administration costs and delays of any governance updates
- Maintain total compatibility with other EOSIO blockchains
