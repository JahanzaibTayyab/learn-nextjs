import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.18",
      },
      {
        version: "0.8.7",
        settings: {},
      },
    ],
    overrides: {
      "contracts/Lock.sol": {
        version: "0.5.5",
        settings: {},
      },
    },
  },
};

export default config;
