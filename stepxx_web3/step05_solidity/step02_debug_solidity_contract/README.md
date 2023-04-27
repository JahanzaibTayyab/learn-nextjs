## Prerequisites

You can install Hardhat using npm by running the following command:

```bash
npm install --save-dev hardhat
```

## Step 1: Set up the project

Create a new directory for your project and navigate to it. Then, initialize a new Hardhat project by running the following command:

```bash
npx hardhat init
```

This will create a new Hardhat project with some basic files and directories.

## Step 2: Enable Solidity debugging in Hardhat

By default, Solidity debugging is disabled in Hardhat. You can enable it by adding the following configuration to your `hardhat.config.js` file:

```javascript
module.exports = {
  solidity: {
    settings: {
      debug: {
        revertStrings: "debugger",
      },
    },
  },
};
```

This will enable Solidity stack traces when a transaction fails with a `revert` opcode.

## Step 3: Write your Solidity contract

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

## Step 4: Write a test for your contract

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

## Step 5: Run the test

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

## Step 6: Debug the test

If your test fails, you can use the Hardhat debugger to find out what went wrong. To start the debugger, add the `debug` flag to the `test` command:

```bash
npx hardhat test --debug
```

This will start the debugger and pause execution at the first line of your test. You can use the following commands to navigate through the code:

- `n` or `next`: Execute the current line and move to the next line.
- `s` or `step`: Step into a function call.
- `o` or `out`: Step out of the current function.
- `c` or `continue`: Continue execution until the next breakpoint or the end of the script.

You can also set breakpoints in your code by adding the `debugger` statement:

```typescript
it("should add two numbers", async function () {
  debugger;
  const result = await calculator.add(2, 3);
  expect(result).to.equal(5);
});
```

Once the debugger is paused, you can inspect variables and call functions in the console. For example, you can type `await calculator.add(2, 3)` to call the `add` function and see its result.

## Step 7: Fix the bug

Once you have identified the bug, you can fix it and run

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.ts
```
