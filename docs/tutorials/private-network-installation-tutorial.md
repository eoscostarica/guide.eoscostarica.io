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
Before to configure the genesis node it is necessary to create a directory called `~/biosboot/genesis`, this due to protocol particularities. So, for this execute the following:
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