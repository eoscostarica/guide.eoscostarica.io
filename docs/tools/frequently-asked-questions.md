---
id: frequently-asked-questions
title: Frequently Asked Questions 
sidebar_label: FAQ 
---
# Need Some Help?

- [What is a SSH (Secure Shell) ?](#what-is-a-ssh-(secure-shell))
- [How to generate a new SSH key?](#how-to-generate-a-new-ssh-key)
- [How to add your SSH key to the ssh-agent](#how-to-add-your-ssh-key-to-the-ssh-agent)
- [What is the difference between a public and private key?](#what-is-the-difference-between-a-public-and-private-key)


## What is a SSH (Secure Shell) ?

The `SSH` is also known as Secure Shell or Secure Socket Shell, it is a protocol that you can use to connect and aunthenticate to remote servers and services. [More About SSH in GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh)


## How to generate a new SSH key?

This guide is for Windows users , more information for Linux and Mac [on this site](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)

- Open Git Bash

- Paste the text below, substitute `"your_email@example.com"` with your GitHub email address.
```coffee
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```
---
>**NOTE :** 
If you are using a legacy system that doesn't support the `ed25519` algorithm, use:

```coffee
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
---

- It will ask for a file to save the key , just press enter. This accepts the default file location. 

- At the prompt , type a secure passphrase. For security reasons it should be as complex as possible.

Now you have a new SSH key!

## How to add your SSH key to the ssh-agent

- Ensure the ssh-agent is running [more information](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases) , or start it manually:

```coffee
#start the ssh-agent in the background
$ eval $(ssh-agent -s)
> Agent pid 59566
```
---

>**NOTE :** 
If you are following this ssh key generation flow , there is no need to start the ssh-agent.

---

- Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace `id_ed25519` in the command with the name of your private key file.

```coffee
$ ssh-add ~/.ssh/id_ed25519
```

- Now you need to add your public key to your GitHub account , for this [follow this steps](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account)

Now you are set!


## What is the difference between a public and private key?


They are part of the `Asymmetric Cipher`. Imagine a lock where the public key is used for closing the lock (encrypt the message) and the private key is used for opening the lock (decrypt the message). 
Mentioned in Whitfield Diffie and Martin Hellman 1976 paper `New Directions in Cryptography`

>Public and private key definition can be found in the Tools, Glossary section.  

[More information on how it works](https://www.preveil.com/blog/public-and-private-key/)

