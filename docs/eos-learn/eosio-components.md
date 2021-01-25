---
id: eosio-components
title: EOSIO Components
sidebar_label: EOSIO Components
---

## Nodeos

[Nodeos](https://developers.eos.io/manuals/eos/latest/nodeos/index) is the core service daemon that runs on every EOSIO node it can be configured with plugins to run a node. It also, connects to and syncs data with other nodes in the net via P2P.It can be configured to process:

* Smart Contracts
* Validate Transactions
* Produce blocks containing valid transactions
* Confirm blocks to record them on the blockchain


## Cleos

[Cleos](https://developers.eos.io/manuals/eos/latest/cleos/index) is a command line tool that interfaces with Nodeos with a wallet utility (Keosd) responsible for managing keys and signing transactions. Developers can also use cleos to deploy and test EOSIO smart contracts.

To use Cleos, you need the end point(IP address and port number) of a running nodeos instance.

> [Keosd](https://developers.eos.io/manuals/eos/latest/keosd/index): is a key manager service daemon for storing private keys and signing digital messages. 

### Cleos Commands

```shell 
$cleos --help
$cleos create --help
$cleos create account --help
```

### Cleos Example 
```shell
$ cleos wallet create -n mywallet --to-console
```

## EOSIO.CDT

[EOSIO.CDT](https://developers.eos.io/manuals/eosio.cdt/latest/index) or **Contract Development Toolkit** is a toolchain for WebAssembly(WASM) with tools to facilitate smart contracts development.C++ to WASM compiler and [**Aplication Binary Interface**](https://developers.eos.io/welcome/v2.0/getting-started/smart-contract-development/understanding-ABI-files)(ABI) generator set of C/C++ libraries for smart contracts development.


## Getting Started

As a way to help you start in EOSIO world, here is a guide on how to install the EOSIO Contract Development Toolkit.
If you are using a different OS rather than windows visit [this site](https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin) to see the prerequisites and skip to [Install Binaries](#install-binaries).
This installation guide will aim for Windows users, unfortunately, EOSIO does not provide PowerShell ports and instructions for this OS. As a developer you have two options *one* to use a Virtual Machine or, like in this case a Linux Terminal on Windows. Follow these steps:

- Go to your Control Panel
- Go to Programs -> Programs and Features
- Then, click **Turn Windows features on or off**
- Search for the option and click **Windows Subsystem for Linux** and press *OK*
- Now you need to restart your Windows OS
- Finally , go to your *Microsoft Store* and Search for whatever Linux OS you want, we recommend you install Ubuntu 18.04 LTS

### Use Linux terminal

It will ask for UNIX username and password, you can set it up as you wish.
This is a navigation example with a "C" Disk

```shell
$ cd /mnt/c/
```
Here you are in your C disk where you can execute `$ls -al` to see your files.

```shell
$ cd Users/"your_user_name"
```
After you are in your wish folder you can follow the next steps.

## Install binaries

This guide will be using **Ubuntu 18.04** command install lines. For other OS and more information go to [EOSIO Before You Begin](https://developers.eos.io/welcome/latest/getting-started/development-environment/before-you-begin).

* **Step 1: Install binaries**

```shell
$ wget https://github.com/EOSIO/eos/releases/download/v2.0.0/eosio_2.0.0-1-ubuntu-18.04_amd64.deb
```
```shell
$ sudo apt install ./eosio_2.0.0-1-ubuntu-18.04_amd64.deb
```

* **Step 2: Setup a development directory**

```shell
$ mkdir "your_development_directory_name"
$ cd "your_development_directory_name"
```

* **Step 3: Enter your local directory**

Get your directory path with `$ pwd`, clone the EOSIO version from [GitHub](https://github.com/EOSIO/eos/blob/master/README.md) in that directory path.

```shell
$ git clone --recursive https://github.com/eosio/eosio.cdt --branch v1.6.3 --single-branch
```
It may take up to 30 minutes to clone the repository. After that, use `$ cd eosio.cdt`

* **Step 4 : Build the EOSIO.CDT**

```shell
$ ./build.sh
```
Installing eosio.cdt will make the compiled binary global so, it can be accessible anywhere. For this tutorial, it is strongly suggested that you do not skip the install step for eosio.cdt.

```shell
$ sudo ./install.sh
```
>For more information on how to Install the Contract DEV. Toolkit go to [this page](https://developers.eos.io/welcome/latest/getting-started/development-environment/install-the-CDT)

Now you are set for creating a development wallet with the help of Cleos. [More information](https://developers.eos.io/welcome/latest/getting-started/development-environment/create-development-wallet)
