const { task } = require("hardhat/config");
require('dotenv').config();

require("@nomicfoundation/hardhat-toolbox");


task("accounts", "Print all accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    const address = await account.getAddress();
    const bal = await hre.ethers.provider.getBalance(address)
    console.log(address + " " + hre.ethers.formatEther(bal));
  }
})

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  mocha: {
    timeout: 40000
  },

  defaultNetwork: "sepolia",

  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.API_KEY,
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
