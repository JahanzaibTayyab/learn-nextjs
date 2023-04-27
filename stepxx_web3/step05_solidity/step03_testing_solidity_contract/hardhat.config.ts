import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-web3";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/test-helpers";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
};

export default config;
