---
id: consensus-mechanism
title: Consensus Mechanism
sidebar_label: Consensus Mechanism
---

## Consensus Mechanism

A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.

EOSIO will delegate the the authority to validate and write new blocks to a group of nodes that we call **Block Producers**.

### Proof of Authority (POA)

The group of block producers have the authority to write to the blockchain because this privilege was granted by a higher authority, the **permisioning committee**, who will be the maximum authority and who determines which nodes will be the block producing nodes.

### Permisioning Committee

The authority of the permisioning committee can be derived from a set of actors through multi-signature [`multisig`](https://developers.eos.io/manuals/eosjs/v21.0/how-to-guides/how-to-propose-a-multisig-transaction#gatsby-focus-wrapper) approvals so that the group's consensus is required by way of a simple majority, that is, the votes gathered sum 1/2 +1 of the actors.

One of the main functions of the permisioning committee is to evaluate the entities that want to register as block producers.

>Any entity that meets a minimum of technical and legal requirements can apply to be a block producer

Eventually there will be a legal vehicle, who verifies identity and signs contracts with block producers.

### Active Blocks Producers

The accounts authorized as active block producers belong to a group that shares the responsibility of validating and writing all the transactions in the network.

They are able to recognize the signatures of other nodes and verify that the transactions have been transmitted to the network by authorized nodes through white lists in smart contracts.

An EOSIO network is configured by default to use 21 active producers and a series of reserve producers for stable operation.

>EOSIO allows up to 125 active block producers, specified by `max_producers` in [config.hpp](https://github.com/EOSIO/eos/blob/master/libraries/chain/include/eosio/chain/config.hpp#L106)

### Block producer schedule

In EOSIO networks, active block producers are listed on a list, called **schedule**.

The schedule is arranged alphabetically and thus defines the sequence in which block producers must sign blocks.

Each producer receives a 12 block window to sign before the next producer starts their window. New blocks are produced by the first node in the list for a period of 6 seconds (12 blocks) and then the next node continues to produce the next 12 blocks and so on.

If a producer node is not ready or unavailable, there is no one to produce the 12 blocks, so all speculative transactions are delayed until the next producer starts signing.

### Byzantine Fault Tolerance

New blocks are considered reversible until they have been validated by 2/3 +1 of the active producers. This way if a producer node inserts an invalid block, the following nodes will reject it and the block will not be included unless 2/3 +1 of the producers group approve it.

>Example: A network of 21 active producers requires validation of 15 nodes (2/3 +1), which takes on average 90 seconds to obtain irreversibility of a new block.

### Node Fault Tolerance

Once a block is signed, other producers on the schedule validate it and it goes into an irreversible state after 2/3 + 1 producers have signed. So if 1/3 or more of all producers are offline, the last irreversible block number, known as **Last Irreversible Block** or **LIB**, would not increase and the blockchain will stop.

Servers sometimes fail, and sometimes must be decommissioned for software updates and system maintenance, which is important to consider on small EOSIO networks.

With only 5 producers, the network will tolerate 1 producer going offline. If more than one is offline, the number of the Last Irreversible Block will stop increasing and the network will stop. With 4 nodes, a single failed a node will stall the network. With 9 producers, two nodes can be disconnected without breaking the network.

It is also important that private keys used by production nodes are properly backed up. If block producer keys are lost due to a system disaster, there is a chance that the network will stop working forever.

### Stand-By Block Producers

EOSIO networks keep a list of registered block producer accounts that run nodes that can successfully produce blocks just by being added to the schedule of active producers by the permisioning committee.

### Block Producer Rotation

The periodic rotation of active block producing nodes in the schedule favors decentralization. For this reason, the permisioning committee will have a [network management tool](https://latamlink.io/docs/network-governance) that allows selecting the block producers that it wants to include or exclude in the schedule.

>For example: You can define a weekly active node rotation policy.

Later on, periodic and automatic rotation based on smart contracts will be enabled. In such a way that it is impossible to predict who are the producers of selected active blocks. (external entropy)

### Replacement of an active Block Producer

If a node on the schedule stops responding. The permisioning committee may manually replace block producers with performance or security issues.

Eventually, a smart contract may be implemented to replace a block producer's account in the schedule automatically based on objective performance metrics.

### Custom EOSIO system contracts

#### Delegated Proof of Stake (dPOS) functions :

- System Token
- Block Producer Voting
- Block Producer Payment
- Staking for resources
- Delegation of Resources
- Namebiding
- Resource Exchange (REX)