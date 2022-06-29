---
id: migration-to-mandel
title: Migration from EOSIO to Mandel
sidebar_label: Migration from EOSIO to Mandel
---

## Dissatisfaction with Block One

In 2021, the EOS community felt disappointed about the compromise of [Block One](https://block.one/) with the [EOS Network Foundation](https://eosnetwork.com/) (ENF) because use case proposals were missing, and the little support in the blockchain. For these reasons, through a super-majority consensus, the community affirms that the company doesn't act in the interest of the community and were stop the payment that the company receives for the network maintenance.

After the fallout with B1, the EOS founder Daniel Larimer indicates that it’s necessary to make a restructuration and reformulation of the EOS brand, its name, vision, and goals. Also, he says that is the beginning of a new era for EOS by firing B1 and no longer issuing tokens to them, as it allows the community to confront corporate interests that do not align with their interests.

The EOS Network Foundation's vision is to build a decentralized future where no sacrifice the community, cooperation, or consensus, making easy innovation through the union and empowerment of the developers around the world.

## EOSIO vs Mandel

Due to the dissatisfaction and the fact that B1 was set aside, the EOS community doesn’t want that all the code of the newest versions of the protocol to be included, specifically from EOSIO 2.1 and EOSIO 2.2, so the EOS network was not updated since EOSIO 2.0.

For this reason, arises Mandel (abbreviation of Mandelbrot) which is a bifurcation of EOSIO source code, this was made by the team of [ƒractally](https://fractally.com/) (previously known as Clarion OS) with the purpose of taking some of the most valuable improvements from EOSIO 2.1 and a few from EOSIO 2.2. Also, add two new hard forks: [Contract Pays](https://eoscommunity.github.io/clsdk-docs/book/std/cpay/index.html) and Enhanced Configurable Blockchain Params.

Also, it's important to know that Mandel is a provisional name. For more information visit [Mandel to takeover EOSIO](https://medium.com/edenoneos/eos-mandel-to-takeover-eosio-in-2022-2e25bf5451f0).


The previous concentrated in [Mandel 3.0](https://github.com/eosnetworkfoundation/mandel/releases/tag/v3.1.0-rc1), although despite some block producers updated to EOSIO 2.1, there will be a Mandel 2.3 that derives from EOSIO 2.1 to facilitate the migration to Mandel 3.0.

## Mandel Changes

Among the changes included in Mandel 3.0, the following are worth mentioning:

- Is possible to configure the WASM limits, because for security reasons before was limited to several WASM parameters, but, thanks to the improvements in the performance now it’s secure to increment the limits and in looking for expanding limits are configurable. 
- Include Pay contracts, where an account called `provider` is created with a certain amount of NET and CPU resources and the authorization private key is published so that anyone can sign a transaction, and if it's not cancelled the `provider` account will cover the NET and CPU expenses, the above in order to:
    - Implement transactions that are structured identically to Bitcoin transactions. 
    - Delete the cost of creation of accounts for those who only want to use EOS as currency.
    - Incorporate privacy tokens without your privacy being compromised by the resource system. 
- Enhanced configurable blockchain params to facilitate the add, elimination, and configuration of future objective features.

## What is ƒractally doing with Mandel?

According to ƒractally in their page of frequently asked questions [EOS community FAQ](https://fractally.com/blog/eos-community-faq):

> ƒractally is developing a suite of next-generation DeFi standards, including a token standard, nft standard, premium name system, premium token symbol system, and decentralized exchange. These standards are required for ƒractally to realize its vision.
