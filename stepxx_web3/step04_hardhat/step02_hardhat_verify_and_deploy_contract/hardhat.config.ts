import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import secrets from "./secrets.json";

const ALCHEMY_API_KEY = "sZ3PG45yz42Laq65eohRAvPjQUo8cBe1";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY =
  "23af262ba49b95cb8308ae8fa06bc660bb622e6e2c532e577bc13c4101740289";

const config: HardhatUserConfig = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: secrets.url,
      accounts: [secrets.key],
    },
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/${ALCHEMY_API_KEY}`,
      accounts: [SEPOLIA_PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: "3QIKS8SY787QV9AD79RF9FMWUYIQ1HECXU",
  },
};

export default config;
