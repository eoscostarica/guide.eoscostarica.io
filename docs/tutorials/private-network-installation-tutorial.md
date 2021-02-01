# Private network installation tutorial
Several topologies can be designed in the sense of quantity of nodes or redundancy of the data, nevertheless, for the practicity of this tutorial, the following topology is used as a main reference:
<p style={{ align: "center" }}>
  <img src="/img/private-network-installation-tutorial/initial-topology.png" width="100%" />
</p>

# Software requirements

At the time of configuring a private EOSIO network there are some software installation requirements:
1. EOSIO precompiled binaries installation
1. EOSIO.CDT binaries installation

## EOSIO precompiled binaries installation
Execute the following commands to install EOSIO precompiled binaries:
```bash
$ wget https://github.com/eosio/eos/releases/download/v2.0.9/eosio_2.0.9-1-ubuntu-18.04_amd64.deb
$ sudo apt install ./eosio_2.0.9-1-ubuntu-18.04_amd64.deb
```
Once you installed EOSIO binaries; nodeos, a blockchain configuration from scratch and P2P networks interactions are among available functionalities the protocol provides.

> To uninstall EOSIO execute `$ sudo apt remove eosio`

## EOSIO.CDT (Contract Development Toolkit) binaries installation
EOSIO.CDT is a toolkit that facilitates smart contract development in a EOSIO blockchain networks. To install EOSIO.CDT v1.6.3 execute the following commands:
```bash
$ wget https://github.com/eosio/eosio.cdt/releases/download/v1.6.3/eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
$ sudo apt install ./eosio.cdt_1.6.3-1-ubuntu-18.04_amd64.deb
```
# Genesis node configuration
Before to configure the genesis node, it is necessary to create a directory called `~/biosboot/genesis`, this due to protocol particularities. So, for this execute the following:
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
> This can be changed later on using privileged `set_param` function. Read more [here](https://guide.eoscostarica.io/docs/eos-learn/important-functions#set_params).

# Start the nodeos service
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
      --p2p-peer-address localhost:9011 \
      --p2p-peer-address localhost:9012 \
      --p2p-peer-address localhost:9013 \
    >> $DATADIR"/nodeos.log" 2>&1 & \
    echo $! > $DATADIR"/eosd.pid"
    ```
    > Remember to replace `EOS_PUB_DEV_KEY` and `EOS_PRIV_DEV_KEY` with previous generated key pair.
1. Finally, assign execution permission to the script:
    ```bash
    $ cd ~/biosboot/genesis/
    $ chmod 755 genesis_start.sh
    $ ./genesis_start.sh
    ```
Once the previous command were executed, the genesis node that will bring **eosio** as a name will be able to:
1. Produce blocks
1. Listen HTTP requests at `127.0.0.1:8888`
1. Listen connection requests with other nodes at `127.0.0.1:9010`
1. Print smart contracts output in the terminal

# nodeos service registries
You can inspect the nodeos service registries with the following commands:
```bash
$ cd ~/biosboot/genesis/
$ tail -f ./blockchain/nodeos.log
``` 
> To exit log print mode, press CTRL+C.

# `eosio.contracts` configuration and compilation
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
1. Clone and install `eosio.cdt` `v1.6.3`:
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
    $ pwd
    ```
# `eosio.bios` contract deployment
## Activate `PREACTIVATE_FEATURE`
Due to updates introduced in v1.8 and v2.0, it is necessary to activate a protocol feature called PREACTIVATE_FEATURE. To activate this feature, execute the following command:
```bash
$ curl --request POST \
	--url http://127.0.0.1:8888/v1/producer/schedule_protocol_feature_activations \
	-d '{"protocol_features_to_activate": ["0ec7e080177b2c02b278d5088611686b49d739925a92d9bfcacd7fc6b74053bd"]}' 
```
## Deploy **old** contracts version
Now it is necessary to deploy the old version of the smart contracts (EOSIO_OLD_CONTRACTS_DIRECTORY), for this it execute the following command:
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
cleos push action eosio activate '["f0af56d2c5a48d60a4a5b5c903edfb7db3a736a94ed589d0b797df33ff9d3e1d"]' -p eosio

# FORWARD_SETCODE
cleos push action eosio activate '["2652f5f96006294109b3dd0bbde63693f55324af452b799ee137a81a905eed25"]' -p eosio

# ONLY_BILL_FIRST_AUTHORIZER
cleos push action eosio activate '["8ba52fe7a3956c5cd3a656a3174b931d3bb2abb45578befc59f283ecd816a405"]' -p eosio

# RESTRICT_ACTION_TO_SELF
cleos push action eosio activate '["ad9e3d8f650687709fd68f4b90b41f7d825a365b02c23a636cef88ac2ac00c43"]' -p eosio

# DISALLOW_EMPTY_PRODUCER_SCHEDULE
cleos push action eosio activate '["68dcaa34c0517d19666e6b33add67351d8c5f69e999ca1e37931bc410a297428"]' -p eosio

 # FIX_LINKAUTH_RESTRICTION
cleos push action eosio activate '["e0fb64b1085cc5538970158d05a009c24e276fb94e1a0bf6a528b48fbc4ff526"]' -p eosio

 # REPLACE_DEFERRED
cleos push action eosio activate '["ef43112c6543b88db2283a2e077278c315ae2c84719a8b25f25cc88565fbea99"]' -p eosio

# NO_DUPLICATE_DEFERRED_ID
cleos push action eosio activate '["4a90c00d55454dc5b059055ca213579c6ea856967712a56017487886a4d4cc0f"]' -p eosio

# ONLY_LINK_TO_EXISTING_PERMISSION
cleos push action eosio activate '["1a99a59d87e06e09ec5b028a9cbb7749b4a5ad8819004365d02dc4379a8b7241"]' -p eosio

# RAM_RESTRICTIONS
cleos push action eosio activate '["4e7bf348da00a945489b2a681749eb56f5de00b900014e137ddae39f48f69d67"]' -p eosio

# WEBAUTHN_KEY
cleos push action eosio activate '["4fca8bd82bbd181e714e283f83e1b45d95ca5af40fb89ad3977b653c448f78c2"]' -p eosio

# WTMSIG_BLOCK_SIGNATURES
cleos push action eosio activate '["299dcb6af692324b899b39f16d5a530a33062804e41f09dc97e9f156b4476707"]' -p eosio
```
## Deploy latest contracts version
Once the old version of the contracts has been deployed and the features have been activated, we proceed to deploy the recent version of the contracts:
```bash
$ cleos set contract eosio.bios EOSIO_CONTRACTS_DIRECTORY/eosio.bios/
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