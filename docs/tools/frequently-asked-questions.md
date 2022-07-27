---
id: frequently-asked-questions
title: Frequently Asked Questions 
sidebar_label: FAQs
description: Frequently asked questions EOS Costa Rica
keywords: [ EOS Costa Rica, EOS, FAQ, Frequently Asked Questions, EOSIO questions ]
---


At EOS Costa Rica we are interested in the doubts of our engineers.

Good development is key to the success of each of our products, so we seek to provide the best answers to each of your questions.

Below is a list of the questions most frequently asked during the development process documented by our workers.


## What is a SSH (Secure Shell) ?

The `SSH` is also known as Secure Shell or Secure Socket Shell, it is a protocol that you can use to connect and aunthenticate to remote servers and services. [More About SSH in GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh)


## What is the difference between a Regular Account and a Blockcahin Account?

| Regular Account | Blockchain Account |  
|------|------|
|-Password is stored on company servers <br/> -Prone to be hack <br/> -No transparency   | -Should be kept secret <br/> -Assymmetric crytography <br/> -Public key and private key <br/> -Different key pairs have different permissions asociated   |


## What is EOSIO ?

It is a blockchain platform. Built for both public and private use cases. It is customizable to suit a wide range of business needs across industries with rich role-based security.


## What is the difference between a public and private key?


They are part of the `Asymmetric Cipher`. Imagine a lock where the public key is used for closing the lock (encrypt the message) and the private key is used for opening the lock (decrypt the message). 
Mentioned in Whitfield Diffie and Martin Hellman 1976 paper `New Directions in Cryptography`

>Public and private key definition can be found in the Tools, Glossary section.  

[More information on how it works](https://www.preveil.com/blog/public-and-private-key/)


## What are the best practices for programming in JavaScript?


Following ** a standard makes it easier to understand the code **, more than one engineer works in a software project and being able to understand the code is vital for the development flow of the final product. Some of the most outstanding recommendations of this stardard are the following:
- Use single quote

    ```js
    console.log('hello there')    // ✓ ok
    console.log("hello there")    // ✗ avoid
    console.log(`hello there`)    // ✗ avoid
    $("<div class='box'>")        // ✓ ok
    console.log(`hello ${name}`)  // ✓ ok
    ```

- Add a space after a keyword

    ```js
    if (condition) { ... }   // ✓ ok
    if(condition) { ... }    // ✗ avoid
    ```

- Add a space before the declaration of the parentheses of the function

    ```js
    function name (arg) { ... }   // ✓ ok
    function name(arg) { ... }    // ✗ avoid
    run(function () { ... })      // ✓ ok
    run(function() { ... })       // ✗ avoid
    ```

For more information on the guidelines to follow, see [JavaScript Standard Style](https://standardjs.com/rules.html)

## Why Blockchain?

A blockchain is a data registry that works as a large ledger of accounts shared between several users or "nodes" in which transactions are recorded in a reliable and secure way. In this ledger, "blocks" are recorded, which are collections of data. These blocks are connected to each other in a chronological way creating a kind of chain.
For more details, see [How does a blockchain work?](https://eoscostarica.medium.com/https-medium-com-eoscostarica-que-es-blockchain-d54d42439ef3)

## How does a Smart Contract work?

A contract is simply a formalization agreement between two or more parties. It must define the scope, how to act and the consequences of acting in a different way. However, traditional contracts can present a problem: they are subject to interpretation.
For more details on a smart contract, you can see [What is a smart contract?](https://eoscostarica.medium.com/qu%C3%A9-es-un-smart-contract-793d2042c65d)

