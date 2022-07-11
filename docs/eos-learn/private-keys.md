---
id: private-keys
title: Private Keys
sidebar_label: Private Keys
description: Handling private keys in blockchain
keywords: [ private keys, keys, EOSIO, EOS, EOS Costa Rica, What is a private key, What is a private key for]
---

## Create an Account in the Public Blockchain

In most wallets you can generate new eosio keys, for this guide we will create keys in the terminal. let's execute the command `cleos` to generate the cryptographic keys required to create an account.

## Generate and Manage the Keys

To generate keys, the requirement to create an account in a blockchain, let's run the command `cleos create key` in the terminal. This command is going to generate private and public keys — we can create the number of keys we want. The cleos accounts, by default, come in pairs: one `active key` and one `owner key` (to recover the account in case of active key lost).

The name of the account must comply with certain requirements: characters from A to Z in lowercase, numbers from 1 to 5 and must have 12 characters length. For this example, let's create the account: `hellocontract`.

Then, we introduce the public keys of `owner` and `active` to execute the contract. This should be any of the ones generated with the `cleos create key` command above. Is recommendable not to share the private keys.

## Manage the Wallet

Once the account is created, we must generate the wallet and identify it with the name of the account, which in this example is `hellocontract`, with the command `cleos wallet create -n hellocontract --to-console`.

At this moment, the keys are stored uniquely on the console, for which is necessary to create the wallet that will contain the keys. In this manner, we could access these keys with a unique password. We must import the keys in the wallet once at the time, writing the command `cleos wallet import` and adding the name of the account.

## External Authenticators (Wallets)

The last important update for EOSJS included built-in support for the interchangeable signs providers; deleting the burden of managing the secure keys management of its scope and improving the interoperability. What is more important, this is great security improving that limits the exposition of the keys of a user in several applications to a unique reliable signs provider that mitigates the potential risks that can arise from malicious code or an error of the user when using blockchain applications.