---
id: private-network-installation
title: EOSIO Private Network Installation
sidebar_label: EOSIO Private Network Installation
description: Steps to create a private network EOSIO
keywords: [EOSIO, Private Network, Installation, EOSIO Networks, What is EOSIO, How EOSIO Works, How to use EOSIO, What is EOSIO for, What is EOSIO Network?, What is EOSIO]
---
import useBaseUrl from '@docusaurus/useBaseUrl';

## Private Network Installation Tutorial
Several topologies can be designed in the sense of quantity of nodes or redundancy of the data, nevertheless, for the practicity of this tutorial, the following topology is used as a main reference:
<p style={{ align: "center" }}>
  <img alt="Initial Topology" src={ useBaseUrl( '/img/private-network-installation-tutorial/initial-topology.webp' )} width="100%" />
</p>

## Software Requirements

At the time of configuring a private EOSIO network there are some software installation requirements:
1. EOSIO precompiled binaries installation
1. EOSIO.CDT binaries installation

*Also, we are using Ubuntu 18.04 LTS, but if you want to use macOS or other supported OS, take a look at [EOSIO releases](https://github.com/EOSIO/eos/releases)*
### EOSIO Precompiled Binaries Installation
Execute the following commands to install EOSIO precompiled binaries:
```bash
$ wget https://github.com/eosio/eos/releases/download/v2.0.9/eosio_2.0.9-1-ubuntu-18.04_amd64.deb
$ sudo apt install ./eosio_2.0.9-1-ubuntu-18.04_amd64.deb
```
Once you installed EOSIO binaries; nodeos, a blockchain configuration from scratch and P2P networks interactions are among available functionalities that the protocol provides.

> To uninstall EOSIO execute: `$ sudo apt remove eosio`

### EOSIO.CDT (Contract Development Toolkit) Binaries Installation
EOSIO.CDT is a toolkit that facilitates smart contract development in a EOSIO based blockchain networks. To install EOSIO.CDT v1.6.3 execute the following commands:
```bash
$ wget https://github.com/eosio/eosio.cdt/releases/download/v1.6.3/eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
$ sudo apt install ./eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
```

You may want take a look at [EOSIO.CDT releases](https://github.com/EOSIO/eosio.cdt/releases).
## Genesis Node Configuration
Before to configure the genesis node, it is necessary to create a directory called `~/biosboot/genesis`, this is due to protocol particularities. So, for this execute the following:
```bash
$ mkdir ~/biosboot
$ mkdir ~/biosboot/genesis
```
Now, create a file called `genesis.json` in the `~/biosboot/` directory, so for this execute the following command to create and edit the file:
```bash
$ nano ~/biosboot/genesis.json
```
Copy and paste the following content in the previous created file:
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
> This can be changed later on using privileged `set_param` function. Read more in our guides [Set Params](https://guide.eoscostarica.io/docs/eos-learn/important-functions#set_params).

## Start the nodeos Service
Before to start the nodeos service, it is necessary to create the file `genesis_start.sh`. For this, execute the following commands:

1. Create the file
    ```bash
    $ cd ~/biosboot/genesis
    $ nano genesis_start.sh
    ```
1. Paste the following content in the `genesis_start.sh` file:
    ```bash
    #!/bin/bash
    DATADIR="./blockchain"

    if [ ! -d $DATADIR ]; then 	mkdir -p $DATADIR;
    fi

    nodeos \
      --genesis-json $DATADIR"/../../genesis.json" \
      --signature-provider EOS_PUB_DEV_KEY=KEY:EOS_PRIV_DEV_KEY \
      --plugin eosio::producer_plugin \
      --plugin eosio::producer_api_plugin \
      --plugin eosio::chain_plugin \
      --plugin eosio::chain_api_plugin \
      --plugin eosio::http_plugin \
      --plugin eosio::history_api_plugin \
      --plugin eosio::history_plugin \
      --data-dir $DATADIR"/data" \
      --blocks-dir $DATADIR"/blocks" \
      --config-dir $DATADIR"/config" \
      --producer-name eosio \
      --http-server-address localhost:8888 \
      --p2p-listen-endpoint localhost:9010 \
      --access-control-allow-origin=* \
      --contracts-console \
      --http-validate-host=false \
      --verbose-http-errors \
      --enable-stale-production \
      --p2p-peer-address GENESIS_NODE_IP:9011 \
      --p2p-peer-address GENESIS_NODE_IP:9012 \
      --p2p-peer-address GENESIS_NODE_IP:9013 \
    >> $DATADIR"/nodeos.log" 2>&1 & \
    echo $! > $DATADIR"/eosd.pid"
    ```
    > Remember to replace `EOS_PUB_DEV_KEY` and `EOS_PRIV_DEV_KEY` with the previous generated key pair, also replace GENESIS_NODE_IP
1. Finally, assign execution permission to the script:
    ```bash
    $ cd ~/biosboot/genesis/
    $ chmod 755 genesis_start.sh
    $ ./genesis_start.sh
    ```
Once the previous command were executed, the genesis node that will bring **eosio** as a name will be able to:
1. Produce blocks
1. Listen HTTP requests at `SPECIFIED_GENESIS_NODE_IP:8888`
1. Listen connection requests with other nodes at `SPECIFIED_GENESIS_NODE_IP:9010`
1. Print smart contracts output in the terminal

## nodeos Service Registries
You can inspect the nodeos service registries with the following commands:
```bash
$ cd ~/biosboot/genesis/
$ tail -f ./blockchain/nodeos.log
``` 
> To exit log print mode, press CTRL+C.

## `eosio.contracts` Configuration and Compilation
It is necessary to install the latest version of `eosio.contracts` along with **v1.8.0** version. To facilitate the understanding of the steps here described, the latest version will be referred as `EOSIO_CONTRACTS_DIRECTORY` and the `v1.8.0` as `EOSIO_OLD_CONTRACTS_DIRECTORY`.

The following installation steps must be followed in the order they appear.
1. Clone and compile the `eosio.contracts`:
    ```bash
    $ cd ~
    $ git clone https://github.com/EOSIO/eosio.contracts.git
    $ cd ./eosio.contracts/
    $ ./build.sh
    $ cd ./build/contracts/
    ```
1. Clone and install `eosio.cdt` `v1.6.3` (necessary version to compile `eosio.contracts` `v1.8.0`):
    ```bash
    $ wget https://github.com/eosio/eosio.cdt/releases/download/v1.6.3/eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
    $ sudo apt install ./eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
    ```
1. Clone and compile `eosio.contracts` `v1.8.0`:
    ```bash
    $ cd ~
    $ git clone https://github.com/EOSIO/eosio.contracts.git eosio.contracts-1.8.x
    $ cd ./eosio.contracts-1.8.x/
    $ git checkout release/1.8.x
    $ ./build.sh
    $ cd ./build/contracts/
    ```
## `eosio.bios` Contract Deployment
### Activate `PREACTIVATE_FEATURE`
Due to updates introduced in v1.8 and v2.0, it is necessary to activate a protocol feature called PREACTIVATE_FEATURE. To activate this feature, execute the following command:
```bash
$ curl --request POST \
	--url http://GENESIS_NODE_IP:8888/v1/producer/schedule_protocol_feature_activations \
	-d '{"protocol_features_to_activate": ["0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd"]}' 
```
### Deploy **Old** Contracts Version
Now it is necessary to deploy the old version of the smart contracts (`EOSIO_OLD_CONTRACTS_DIRECTORY`), for this it execute the following command:
```bash
$ cleos set contract eosio EOSIO_OLD_CONTRACTS_DIRECTORY/eosio.bios/
```
**Expected output:**
```bash 
Reading WAST/WASM from /users/documents/eos/build/contracts/eosio.bios/eosio.bios.wasm...
Using already assembled WASM...
Publishing contract...
executed transaction: 2150ed87e4564cd3fe98ccdea841dc9ff67351f9315b6384084e8572a35887cc  39968 bytes  4395 us
#         eosio <= eosio::setcode               {"account":"eosio","vmtype":0,"vmversion":0,"code":"0061736d0100000001be023060027f7e0060067f7e7e7f7f...
#         eosio <= eosio::setabi                {"account":"eosio","abi":{"types":[],"structs":[{"name":"buyrambytes","base":"","fields":[{"name":"p...
```
Now that the old version of the contracts has been deployed, it is also necessary to activate special features that are recommended for networks based on the EOSIO protocol. To activate these features, execute the following commands:
```bash
# GET_SENDER
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["f0af56d2c5a48d60a4a5b5c903edfb7db3a736a94ed589d0b797df33ff9d3e1d"]' -p eosio

# FORWARD_SETCODE
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["2652f5f96006294109b3dd0bbde63693f55324af452b799ee137a81a905eed25"]' -p eosio

# ONLY_BILL_FIRST_AUTHORIZER
cleos push action eosio activate '["8ba52fe7a3956c5cd3a656a3174b931d3bb2abb45578befc59f283ecd816a405"]' -p eosio

# RESTRICT_ACTION_TO_SELF
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["ad9e3d8f650687709fd68f4b90b41f7d825a365b02c23a636cef88ac2ac00c43"]' -p eosio

# DISALLOW_EMPTY_PRODUCER_SCHEDULE
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["68dcaa34c0517d19666e6b33add67351d8c5f69e999ca1e37931bc410a297428"]' -p eosio

 # FIX_LINKAUTH_RESTRICTION
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["e0fb64b1085cc5538970158d05a009c24e276fb94e1a0bf6a528b48fbc4ff526"]' -p eosio

 # REPLACE_DEFERRED
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["ef43112c6543b88db2283a2e077278c315ae2c84719a8b25f25cc88565fbea99"]' -p eosio

# NO_DUPLICATE_DEFERRED_ID
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["4a90c00d55454dc5b059055ca213579c6ea856967712a56017487886a4d4cc0f"]' -p eosio

# ONLY_LINK_TO_EXISTING_PERMISSION
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["1a99a59d87e06e09ec5b028a9cbb7749b4a5ad8819004365d02dc4379a8b7241"]' -p eosio

# RAM_RESTRICTIONS
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["4e7bf348da00a945489b2a681749eb56f5de00b900014e137ddae39f48f69d67"]' -p eosio

# WEBAUTHN_KEY
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["4fca8bd82bbd181e714e283f83e1b45d95ca5af40fb89ad3977b653c448f78c2"]' -p eosio

# WTMSIG_BLOCK_SIGNATURES
cleos -u http://GENESIS_NODE_IP:8888 push action eosio activate '["299dcb6af692324b899b39f16d5a530a33062804e41f09dc97e9f156b4476707"]' -p eosio
```
### Deploy Latest Contracts Version
Once the old version of the contracts has been deployed and the features have been activated, we proceed to deploy the recent version of the contracts:
```bash
$ cleos -u http://GENESIS_NODE_IP:8888 set contract eosio.bios EOSIO_CONTRACTS_DIRECTORY/eosio.bios/
```
**Expected output:**
```bash
Reading WAST/WASM from ·/users/documents/eos/contracts/eosio.bios/eosio.bios.wasm...
Using already assembled WASM...
Publishing contract...
executed transaction: 17fa4e06ed0b2f52cadae2cd61dee8fb3d89d3e46d5b133333816a04d23ba991  8024 bytes  974 us
#         eosio <= eosio::setcode               {"account":"eosio.bios","vmtype":0,"vmversion":0,"code":"0061736d01000000017f1560037f7e7f0060057f7e...
#         eosio <= eosio::setabi                {"account":"eosio.bios","abi":{"types":[],"structs":[{"name":"transfer","base":"","fields":[{"name"...
```
## Block Producer Nodes: Configuration and Execution
We must create the configuration files for each block producer in each server. Since three block producers were conceived in the [topology](#private-network-installation-tutorial), let's proceed to create their corresponding files. To do this, execute the following commands:
```bash
$ cd ~
$ mkdir producer1

$ touch ~/producer1/config.ini
$ touch ~/producer1/genesis.json
$ touch ~/producer1/start.sh

```
Once the files are created, copy the code snippet content to each corresponding file and repeat the process for each directory on each server (rename the directory according to the node):

### `config.ini`
```bash
agent-name = producer1 # CHANGE THIS ACCORDING TO THE NODE NAME

# PLUGINS
plugin = eosio::chain_plugin
plugin = eosio::chain_api_plugin
plugin = eosio::http_plugin
plugin = eosio::producer_plugin
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
producer-name = producer1 # CHANGE THIS ACCORDING TO THE NODE

# PEERING NETWORK
p2p-server-address =  PRODUCER1_IP:9876     # CHANGE THIS ACCORDING TO THE NODE IP
p2p-listen-endpoint = 0.0.0.0:9876
p2p-max-nodes-per-host = 150
max-clients = 150
connection-cleanup-period = 30
sync-fetch-span = 2000
allowed-connection = any

p2p-peer-address = SEED_NODE_IP:SEED_NODE_PORT
p2p-peer-address = PRODUCER2_IP:PRODUCER2_PORT        # CHANGE THIS ACCORDING TO THE NODE
p2p-peer-address = PRODUCER3_IP:PRODUCER3_PORT        # CHANGE THIS ACCORDING TO THE NODE
p2p-peer-address = API_NODE_IP:API_NODE_PORT
```
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
### `start.sh`
```bash
#!/usr/bin/env bash
DATA_DIR="blockchain"
CONFIG_DIR="./blockchain/config"
EOS_PUB_KEY=EOS_PUB_PRODUCER1_KEY  # CHANGE THIS ACCORDING TO THE NODE
EOS_PRIV_KEY=EOS_PRIV_PRODUCER1_KEY  # CHANGE THIS ACCORDING TO THE NODE
echo "Starting VALIDATOR Node...";
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
To run each node it is necessary to enter the directory, assign permissions and execute each `start.sh` file:
```bash
$ chmod 755 start.sh # assign execution permission
$ ./start.sh
```
## Create Block Producer Accounts
```bash
$ cleos -u http://GENESIS_NODE_IP:8888 create account eosio producer1 EOS_PUB_PRODUCER1_KEY
$ cleos -u http://GENESIS_NODE_IP:8888 create account eosio producer2 EOS_PUB_PRODUCER2_KEY
$ cleos -u http://GENESIS_NODE_IP:8888 create account eosio producer3 EOS_PUB_PRODUCER3_KEY
```

## Set Block Producers Schedule
Create the `producers.json` file and paste the following content into it:
```json
{"schedule":
  [
    {
      "producer_name": "producer1", 
      "authority": [
        "block_signing_authority_v0",
        {
          "threshold": 1,
          "keys": [
            {
              "key":"EOS_PUB_PRODUCER1_KEY",
              "weight":1
            }
          ]
        }
      ]
    },
    {
      "producer_name":"producer2",
      "authority": [
        "block_signing_authority_v0",
        {
          "threshold":1,
          "keys": [
            {
              "key":"EOS_PUB_PRODUCER2_KEY",
              "weight":1
            }
          ]
        }
      ]
    },
    {
      "producer_name":"producer3",
      "authority": [
        "block_signing_authority_v0",
        {
          "threshold":1,
          "keys": [
            {
              "key":"EOS_PUB_PRODUCER3_KEY",
              "weight":1
            }
          ]
        }
      ]
    }
  ]
}
```
Now, execute the following command to set the schedule:
```bash
$ cleos -u http://GENESIS_NODE_IP:8888 push action eosio setprods "producers.json" -p eosio@active
```
## API Node: Configuration and Execution
```bash
$ cd ~
$ mkdir api-node
$ cd api-node
$ touch config.ini
$ touch genesis.json
$ touch start.sh
```
Now copy the code snippet content to the appropriate file:
### `config.ini`
```bash
agent-name = api-node

# PLUGINS
plugin = eosio::chain_plugin
plugin = eosio::chain_api_plugin
plugin = eosio::http_plugin
plugin = eosio::producer_plugin
plugin = eosio::producer_api_plugin
# HTTP
access-control-allow-origin = *
http-validate-host = false
verbose-http-errors = true
http-server-address = 0.0.0.0:80

# SSL
#https-server-address = 0.0.0.0:443
#https-certificate-chain-file = ./ssl/domain.crt
#https-private-key-file = ./ssl/domain.priv.key

# CHAIN 
chain-state-db-size-mb = 16384
reversible-blocks-db-size-mb = 512
abi-serializer-max-time-ms = 2000	
contracts-console = true

# PEERING NETWORK
p2p-listen-endpoint = 0.0.0.0:9876
p2p-server-address =  API_NODE_IP:9876
p2p-max-nodes-per-host = 150
max-clients = 150
sync-fetch-span = 2000

p2p-peer-address = PRODUCER1_IP:PRODUCER1_PORT
p2p-peer-address = PRODUCER2_IP:PRODUCER2_PORT
p2p-peer-address = PRODUCER3_IP:PRODUCER3_PORT
p2p-peer-address = SEED_NODE_IP:SEED_NODE_PORT
```
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
### `start.sh`
```bash
#!/usr/bin/env bash
DATA_DIR="blockchain"
CONFIG_DIR="./blockchain/config"
echo "Starting API Node...";
set -e;
ulimit -n 65535
ulimit -s 64000
mkdir -p $CONFIG_DIR
cp ./config.ini $CONFIG_DIR/config.ini
pid=0;
nodeos=$"nodeos \
 --config-dir $CONFIG_DIR \
 --data-dir $DATA_DIR \
 --blocks-dir $DATA_DIR/blocks" ;
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
To start the node, assign execute permissions to `start.sh` and run it:
```bash
$ chmod 755 start.sh
$ ./start.sh
```
## Seed Node: Configuration and Execution
```bash
$ cd ~
$ mkdir seed
$ touch config.ini
$ touch genesis.json
$ touch start.sh 
```
Now copy the code snippet content to the appropriate file:
### `config.ini`
```bash
# EOSIO Testnet SEED NODE Config file
# https://eoscostarica.io

agent-name = seed

# PLUGINS
plugin = eosio::chain_plugin

# CHAIN 
chain-state-db-size-mb = 16384
reversible-blocks-db-size-mb = 512
contracts-console = true
abi-serializer-max-time-ms = 2000

# PEERING NETWORK
p2p-listen-endpoint = 0.0.0.0:9876
p2p-server-address = SEED_NODE_API:9876

p2p-peer-address = PRODUCER1_IP:PRODUCER1_PORT
p2p-peer-address = PRODUCER2_IP:PRODUCER2_PORT
p2p-peer-address = PRODUCER3_IP:PRODUCER3_PORT
p2p-peer-address = API_NODE_IP:API_NODE_PORT
```
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
### `start.sh`
```bash
#!/usr/bin/env bash
echo "Starting SEED Node...";
set -e;
ulimit -n 65535
ulimit -s 64000

mkdir -p $CONFIG_DIR
cp $WORK_DIR/config.ini $CONFIG_DIR/config.ini

pid=0;

nodeos=$"nodeos \
  --config-dir $CONFIG_DIR \
  --data-dir $DATA_DIR \
  --blocks-dir $DATA_DIR/blocks" ;

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
  $nodeos --delete-all-blocks --genesis-json $WORK_DIR/genesis.json &
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
To start the seed node, simply assign execution permissions to the `start.sh` file and execute it:
```bash
$ chmod 755 start.sh
$ ./start.sh
```
## Stop the nodeos Service
Create the file `stop.sh` in the `~/biosboot/genesis/` directory and copy the following contents:
```bash
#!/bin/bash
DATADIR="./blockchain/"

if [ -f $DATADIR"/eosd.pid" ]; then
    pid=`cat $DATADIR"/eosd.pid"`
    echo $pid
    kill $pid
    rm -r $DATADIR"/eosd.pid"
    echo -ne "Stopping Node"
    while true; do
        [ ! -d "/proc/$pid/fd" ] && break
        echo -ne "."
        sleep 1
    done
    echo -ne "\rNode Stopped. \n"
fi
```
Now you can execute `stop.sh` file:
```bash
$ chmod 755 stop.sh 
$ ./stop.sh
```
## Reboot the nodeos Service
It is important to take into account that once the node is producing blocks it is not possible to restart the nodeos service using the same script created in the section [Start the nodeos service](#start-the-nodeos-service), since the blockchain database already contains information from the initial execution. This is why it is recommended to create a new script with the name `start.sh`. This file can continue to be used for future restarts of the node once the process is stopped.

Copy and paste the following content into the `start.sh` file:
```bash
#!/bin/bash
DATADIR="./blockchain"
EOS_PUB_KEY=EOS_PUB_KEY_HERE
EOS_PRIV_KEY=EOS_PRIV_KEY_HERE
if [ ! -d $DATADIR ]; then
 mkdir -p $DATADIR;
fi
nodeos \
--signature-provider EOS_PUB_KEY=KEY:EOS_PRIV_KEY \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_api_plugin \
--plugin eosio::history_plugin \
--data-dir "blockchain/data" \
--blocks-dir $DATADIR"/data/blockchain/blocks" \
--config-dir $DATADIR"/config" \
--producer-name eosio \
--http-server-address NODE_IP_HERE:8888 \ # configurable
--p2p-listen-endpoint NODE_IP_HERE:9010 \ # configurable
--access-control-allow-origin=* \
--contracts-console \
--http-validate-host=false \
--verbose-http-errors \
--enable-stale-production \
--p2p-peer-address PRODUCER1_IP:PRODUCER1_PORT \
--p2p-peer-address PRODUCER2_IP:PRODUCER2_PORT \
--p2p-peer-address PRODUCER3_IP:PRODUCER3_PORT \
>> $DATADIR"/nodeos.log" 2>&1 & \
echo $! > $DATADIR"/eosd.pid"
```

Now, assign execution permissions to the `start.sh` file and execute it:
```bash
$ chmod 755 start.sh
$ ./start.sh
```

The following code fragment corresponds to the `hard_replay.sh` script with the `--hard-replay-blockchain` flag:
```bash
DATADIR="./blockchain"

if [ ! -d $DATADIR ]; then
  mkdir -p $DATADIR;
fi

nodeos \
--signature-provider EOS_PUB_DEV_KEY=KEY:EOS_PRIV_DEV_KEY \
--plugin eosio::producer_plugin \
--plugin eosio::producer_api_plugin \
--plugin eosio::chain_plugin \
--plugin eosio::chain_api_plugin \
--plugin eosio::http_plugin \
--plugin eosio::history_api_plugin \
--plugin eosio::history_plugin \
--data-dir $DATADIR"/data" \
--blocks-dir $DATADIR"/blocks" \
--config-dir $DATADIR"/config" \
--producer-name eosio \
--http-server-address IP_NODE_HERE:8888 \ # configurable
--p2p-listen-endpoint IP_NODE_HERE:9010 \ # configurable
--access-control-allow-origin=* \
--contracts-console \
--http-validate-host=false \
--verbose-http-errors \
--enable-stale-production \
--p2p-peer-address IP_PRODUCER1:PRODUCER1_PORT \
--p2p-peer-address IP_PRODUCER2:PRODUCER2_PORT \
--p2p-peer-address IP_PRODUCER3:PRODUCER3_PORT \
--hard-replay-blockchain \
>> $DATADIR"/nodeos.log" 2>&1 & \
echo $! > $DATADIR"/eosd.pid"
```
> **“perhaps we need to replay”**: this error may occur when restarting nodeos due to a missing `--hard-replay-blockchain` flag (parameter that replays all transactions from the genesis node). To fix this error, run the `hard_replay.sh` script.

## Reboot nodeos from Scratch
To restart the nodeos service from scratch, create the `clean.sh` script, copy the following content and give it execution permissions (`chmod 755 clean.sh`):
```bash
#!/bin/bash
rm -fr blockchain
ls -al
```
If you want to delete the current configuration, blockchain data and log files, execute the following commands in the order they appear:
```bash
$ cd ~/biosboot/genesis/
$ ./stop.sh
$ ./clean.sh
$ ./genesis_start.sh
```
## Interacting with the Network
At this point, the network is able to host any contract. Let's suppose you want to deploy a contract like [easycontract](https://github.com/eoscostarica/eoscr-smart-contracts/tree/master/easycontract) EOS Costa Rica's example repo. After you follow the specified instructions there, you can call easycontract's `save` ACTION like following:
```bash
cleos -u NODE_URL_HERE push action easycontract save '{"date":"2021/01/10 21:01:35","filename":"ejemplo.pdf","path":"/var/www/docs"}' -p easycontract@active
```
After the execution, you will get an output in the terminal.
### Get Stored Data
```bash
cleos -u NODE_URL_HERE get transaction TRANSACTION_ID_HERE
```