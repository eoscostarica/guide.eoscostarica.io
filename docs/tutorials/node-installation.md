---
id: node-installation
title: EOSIO Node Installation
sidebar_label: Node Installation
description: EOSIO Node Installation
keywords: [ Node Installation, EOSIO Nodes, How to create a node, How to Install a Node, Install Nodes]
---

## A Producer Node Setup
On EOSIO, a producing node and other types of nodes are defined and differentiated by enabling specific [Nodeos Plugins](https://developers.eos.io/manuals/eos/latest/nodeos/plugins/index). For example, to define a non-producing node, you need to except `producer_plugin`. This posibility of customization allows to expose one or more services publicly or privately by enabling one or more of those plugins.

If you are trying to set up a "Full Node", you may find [Setting Up a Full EOS Node](https://eoscommunity.org/t/where-is-the-best-guide-on-setting-up-a-full-eos-node/621) helpful.

Let's proceed to setup a Producing Node using EOSIO Technology. You can also find more useful information about this topic in [Producing Node Setup](https://developers.eos.io/manuals/eos/v2.0/nodeos/usage/node-setups/producing-node).
## Install EOSIO from Precompiled Binaries
Download the latest version of EOSIO for your OS from: [Github](https://github.com/EOSIO/eos/releases/tag/v2.0.6).

You can use [wget](https://www.gnu.org/software/wget/) to download [dpkg](https://wiki.debian.org/es/dpkg) and install `eosio`:

```bash
$ wget https://github.com/EOSIO/eos/releases/download/v2.1.0-rc2/eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb
$ sudo dpkg -i ./eosio_2.1.0-rc2-ubuntu-18.04_amd64.deb
```

It will download all dependencies and install EOSIO to `/usr/opt/eosio`.

## Node Setup
Once you installed the precompiled binaries following the above commands, let's create a directory called `testproducer` and then `config.ini`, `genesis.json` and `start.sh` files:
```bash
$ mkdir testproducer

$ touch ~/testproducer/config.ini
$ touch ~/testproducer/genesis.json
$ touch ~/testproducer/start.sh
```

Now, let's write down some code into that files:

### `config.ini`
```ini
agent-name = testproducer

# PLUGINS
# Required to process and aggregate chain data on an EOSIO node.
plugin = eosio::chain_plugin
# Exposes functionality to the RPC API interface
plugin = eosio::chain_api_plugin
# Required to enable any RPC API functionality provided by a nodeos or keosd instance.
plugin = eosio::http_plugin
# Loads functionality required for a node to produce blocks.
plugin = eosio::producer_plugin
# Exposes a number of endpoints for the producer_plugin to the RPC API interface
plugin = eosio::producer_api_plugin

# CHAIN 
chain-state-db-size-mb = 16384
reversible-blocks-db-size-mb = 512
contracts-console = true
abi-serializer-max-time-ms = 2000
wasm-runtime = wabt
enable-stale-production = false
pause-on-startup = false
max-irreversible-block-age = -1
txn-reference-block-lag = 0

# BLOCK PRODUCER
producer-name = testproducer

# PEERING NETWORK
p2p-server-address =  TESTPRODUCER_IP:9876     # CHANGE THIS ACCORDING TO THE NODE IP
p2p-listen-endpoint = 0.0.0.0:9876
p2p-max-nodes-per-host = 150
max-clients = 150
connection-cleanup-period = 30
sync-fetch-span = 2000
allowed-connection = any

p2p-peer-address = SEED_NODE_IP:SEED_NODE_PORT
p2p-peer-address = PEER1_NODE_IP:PEER1_NODE_PORT
p2p-peer-address = PEER2_NODE_IP:PEER2_NODE_PORT
p2p-peer-address = API_NODE_IP:API_NODE_PORT
# You can continue adding peer nodes here
```

> Note that above there are items that need to be replaced with their corresponding values.

### `genesis.json`
```json
{
  "initial_timestamp": "2018-12-05T08:55:11.000",
  "initial_key": "EOS_PUB_DEV_KEY",
  "initial_configuration": {
    "max_block_net_usage": 1048576,
    "target_block_net_usage_pct": 1000,
    "max_transaction_net_usage": 524288,
    "base_per_transaction_net_usage": 12,
    "net_usage_leeway": 500,
    "context_free_discount_net_usage_num": 20,
    "context_free_discount_net_usage_den": 100,
    "max_block_cpu_usage": 100000,
    "target_block_cpu_usage_pct": 500,
    "max_transaction_cpu_usage": 50000,
    "min_transaction_cpu_usage": 100,
    "max_transaction_lifetime": 3600,
    "deferred_trx_expiration_window": 600,
    "max_transaction_delay": 3888000,
    "max_inline_action_size": 4096,
    "max_inline_action_depth": 4,
    "max_authority_depth": 6
  },
  "initial_chain_id": "0000000000000000000000000000000000000000000000000000000000000000"
}
```

> Replace `EOS_PUB_DEV_KEY` with its corresponding value. To see how to generate a key pair, check out our guide [Private Keys](https://guide.eoscostarica.io/docs/eos-learn/private-keys/) about this topic.

### `start.sh`
```bash
#!/usr/bin/env bash
DATA_DIR="blockchain"
CONFIG_DIR="./blockchain/config"
EOS_PUB_KEY=EOS_PUB_KEY  #REPLACE THIS WITH ITS CORRESPONDING VALUE
EOS_PRIV_KEY=EOS_PRIV_KEY #REPLACE THIS WITH ITS CORRESPONDING VALUE
echo "Starting Producer Node...";
set -e;
ulimit -n 65535
ulimit -s 64000
mkdir -p $CONFIG_DIR
cp ./config.ini $CONFIG_DIR/config.ini
pid=0;
nodeos=$"nodeos \
 --config-dir $CONFIG_DIR \
 --data-dir $DATA_DIR \
 --blocks-dir $DATA_DIR/blocks \
 --signature-provider $EOS_PUB_KEY=KEY:$EOS_PRIV_KEY" ;
term_handler() {
 if [ $pid -ne 0 ]; then
   kill -SIGTERM "$pid";
   wait "$pid";
 fi
 exit 0;
}
start_nodeos() {
 $nodeos &
 sleep 10;
 if [ -z "$(pidof nodeos)" ]; then
   $nodeos --hard-replay-blockchain &
 fi
}
start_fresh_nodeos() {
 echo 'Starting new chain from genesis JSON'
 $nodeos --delete-all-blocks --genesis-json genesis.json &
}
trap 'echo "Shutdown of EOSIO service...";kill ${!}; term_handler' 2 15;
if [ ! -d $DATA_DIR/blocks ]; then
 start_fresh_nodeos &
elif [ -d $DATA_DIR/blocks ]; then
 start_nodeos &
fi
pid="$(pidof nodeos)"
while true
do
 tail -f /dev/null & wait ${!}
done
```
> Maybe you need to assign permission executions to `start.sh`, for this execute: `$ chmod 755 start.sh`

**Execute `start.sh` script**:
```bash
$ ./start.sh
```
For a more detailed information about the above command, please visit [System Regproducer](https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer).

### Create `testproducer` account
On an EOSIO based blockchain, account creation carries [RAM](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram) consumption, so it is necessary to pay for new accounts. In the following command replace `CREATOR` placeholder with an existing account with enough resources to execute the operation.
```bash
$ cleos -u http://DESTINATION_NODE_ADDRESS create account CREATOR testproducer EOS_PUB_KEY
```
Depending on which network you are configure the node for, you can create account with the following links:
- [Jungle Testnet Account Creation](http://monitor3.jungletestnet.io/#account)
- [Kylin Testnet EOSx Account Creation](https://kylin.eosx.io/tools/account/create)
- [Create new account on EOS Mainnet](https://www.eosx.io/tools/account/create)

### Register `testproducer` as a Producer Node
```bash
$ cleos -u http://DESTINATION_NODE_ADDRESS system regproducer testproducer EOS_PUB_KEY "www.testproducer.testlink" 0
```
For a more detailed information about the above command, please visit [System Regproducer](https://developers.eos.io/manuals/eos/v2.0/cleos/command-reference/system/system-regproducer).

Now, your node is set up. If you configured this node to operate in a Private Network, you need to make sure your node is included in the producers schedule. Check our guide [Set Block Producer Schedule](https://guide.eoscostarica.io/docs/tutorials/private-network-installation/#set-block-producers-schedule) to see more information about this.

On the other hand, if you are looking to produce blocks in a testnet, token holders need to vote for you in order to be in the 21 top block producers.

### Uninstall `eosio`

To uninstall the EOSIO built/installed binaries and dependencies, run:

```bash
sudo dpkg -r eosio
```

## Start a Node Using a Snapshot

In some situations, it is convenient to start a node using a snapshot if you wish to create a valid chain state to start from. Make sure you have deleted all existing data in the directory: `~./local/share/eosio/nodeos/data/*`, since it is recommended.

So, let's say we are using a snapshot from Jungle Testnet. 
So, for this execute the following command:
```bash
$ wget https://backup.cryptolions.io/Jungle/snapshots/latest-snapshot.bin -P ~./local/share/eosio/nodeos/data/snapshots/
```

Now that the snapshot is downloaded, you can use the same [`start.sh`](###startsh) script to start the node, just delete `--genesis-json` flag in the script, so the function `start_fresh_nodes` in the file will look like:

```bash
start_fresh_nodeos() {
 echo 'Starting new chain from genesis JSON'
 $nodeos --delete-all-blocks &
}
```
For more information, please visit [How to replay from a snapshot](https://developers.eos.io/manuals/eos/v2.1/nodeos/replays/how-to-replay-from-a-snapshot). Also, visit [EOS Snapshot](https://developers.eos.io/search?query=snapshot) to see all available doc entries for "Snapshot" on the [developer.eos.io](https://developers.eos.io/) portal.
## Testnet Nodes
### Configure Jungle Testnet Node
If you are seeking to setup a node on Jungle Testnet, you can go to [EOS Jungle Testnet - Node Manual Installation](https://github.com/EOS-Jungle-Testnet/Node-Manual-Installation) on Github. Also, you can use [Testnet Auto-Installer script](http://monitor.jungletestnet.io/#register). These tools were created by [cryptolions.io](https://cryptolions.io/home)

### Configure Kylin Testnet Node
To configure a node in the Kylin Testnet, please go to [CryptoKylin-Testnet](https://github.com/cryptokylin/CryptoKylin-Testnet) repo and follow instructions there.

# References
- [Snapshot Related Info](https://developers.eos.io/search?query=snapshot).
- [Cryptolions Testnet Auto-Installer script](http://monitor.jungletestnet.io/#register).
- [CryptoKylin-Testnet Github repo](https://github.com/cryptokylin/CryptoKylin-Testnet)