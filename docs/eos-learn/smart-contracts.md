---
id: smart-contract
title: Smart Contracts
sidebar_label: EOSIO Smart Contracts
description: Smart Contracts, explanation and definitions how it works and how to use it.
keywords: [ Smart Contracts, What is a Smart Contract, How work a smart contract, How Create a Smart Contract, EOS, EOS Costa Rica]
---

A contract is an agreement governing outcomes for actions, given a set of inputs. A contract can range from formal legal contracts (e.g., a financial transaction) to something as simple as the "rules" of a game. Typical actions can be things such as fund transfers (in the case of a financial contract) or game moves (in the case of a game contract).

An EOSIO Smart Contract is software registered on the blockchain and executed on EOSIO nodes, that implements the semantics of a "contract" whose ledger of action requests are being stored on the blockchain. The Smart Contract defines the interface (actions, parameters, data structures) and the code that implements the interface. The code is compiled into a **canonical bytecode** format that nodes can retrieve and execute. The blockchain stores the transactions (e.g., legal transfers, game moves) of the contract. Each Smart Contract must be accompanied by a Ricardian Contract that defines the legally binding terms and conditions of the contract.

Check out our [Modern C++ Tutorial](https://guide.eoscostarica.io/docs/tutorials/modern-cpp)

## Smart Contract Design Framework 
Digital Scarcity's [github repo](https://github.com/digital-scarcity/equiprental) has an example designed to provide a step-by-step framework and example for creating a smart contract on EOS. It uses a simple use case of equipment rentals that list their equipment for rent and renters who pay rent for those items.

### Process Steps
Here are the general steps to developing a Smart Contract.
![Diagram with the steps to develop a smart contract](/img/contracts/steps.webp "Steps")


### Data Model
Define the data that will be persisted in the Smart Contract.
![Logical Data Model Diagram](/img/contracts/datamodel.webp "Data Model")

### Actions
Define the actions, or state changes, that must exist in your Smart Contract.
![Use Case Diagram](/img/contracts/actions.webp "Actions")

### Pre- and Post- Conditions
Define the actions, or state changes, that must exist in your Smart Contract.
![Diagram with the pre and post conditions](/img/contracts/prepostconditions.webp "Pre and Post Conditions")


## Open Source Smart Contracts 
We maintain a list of open source EOS Smart Contracts in the following our [Example EOSIO Smart Contracts](https://guide.eoscostarica.io/docs/tools/example-eosio-smart-contract)

Also check out this list of open source contracts for EOSIO maintained by César Rodríguez:

https://github.com/kesar/eos-awesome-contracts

## Basic Smart Contract Scheme

<figure className="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/ZE2HxTmxfrI" frameBorder="0" allowFullScreen loading="lazy"> </iframe>
</figure>

## Additional Resources

To learn more about EOSIO smart contract development we recommend you check out the following links:

* [Hello World Smart Contract Tutorial](https://guias.eoscostarica.io/docs/tutoriales/contrato-hola-mundo)
* [EOSIO Smart Contract Guides](https://developers.eos.io/welcome/v2.1/smart-contract-guides/index)
* [EOSIO Smart Contract Developers Handbook](https://cc32d9.gitbook.io/eosio-smart-contract-developers-handbook)