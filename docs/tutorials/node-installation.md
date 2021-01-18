---
id: node-installation
title: EOSIO Node Installation
sidebar_label: Node Installation
---

EOSIO version tag: `v2.0.6`

Chain ID: `2c1f36d2e3774cba3e47804b6463c207544ac24183194e0b96ffad31e8f4acd5`

Genesis File: `genesis.json`

## 1. Install EOSIO from precompiled binaries

Download the latest version of EOSIO for your OS from: https://github.com/EOSIO/eos/releases/tag/v2.0.5

For example, for ubuntu 18.04 you need to download `eosio_2.0.5-1-ubuntu-18.04_amd64.deb`

You can use apt to install it:

```
wget https://github.com/eosio/eos/releases/download/v2.0.5/eosio_2.0.5-1-ubuntu-18.04_amd64.deb
sudo apt install ./eosio_2.0.5-1-ubuntu-18.04_amd64.deb
```

It will download all dependencies and install EOSIO to `/usr/opt/eosio/v2.0.5`

### Uninstall Script

To uninstall the EOSIO built/installed binaries and dependencies, run:

```
./scripts/eosio_uninstall.sh
```

## 2. Configure Jungle Testnet Node

```
mkdir ~/Jungle-testnet
cd ~/Jungle-testnet
git clone https://github.com/Jungle/testnet.git ./
```

- Edit config.ini

    - Enter your server's external address: `p2p-server-address = YOUR_DOMAIN_OR_IP:9876`

- Open TCP Ports (8888, 9876) on your firewall/router

Specify a genesis.json file the first time you run nodeos

```
./start.sh --delete-all-blocks --genesis-json genesis.json
```
Follow logs to check your node is running OK.

```
tail -f stderr.txt
```

Check if you can access your node using link `http://**YOUR_SERVER**/v1/chain/get_info`

Here is an API [Example](https://lacchain.eosio.cr/v1/chain/get_info)

### Starting and Stopping Nodeos

- `./start.sh` Starts and restarts Nodeos service.

- `./stop.sh` Performs graceful shutdown of Nodeos service.
