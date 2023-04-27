import { expect } from "chai";
import { ethers } from "hardhat";
const { expectRevert } = require("@openzeppelin/test-helpers");

describe("Calculator", function () {
  let calculator: any;

  beforeEach(async function () {
    const Calculator = await ethers.getContractFactory("Calculator");
    calculator = await Calculator.deploy();
    await calculator.deployed();
  });

  it("should add two numbers", async function () {
    const result = await calculator.add(2, 3);
    expect(result).to.equal(5);
  });

  it("should handle zero input", async function () {
    const result = await calculator.add(2, 0);
    expect(result).to.equal(2);
  });

  it("should handle maximum values", async function () {
    const max =
      "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff";
    const result = await calculator.add(max, max);
    expect(result).to.equal(
      "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe"
    );
  });

  it("should revert on overflow", async function () {
    await expectRevert(
      calculator.add(2 ** 255, 2 ** 255),
      "SafeMath: addition overflow"
    );
  });
});
