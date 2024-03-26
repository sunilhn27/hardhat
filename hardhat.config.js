const { task } = require("hardhat/config");
require('dotenv').config();

require("@nomicfoundation/hardhat-toolbox");


task("accounts", "Print all accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    const address = await account.getAddress();
    console.log(accounts);
    const bal = await hre.ethers.provider.getBalance(address)
    console.log(address + " " + hre.ethers.formatEther(bal));
  }
})

module.exports = {
  solidity: "0.8.19",



  defaultNetwork: "hardhat",

  networks: {
    hardhat: {
    },
    sepolia: {
      url: process.env.API_KEY,
      accounts: [process.env.PRIVATE_KEY]
    },
    local: {
      url: "http://localhost:8545", // Local network URL
      chainId: 1337, // Assuming it's the same as Hardhat's default chain ID
      accounts: ["0xdf57089febbacf7ba0bc227dafbffa9fc08a93fdc68e1e42411a14efcf23656e"]
    }
  },

  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },

  mocha: {
    timeout: 40000
  },
};
