---
id: Smart-Contracts
title: Smart Contracts
sidebar_label: Smart Contracts
---

A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).

An EOSIO Smart Contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a canonical bytecode format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract.

Read More : https://developers.eos.io/eosio-cpp/docs

## Smart Contract Design Framework 
Digital Scarcity's [github repo](https://github.com/digital-scarcity/equiprental) has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items.

### Process Steps
Here are the general steps to developing a smart contract.
![alt text](/img/contracts/steps.png "Steps")


### Data Model
Define the data that will be persisted in the smart contract
![alt text](/img/contracts/datamodel.png "Data Model")

### Actions
Define the actions, or state changes, that must exist in your smart contract
![alt text](/img/contracts/actions.png "Actions")

### Pre- and Post-Conditions
Define the actions, or state changes, that must exist in your smart contract
![alt text](/img/contracts/prepostconditions.png "Pre- and Post-Conditions")


## Open Source Smart Contracts 
We maintain a list of open source EOS Smart Contracts in the following repo:

https://github.com/eoscostarica/eos-contracts

Also check out this list of open source contracts for EOSIO maintained by César Rodríguez :

https://github.com/kesar/eos-awesome-contracts

## Basic smart contract scheme

<figure class="video_container">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/EbWDHrm2ETY" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

You can see more on this channel: https://www.youtube.com/user/grandmoren1/videos