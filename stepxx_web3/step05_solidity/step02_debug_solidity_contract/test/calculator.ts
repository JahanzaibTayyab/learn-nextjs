import { expect } from "chai";
import { ethers } from "hardhat";

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
});
