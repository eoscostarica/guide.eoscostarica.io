---
id: consensus-mechanisms-blockchain
title: Consensus Mechanisms Blockchain
sidebar_label: Consensus Mechanisms
---

It is important to understand the consensus mechanisms used by the different blockchain networks to maintain security and integrity within the network, as well as the benefits and the networks that still conform it.

## Proof of Work (PoW)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/3EUAcxhuoU4" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

It is the first consensus mechanism presented by Satoshi Nakamoto in the Bitcoin whitepaper in 2008, in this consensus a group of transactions called "Mempool" are verified by the "miners", who solve a complex mathematical problem (which increases in complexity the more blocks are validated) so specialized computer equipment is required in this case of "mining" and in turn large amounts of energy.

The first miner who finds the solution to the problem and this is tested by the other miners obtains the right to add the "Mempool" to the blockchain and obtain a "Block reward" composed of cryptocurrencies generated by the transaction fees.

Due to the high requirements to be able to "mine", mining groups or "Pool mining" have been formed in order to find the solution to the mathematical problem with the use of resources, thus having better chances of finding the solution first than individual miners with greater resources and the reward obtained is distributed among the members of the pool.

Currently the networks that use this consensus mechanism are:

- Bitcoin.
- Ethereum (In the future it is possible that it will change to PoS).
- Monero.
- Among others.

For more information you can visit the following [link](https://guide.eoscostarica.io/docs/tools/glossary#proof-of-work).

## Proof of Stake (PoS)

<figure class="video_container">
  <iframe width="100%" height="315" src="https://www.youtube.com/embed/psKDXvXdr7k" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

This consensus mechanism was born in 2011 with the purpose of eliminating those limitations present in its predecessor proof of work, instead of "miners" that require resources for the verification of transactions such as specialized equipment and large amounts of energy to "validators" who are owners of coins and put as collateral ["Stake"](https://guide.eoscostarica.io/docs/tools/glossary/#stake) a certain amount of coins, being chosen randomly the validators responsible for "validating" or "mining" in case there is a corrupt validator will lose the stake and will not be able to be a validator in the future.

For the validation of transactions, in EOSIO a supermajority of 2/3 +1 is required for consensus (this figure may vary depending on the network) of the total number of validators are required to approve the transaction block. The following aspects are taken into consideration for the choice of validators:

- Amount of tokens staked (the higher the amount, the higher the probability of being chosen).
- Age of the coins bet, once they are used they are reset to 0 (the longer the time without being used, the higher the probability of being chosen).
- Random selection.

As we can see, it is a mechanism that favors the largest holders of coins and this in turn expects them to act in good faith and severely punishes those who do not, the reward being much less than the risk.

Currently the networks that use this consensus mechanism are:

- Dash.
- Ethereum (In the future).
- EOS / EOSIO.
- Among others.

## Differences between Mechanisms

| Aspect | Proof of Work (PoW) | Proof of Stake (PoS) | Delegate Proof of Stake (DPoS) |
| :---- | :----: | :----: | :----: |  
| Equipment Requirements | Specialized Equipment | Equipment with Internet Connection | Equipment with Internet Connection |  
| Who is in charge of validating the transactions | They are validated by the first miner to find the solution | The person chosen by the system | The delegate chosen by the system | The delegate chosen by the system |
| How the validator is chosen | The miners compete in trying to solve the mathematical problem | The person with the highest stake or stake age | Elections are held within the community and the stake is awarded to the chosen delegate | The person with the highest stake or stake age | The person with the highest stake or stake age is chosen
| Main strengths | It is a very secure mechanism | It is more user-friendly and involves the community more | It allows for greater democracy on the part of the community | It is a very safe mechanism
| Main challenges | Extremely costly | Favors those with greater resources | Requires a very involved community |

If you want to learn more about Delegate Proof of Stake (DPoS) you can visit the following [link](https://guide.eoscostarica.io/docs/eos-learn/consensus-mechanism#delegated-proof-of-stake-dpos).

## Others Consensus Mechanisms

There are other consensus mechanisms that are not as popular in blockchain communities which are as follows:

### Proof of Capacity (PoC)

This mechanism like the proof of work mining is performed, but as the main difference is the use of hard disks as the main resource of computational power. Solving PoW and PoS problems due to the higher capacity with hard disks.

### Proof of Activity (PoA)

This mechanism uses the best features of PoW and PoS being an example that a block of transactions is validated by mining (PoW) is switched to the validator election system (PoS) once validated is switched to the mining system.

### Proof of Burn (PoB)

This mechanism was born as a solution to the high energy expenditure by PoW, making use of the idea of burning energy, to validate a block of transactions "burn" tokens to obtain more mining power as a rig, the more tokens are burned more power is obtained.

### Proof of History (PoH)

This mechanism is born with a very old proposal, but different from the previous mechanisms, since it registers the exact time and hour between 2 events in a hash function, even though it would be impossible to change the register in all the computers of the network.

### Proof of Elapsed Time (PoET)

This mechanism was born as an Intel solution to the advantage obtained by those with more resources when looking for the fairest block validator election system, like a lottery within the network.


If you want to learn more about the different consensus mechanisms, you can visit the following [link](https://www.allerin.com/blog/8-blockchain-consensus-mechanisms-you-should-know-about).