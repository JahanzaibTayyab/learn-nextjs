# Testing Solidity Contracts Using Hardhat

Testing is an essential part of the development process, especially when it comes to smart contracts. In this guide, we'll walk through the steps of testing Solidity contracts using Hardhat.

## Step 1: Set up the project

Create a new directory for your project and navigate to it. Then, initialize a new Hardhat project by running the following command:

```bash
npx hardhat init
```

This will create a new Hardhat project with some basic files and directories.

## Step 2: Write your Solidity contract

In the `contracts/` directory, create a new Solidity file and write your contract. For example, you can create a simple contract that adds two numbers:

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Calculator {
    function add(uint256 a, uint256 b) external pure returns (uint256) {
        return a + b;
    }
}
```

Save the file as `Calculator.sol`.

## Step 3: Write a test for your contract

In the `test/` directory, create a new JavaScript file and write a test for your contract. For example, you can write a test that checks if the `add` function works as expected:

```typescript
const { expect } = require("chai");

describe("Calculator", function () {
  let calculator;

  beforeEach(async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    await calculator.deployed();
  });

  it("should add two numbers", async function () {
    const result = await calculator.add(2, 3);
    expect(result).to.equal(5);
  });
});
```

Save the file as `calculator.ts`.

## Step 4: Run the test

To run the test, execute the following command in your terminal:

```bash
npx hardhat test
```

This will compile your contracts and run the test. You should see an output like this:

```
  Calculator
    ✓ should add two numbers (142ms)


  1 passing (187ms)
```

## Step 5: Write more tests

You can write more tests to check other functions or scenarios in your contract. For example, you can test the case when one of the inputs is zero:

```javascript
it("should handle zero input", async function () {
  const result = await calculator.add(2, 0);
  expect(result).to.equal(2);
});
```

You can also write tests for edge cases, such as maximum or minimum values:

```javascript
it("should handle maximum values", async function () {
  const max =
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
  const result = await calculator.add(max, max);
  expect(result).to.equal(
    "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
  );
});
```

## Step 6: Use test helpers

Hardhat provides some useful test helpers to simplify common testing tasks. For example, you can use the `expectRevert` helper to test if a transaction reverts:

```javascript
it("should revert on overflow", async function () {
  await expectRevert(
    calculator.add(2 ** 255, 2 ** 255),
    "SafeMath: addition overflow"
  );
});
```

## Step 7: Mock dependencies

If your contract depends on other contracts or external services, you can mock them in your tests to isolate your contract and test it in isolation. Hardhat provides some tools

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
