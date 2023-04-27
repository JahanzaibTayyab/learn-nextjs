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
