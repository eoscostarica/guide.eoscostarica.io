---
id: system-resources
title: EOSIO System Resources
sidebar_label: System Resources
description: Use of EOSIO System Resources
keywords: [EOSIO, System Resources, EOS, EOS Costa Rica, eosio.io, What is System Resources, What is the EOSIO System Resources, Blockchain Resources]
---

## Type of Resources

The accounts will be able to use the following resources in the network:

### RAM

In an EOSIO network, RAM is the memory storage space where the blockchain stores data, it is measured in kilobytes (KiB). If your contract needs to store data in a blockchain table, like in a database, then it can store it in the blockchain's RAM.

RAM is a very important resource and it is a limited one. It is used when executing many actions that are available on the blockchain, when creating a new account for example the information for that account is stored in the blockchain’s memory. Also when an account accepts a new type of token a new record has to be created somewhere in the blockchain memory that holds the balance of the new token accepted, and that memory, the storage space on the blockchain, has to be purchased either by the account that transfers the token or by the account that accepts the new token type.

RAM is referred to as `memory` in the following `cleos get account` output:

```C++
memory:
quota: 86.68 KiB
used: 11.62 KiB  
```

You can find more details about RAM as a resource in the guide [Ram EOSIO Contracts](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/ram).

### CPU

CPU is processing power, the amount of CPU an account has is measured in microseconds (μs), it is referred to as `CPU bandwidth` the `cleos get account` command outputs the amount of processing time an account has at its disposal when pushing actions to a contract.

You can find more details about the CPU as a resource in the guide [CPU EOSIO Contracts](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/cpu)

### Network (NET)

As CPU and RAM, NET is also a very important resource in EOSIO-based blockchains. NET is the network bandwidth measured in bytes of transactions and it is referred to as `net bandwidth`.

You can find more details about NET as a resource in the guide [NET EOSIO Contracts](https://developers.eos.io/manuals/eosio.contracts/latest/key-concepts/net).

## Account Resource Limits

Every account on a EOSIO-based blockchain has resource limits for CPU/NET and RAM associated with it. These limits specify how much of each resource can be used by the account and they can be dynamically changed by calling the privileged API `set_resource_limits`.

The difference between CPU/NET and RAM resource limits is that RAM, since its a limited resource, once used the only way to recover it is to free the storage space used. On the other side, CPU and NET will be fully replenished when the account is not using the network for a period of time. By default this period is set to 24 hours.

## Resource Billing

When a user (account) wants to interact with a smart-contract (another account) a transaction is created with an action in it that specifies the smart function to call together with the account (permission level) that is authorizing the action.

Then, after signing with the keys that authorize the permission level specified in the action, the transaction is broadcasted to the network until it reaches the current block-producer in the schedule.

The block-producer will execute all actions inside the transaction and bill the time used to execute them (CPU) to the first account authorizing the first action. Also, it will bill the first authorizing account for the size of the transaction (NET).

If the actions performed by the smart-contract involves any kind of data storage, the smart-contract can choose to use the RAM resources of any of the transaction authorizing accounts or use the RAM resources of the smart-contract account.

## CPU and NET as Elastic Resources

The `resource limit manager` of an EOSIO-based blockchain is the part of the protocol that keeps track of the amount of available network resources at any time and how much resources each account is using.

In particular, it treats CPU and NET as elastic resources allowing users to consume more resources than what they are entitled to while this resource is below a desired usage (un-congested).

An elastic resource has the following properties.

- The desired usage.
- The maximum usage.
- The number of aggregation periods that contribute to the average usage.
- The multiplier by which virtual space can oversell usage when un-congested.
- The rate at which a congested resource contracts its limit.
- The rate at which an un-congested resource expands its limits.

Let see at the default configuration for the CPU resource as an example:

```c++
const static uint32_t default_max_block_cpu_usage = 200'000; /// max block cpu usage in microseconds
const static uint32_t default_target_block_cpu_usage_pct = 10 * percent_1;
const static uint32_t block_cpu_usage_average_window_ms = 60*1000l;
```

```c++
elastic_limit_parameters cpu_limit_parameters = {
	EOS_PERCENT(config::default_max_block_cpu_usage, config::default_target_block_cpu_usage_pct), 	//10% of 200ms
	config::default_max_block_cpu_usage,//200ms
    config::block_cpu_usage_average_window_ms config::block_interval_ms, 							// 60s (120 blocks)
	1000, 																							//x1000 multiplier 
	{99, 100},																						//contract ratio 0.99 
	{1000, 999}																						//expand ratio 1.001
	};
```
By making the CPU an elastic resource, a virtual cpu will be created that will range between the lowest possible value which is the maximum usage specified and the highest possible value which is the the lowest possible value times the multiplier.

```c++
virtual cpu = [[maximum usage, maximum usage * multiplier]]
```

The virtual cpu limit will be contracted (expanded) by the `contract (expand) ratio` when the average utilization is above (below) the desired usage, meaning that `the most an account can consume during idle periods is 1000x (multiplier) the bandwidth it is guaranteed under congestion`.

The average CPU utilization is computed using an EMA (Exponential Moving Average) placing a greater weight and significance on the most recent usage.

```python
def update_elastic_limit(current_limit, average_usage, elastic_resource_limit):
   result = current_limit
   if average_usage > elastic_resource_limit.target:
      result = result * elastic_resource_limit.contract_rate
   else:
      result = result * elastic_resource_limit.expand_rate

   return min(max(result, elastic_resource_limit.max), elastic_resource_limit.max * elastic_resource_limit.max_multiplier)
```

## EOS Resource Allocation

<figure className="video_container">
  <iframe width="100%"  height="315" src="https://www.youtube.com/embed/N6CTRdx6NVE" frameBorder="0" allowFullScreen loading="lazy"> </iframe>
</figure>