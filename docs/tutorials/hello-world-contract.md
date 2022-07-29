---
id: hello-world-contract
title: Creating Smart Contracts to EOSIO
sidebar_label: Hello World Contract
description: Creating Hello World Contract to EOSIO blockchain
keywords: [Contract, Smart Contracts, Create Contract, How Create a Smart Contract, What is a Smart Contract, EOS, EOS Costa Rica]
---

We explain by example how to create an account and a `Hello World` contract to upload to a EOS.IO based blockchain. For this example, we based on the resources published by [Block.one to share with the community](https://developers.eos.io/).

## Get your Private Keys

More information [about private keys](https://guide.eoscostarica.io/docs/eos-learn/private-keys).

## Acquire RAM Resource

We can use the Faucet to receive dummy tokens for free, that in this case will be EOS, necessary to use network resources (as long as we have participation on that network). The sense of that is, for the contract, we will be requiring to acquire RAM resources of the block producers, for which that we will need these EOS that were just sent to us.

With this command, we can check the EOS quantity we have in this account (which in this case are 100 EOS), as well as the RAM resource, which at this moment is 5.366 KiB.

To acquire RAM, we write the command `buyram` for our account. We must specify twice the name of the account, once to define where the EOS come out and again to indicate where to RAM is sent. In the same line, we must indicate the EOS quantity we will be providing. For this example, we are sending 50 EOS. By having the wallet unlocked, automatically we acquired the RAM for the amount of EOS that we indicated.

After executing the buy, we can verify that now we have 86 KiB of RAM and just 50 EOS of the 100 that originally were assigned to us.

In the Bloks.io explorer, we can search for the information in that account. Additionally, we can review the taken actions, including the RAM buy transactions, the Faucet tokens and the complete history of movements.

## Create a Contract

To continue, let's create a simple contract inside a new directory, which we call "hellocontract". As resources are needed on EOS, these should be associated with the account tokens, so first should put the same contract name previously created.

To edit the contract, a text editor can be used. For this example, Sublime Text was used.

The first line includes a library in which we have access through the Contract Development Kit (CDT), a tool that allows access to resources to create the contracts.

In the class line, our "hellocontract" contract should be exposed, which has an action defined, which in this case we call it "hello" and its argument is a user of the type name. Upon saving the contract, is left a C++ in the directory.

The C++ file needs to be compiled using the tool CDT (Contract Development Toolkit), that receives as input the C++ file and as output originates a web assembly (warm) file which is an executable file by the contract. Additionally to the wasm file, an abi file is also generated which functions for mapping the contract functions. The command is going to receive the contract as input and as output is going to generate a wasm file which is the file that is uploaded on the blockchain.

As we didn't specify one, the system give us a message that there is no Ricardian clause. A Ricardian clause is a contract in prose, written in English, that describes the intention of the contract and should be aligned with the intention for which it was created. In the Block.one's site are resources for the Ricardian clauses. For the purposes of the example, we don't create one.

Once the command has been executed for the set contract, the system reads the information in the contract and then publish it.

## Publish the Contract

To publish our contract, we should use the `cleos` and the API endpoint to upload the contract to the location we want with active permission to sign with the created wallet.

Back in the block explorer (Bloks.io), we can verify that the account is the owner of the contract that exposes the "Hello" action and contains the abi information in which is specified in JSON structure the actions within the contract and associated components.

Once the contract is ready, we can execute one action in the contract. With cleos there is a command to specify the endpoint within the Jungle Testnet and execute the "Hello" action. For this example, we put as input: "eoscostarica". The output of the action will be the text "Hello eoscostarica".

We can verify in the blocks explorer the executed actions.

Is necessary to wait some seconds to complete the irreversibility of the block, since the block producers should validate the data block for this.

Finally, this is a sample of how you can interact with a blockchain. There are JavaScript tools, library [EOS JS](https://guide.eoscostarica.io/docs/tools/eosio-sdk-libraries) that could be implemented to execute actions in a way more programmatic to integrate with dApps, data may persist, or even execute business logic on the blockchain with this same pattern.

## Video Tutorial

<iframe width="100%" height="350" src="https://www.youtube.com/embed/nMivNMvS09Y" frameBorder="0" allowFullScreen loading="lazy"></iframe>