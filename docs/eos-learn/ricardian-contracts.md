---
id: ricardian-contracts
title: What are Ricardian Contracts?
sidebar_label: Ricardian Contracts
description: Definition and explanation of Ricardian Contracts.
keywords: [ Ricardian Contracts, What is a Ricardian Contract?, How work a Ricardian Contract?, How Create a Ricardian Contract?, How Create a Ricardian Contract?, Ricardian Contract Blockchain, EOS, EOS Costa Rica]
---

## What are Ricardian Contracts?
They are digital documents that define the terms and conditions among those involved in the contract, these are signed and verified cryptographically and are readable by both humans and computer systems.

### Characteristics of these contracts

- Human and software readable.
- It can be printed.
- All forms of documents (physical, virtual, encrypted) are equivalent.
- They are signed by all parties.
- They can be identified safely thanks to the has of each contract.

### Ricardian contracts at EOSIO
Blockchains operate under smart contracts, however, work is underway to include Ricardian contracts in the transactions of these networks. One of the main objectives is to convert the complexity of the code observed within Blockchain technology into a simpler language so that anyone could understand it.

EOS Costa Rica has developed a react component that renders ricardian contracts for smart contracts on EOSIO networks. You can view the react component in the following [link](https://github.com/eoscostarica/eosio-components/blob/master/src/stories/RicardianContract.stories.jsx). In that link, go to the `Knobs` section to modify `httpEndpoint` and `contractName`. Once done, check the Ricardian Contract for a Smart Contract. For example, set:
```
httpEndpoint: https://lacchain.eosio.cr
contractName: eosio
```
The component will automatically load the content of the Ricardian Contract. The open source repository for this component is located here: https://github.com/eoscostarica/eoscr-components.

## How to add a Ricardian Contract?
The process is as similar as compiling a Smart Contract, is fact, it is done during the same process, eosio-cpp provide some extra configuration options when compiling and one of them are `-R`, which allow to set an extra resource in this case the Ricardian Contract with just providing the Ricardian path, the compiler then is responsible to add the contracts and clauses to the .abi file.

## How to create a Ricardian Contract?
Usually there is a contract folder called `ricardian` inside the smart contract folder which contains two main files that compose the Ricardian Contrant `<contract name>.contracts.md` and `<contract name>.clauses.md`.

### Contracts
Its purpose is to declare and define all the actions inside of the Smart Contract. According to [EOSIO ricardian-spec](https://github.com/EOSIO/ricardian-spec) the are some Metadata Fields:

- spec_version
- title
- summary
- icon

For example:
```
<h1 class="contract">Create Post</h1>
spec_version: 0.0.0
title: Create Post
summary: Create a blog post "{{title}}" by {{author}} tagged as "{{tag}}"
icon: https://app.com/create-post.png#00506E08A55BCF269FE67F202BBC08CFF55F9E3C7CD4459ECB90205BF3C3B562
```

### Clauses
Its purpose is to declare and define clauses or rules of the Smart Contract. It is simplier to create, for example:

```
<h1 class="clause">UserAgreement</h1>

User agreement for the chain can go here.
```
More examples on [EOSIO eosio.system](https://raw.githubusercontent.com/EOSIO/eosio.contracts/master/contracts/eosio.system/ricardian/eosio.system.clauses.md).

## Compiling Process
To compile a Smart Contract with its respective Ricardian Contract, execute next command adding the `-R` flag:

```
eosio-cpp -abigen -R ./ricardian -contract contracttest -o contracttest.wasm src/contracttest.cpp
```

Click [here](https://es.cointelegraph.com/eos-101/how-eos-smart-contracts-work) to see more content on this topic.