---
id: consensus-mechanism
title: Consensus Mechanism
sidebar_label: Consensus Mechanism
---

A consensus mechanism ensures that each new block that is added to the blockchain is accepted as the only version of the truth by all nodes on the network. In essence, a consensus algorithm aims to find a common agreement that is accepted for the whole network.

EOSIO will delegate the the authority to validate and write new blocks to a group of nodes that we call **Block Producers**.

## What is a block producer

Block producers provide the infrastructure required to process transactions. Some block producers operate on their own physical equipment, while others provide services using third-party cloud services.

### Explaining the role of an EOS block producer.

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/YLt5uexD9gg" frameborder="0" allowfullscreen="true"> </iframe>
</figure>


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

EOSIO networks keep a list of registered block producer accounts that run nodes that can successfully produce blocks just by being added to the schedule of active producers.

## Delegated Proof of Stake (DPoS)

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/OVKAOwzAwHI" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

A consensus algorithm is a process in Computer Science used to achieve agreement on a single data value between processes or distributed systems.

Blockchain technology depends on Consensus Algorithms to achieve an agreement between the nodes. A blokchain can be thought of as a decentralized database that is managed by computers distributed in a point-to-point (P2P) network. Each point maintains a copy of the network state to prevent a single point of failure (SPOF). Updates and validations are reflected on all copies simultaneously.

EOSIO software uses the only known proven decentralized consensus algorithm capable of meeting the performance requirements of blockchain applications, **Delegated Proof of Stake -(DPoS)**. Under this algorithm, those who hold tokens on the blockchain by adopting EOSIO software can select block producers through a continuous approval system. Anyone who chooses to participate in block production will have a chance to produce them, provided they can persuade token holders to vote for them.

 - [DPoS Consensus algorithm](https://steemit.com/dpos/@dantheman/dpos-consensus-algorithm-this-missing-white-paper)
 - [BitShares DPoS](https://bitshares.org/technology/delegated-proof-of-stake-consensus/)

