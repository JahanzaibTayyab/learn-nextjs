# Sample Hardhat Project

# Basic Sample Hardhat Project

Hardhat is a development environment for Ethereum software. It consists of different components for editing, compiling, debugging and deploying your smart contracts and dApps, all of which work together to create a complete development environment.

Hardhat Runner is the main component you interact with when using Hardhat. It's a flexible and extensible task runner that helps you manage and automate the recurring tasks inherent to developing smart contracts and dApps.

Hardhat Runner is designed around the concepts of tasks and plugins. Every time you're running Hardhat from the command-line, you're running a task. For example, npx hardhat compile runs the built-in compile task. Tasks can call other tasks, allowing complex workflows to be defined. Users and plugins can override existing tasks, making those workflows customizable and extendable.

This guide will take you through the installation of our recommended setup, but as most of Hardhat's functionality comes from plugins, you are free to customize it or choose a completely different path.

[Before starting development please go through the Ethereum Developer Documentation in detail](https://ethereum.org/en/developers/docs/)

# Installation

Following this link[Hardhat Runner Installation](https://hardhat.org/hardhat-runner/docs/getting-started#installation)

[Hardhat for Visual Studio Code Extension](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity)
This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Compiling your contracts

```shell
npx hardhat compile
```

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat run scripts/deploy.ts
npx hardhat node
```
