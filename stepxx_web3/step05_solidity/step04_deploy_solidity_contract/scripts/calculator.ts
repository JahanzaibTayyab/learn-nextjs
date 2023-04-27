import { ethers } from "hardhat";
async function main() {
  const Calculator = await ethers.getContractFactory("Calculator");
  const calculator = await Calculator.deploy();
  await calculator.deployed();

  console.log("Calculator deployed to:", calculator.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
