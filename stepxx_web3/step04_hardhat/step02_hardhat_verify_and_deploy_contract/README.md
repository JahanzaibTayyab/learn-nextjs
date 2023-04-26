# Sample Hardhat Project Deploy and Verify Contract

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

You can deploy in the localhost network following these steps:

1. Start a local node

```shell
npx hardhat node
```

2. Open a new terminal and deploy the smart contract in the localhost network

```shell
npx hardhat run --network localhost scripts/deploy.ts
```

As general rule, you can target any network from your Hardhat config using:

```shell
npx hardhat run --network <your-network> scripts/deploy.js
```

Verify Contracts

Verifying contracts is essential since defective ones can cause major issues. There are multiple steps involved to verify a contract; however, in short, you can use the following Hardhat verification command:

```shell
npx hardhat verify “ADDRESS” --network goerli
```

List of supported networks, run this command:

```shell
npx hardhat verify --list-networks
```
