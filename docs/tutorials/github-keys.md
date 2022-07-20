---
id: github-keys
title: GitHub Keys
sidebar_label: GitHub Keys 
description: Keys SSH from GitHub to access the repositories
keywords: [ GitHub, Keys, SSH, SSH Keys, GitHub Keys, What is SSH, What is SSH Keys, How to use SSH, How to use SSH Keys, SSH Guide ]
---

## Why we need GitHub Keys?

Let's first define GitHub as a browser-based online control system of distributed version for those software developers using the Git revision control system. Git uses SSH public key authentication and not a password authentication.  Each user of the system has to generate a key.

The `SSH` is also known as Secure Shell or Secure Socket Shell [More About SSH in GitHub](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/about-ssh). SSH keys are used to authenticate secure connections they are generate through a public key cryptographic algorithm, the most common being RSA or DSA. This is a one-way formula that ensures the public key can be derived from the private key but the private key cannot be derived from the public key.

## How to generate a new SSH key?

This guide is for Windows users, more information for Linux and Mac on this guide [Generating a new SSH Key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent).

Windows environments do not have a standard default Unix shell. External shell programs will need to be installed for to have a complete keygen experience. The most straight forward option is to utilize Git Bash.

- Open Git Bash

- Paste the text below, substitute `"your_email@example.com"` with your GitHub email address
```shell
$ ssh-keygen -t ed25519 -C "your_email@example.com"
```
---
**NOTE :** 
If you are using a legacy system that doesn't support the `ed25519` algorithm, use:

```shell
$ ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
---

- It will ask for a file to save the key, just press enter. This accepts the default file location. 

- At the prompt, type a secure passphrase. For security reasons it should be as complex as possible.

Now you have a new SSH key!

## How to Add your SSH Key to the ssh-agent

- Ensure the ssh-agent is running, for more information, visit [Working with SSH Key](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/working-with-ssh-key-passphrases) , or start it manually:

```shell
#start the ssh-agent in the background
$ eval $(ssh-agent -s)
> Agent pid 59566
```
---

**NOTE :** 
If you are following this ssh key generation flow , there is no need to start the ssh-agent.

---

- Add your SSH private key to the ssh-agent. If you created your key with a different name, or if you are adding an existing key that has a different name, replace `id_ed25519` in the command with the name of your private key file.

```shell
$ ssh-add ~/.ssh/id_ed25519
```

- Now you need to add your public key to your **GitHub account** , for this [follow this steps](https://docs.github.com/en/free-pro-team@latest/github/authenticating-to-github/adding-a-new-ssh-key-to-your-github-account).

Now you are set.

[More information on how it works](https://www.preveil.com/blog/public-and-private-key/).

