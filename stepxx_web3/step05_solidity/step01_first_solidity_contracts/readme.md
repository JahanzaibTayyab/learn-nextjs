# Writing Your First Solidity Contract using Hardhat

In this guide, you will learn how to write and test a basic Solidity smart contract using Hardhat. Hardhat is a popular development environment for Ethereum that provides many useful features, including a built-in testing framework and support for deploying to different Ethereum networks.

## Prerequisites

Before we get started, you will need to make sure that you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)
- [Hardhat](https://hardhat.org/getting-started/#installation)

## Step 1: Create a new project

First, you will need to create a new project directory for your contract. Open up your terminal and run the following commands:

```
mkdir my-first-contract
cd my-first-contract
npm init -y
```

This will create a new directory called `my-first-contract`, navigate into it, and initialize a new npm project with default settings.

## Step 2: Install Hardhat

Next, you will need to install Hardhat in your project directory by running the following command:

```
npm install --save-dev hardhat
```

## Step 3: Initialize Hardhat

Once Hardhat is installed, you will need to initialize it in your project directory. Run the following command:

```
npx hardhat
```

This will prompt you to choose a network to deploy to, and will create some default configuration files for you.

## Step 4: Write your contract

Now you're ready to write your Solidity contract. Create a new file called `MyContract.sol` in the `contracts` directory that was created by Hardhat in Step 3.

```
touch contracts/MyContract.sol
```

Add the following code to your `MyContract.sol` file:

```solidity
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {
  uint256 public myNumber = 42;
}
```

This code defines a simple smart contract that has one public state variable called `myNumber`, which is set to `42`.

## Step 5: Write a test

Next, you will write a test to make sure that your contract works as expected. Create a new file called `MyContract.test.js` in the `test` directory that was created by Hardhat in Step 3.

```
touch test/MyContract.ts
```

Add the following code to your `MyContract.ts` file:

```typescript
import { expect } from "chai";
import { ethers } from "hardhat";

describe("MyContract", function () {
  it("Should return the correct value of myNumber", async function () {
    const MyContract = await ethers.getContractFactory("MyContract");
    const myContract = await MyContract.deploy();

    await myContract.deployed();
    expect(await myContract.myNumber()).to.equal(42);
  });
});
```

This code uses the [Chai](https://www.chaijs.com/) assertion library to write a simple test that verifies that the value of `myNumber` is set to `42`.

## Step 6: Run the tests

Now you can run the tests by running the following command:

```
npx hardhat test
```

This should output something like the following:

```
  MyContract
    ✓ Should return the correct value of myNumber (93ms)


  1 passing (100ms)
```

Congratulations! You have successfully written and tested your first Solidity smart contract using Hardhat. From here, you can continue to build on this contract and explore more advanced features of Solidity and Hardhat.
