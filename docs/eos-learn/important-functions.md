---
id: important-functions
title: Important Functions in EOSIO
sidebar_label: Important Functions
description: Important Functions in EOSIO Blockchain
keywords: [ important functions, Functions EOSIO, Functions Blockchain, EOS, EOS Costa Rica, Intrinsic functions , smart contract actions]
---

## EOSIO Privileged Account

This account has unlimited access to CPU, NET, and RAM resources representing the highest authority of the network which can execute privileged functions.

Usually this authority is invoked by a multi-signature (or "multisig") contract that will require the consent of a super-majorit of the block producers. This privileged account will be called the `eosio` account.

## EOSIO Privileged Features

EOSIO smart contracts are simple WebAssembly files. The WebAssembly format allows you to define imports, functions that are not declared in WASM itself but in the environment in which the WebAssembly code is run. EOSIO uses these built-in (intrinsic) functions to exchange data between the WebAssembly contract code and the EOSIO node `nodeos`. Every time the EOS virtual machine (EOSVM), which runs the WebAssembly code, reaches an intrinsic level, control of the program is transferred to the node controller code to resolve it. A complete list of intrinsic functions for EOSIO 2.0.X can be found here: [Intrinsic Functions](https://github.com/EOSIO/eosio.cdt/blob/a6b8d3fc289d46f4612588cdd7223a3d549238f6/libraries/native/native/eosio/intrinsics_def.hpp#L42-L160).

### set_resource_limits

Update the resource limits associated with an account.

``` yaml
account:  The destination account
ram_bytes:  The RAM limit in bytes
net_weight:  Weight to determine your NET capacity
cpu_weight:  Weight to determine your CPU capacity
```

### set_prods

Establish a new list of active producers (validators). Once the proposed block becomes irreversible, the new producers become active.

``` yaml
schedule: JSON with list of producers and their signing keys
```

### set_params

Modify one or more parameters of the blockchain.

- `max_block_net_usage`: The maximum amount of net usage in a block.
- `target_block_net_usage_pct`: The maximum percentage of net use, after this limit the network enters congestion mode.
- `max_transaction_net_usage:` The maximum use of net that the chain will allow, beyond the limits of the account.
- `base_per_transaction_net_usage`: The base amount of net usage billed for a transaction to cover incidentals.
- `context_free_discount_net_usage_num`: The numerator for the discount on net usage of context-free data.
- `context_free_discount_net_usage_den`: The denominator for the discount on net usage of context-free data.
- `max_block_cpu_usage`: The maximum billable cpu usage (in microseconds) for a block.
- `target_block_cpu_usage_pct`: The target percent (1% == 100, 100%= 10,000) of maximum cpu usage; exceeding this triggers congestion handling.
- `max_transaction_cpu_usage`: The maximum billable cpu usage (in microseconds) that the chain will allow regardless of account limits.
- `min_transaction_cpu_usage`: The minimum billable cpu usage (in microseconds) that the chain requires.
- `max_transaction_lifetime`: The maximum number of seconds that an input transaction's expiration can be ahead of the time of the block in which it is first included.
- `deferred_trx_expiration_window`: The number of seconds after the time a deferred transaction can first execute until it expires.
- `max_transaction_delay`: The maximum number of seconds that can be imposed as a delay requirement by authorization checks.
- `max_inline_action_size`: Maximum allowed size (in bytes) of an inline action.
- `max_inline_action_depth`: Recursion depth limit on sending inline actions.
- `max_authority_depth`: Recursion depth limit for checking if an authority is satisfied.

### set_privileged

Allows you to establish an account as privileged.

```yaml
account: The account you want to set as privileged.
is_priv:  0 for false, greater than 0 for true.
```

## System Actions

These actions do not need to be executed by a privileged account.

### new_account

Create a new account.

```yaml
creator: Name of the account that creates the new account.
name: New account name.
owner: Owner public key.
active: Active public key.
```

### set code

Set code publish or update a smart contract in an account.

```yaml
account: The account to which you want to post a contract.
code: The code in the form of a binary BLOB.
```

### set abi

It allows to establish or update the abi for the smart contract, it is identified by account_name.

```yaml
account: The name of the destination account.
abi:  The ABI.
```

### updateauth

Update an account's permissions.

```yaml
account:  The account to be modified.
pemission:  The name of the new permission.
parent: The parent permission of the new permission.
auth: The JSON defining permission authorization.
```

### deleteauth

Removes permission authorization from an account.

```yaml
account: The destination account.
permission: The name of the permission to be removed.
```

### linkauth

Assign a specific action of a contract to a specific permission, five actions cannot be linked `updateauth`, `deleteauth`, `linkauth`, `unlikauth`, `canceldelay`.

```yaml
account: The destination account.
code: Account owner of the action to link.
type: The action to be linked.
requirement: Permission to link.
```

### unlinkauth

It is the reverse of `linkauth`.

```yaml
account: The destination account.
code: Account owner of the action to be unlinked.
type: The action to be unlinked.
```

## Native Token Contract `eosio.token`

These actions can be executed by any account in order to issue their own token.

### create

Allows an issuer account to create a token.

```yaml
issuer: The account that creates the token.
maximum_supply: The maximum amount next to the token symbol.
```

### issue

This action distributes a certain number of tokens to an account.

```yaml
to: Account to which the tokens are distributed.
quantity: The amount of tokens to distribute.
memo: Memo accompanying the transaction.
```

### retire

The opposite of creating a token.

```yaml
quantity: The amount of tokens to withdraw.
memo: Memo accompanying the transaction.
```

### transfer

Transfer an "n" amount of tokens from a source account to a destination account.

```yaml
from: Source account from where tokens are debited.
to: Target account to which to credit the tokens.
quantity: The amount of tokens.
memo: Memo accompanying the transaction.
```
