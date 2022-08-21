require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
// hardhat.config.js
require('@openzeppelin/hardhat-upgrades');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC_URL,
      accounts: [process.env.RINKEBY_DEPLOYER_PRIVATE_KEY],
      //allowUnlimitedContractSize: true,
      //blockGasLimit: 1000000004297208977980809 // whatever you want here
    }
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },

  solidity: {
    version: "0.6.11",
    settings: {
      "optimizer": {
        "enabled": true,
        "runs": 200
      }
    }
  },
  localhost: {
    url: "http://localhost:8545",
    accounts: [process.env.RINKEBY_DEPLOYER_PRIVATE_KEY]
  },

  mocha: {
    timeout: 40000
  }
};


// https://speedy-nodes-nyc.moralis.io/91bee7f7b0d9d1c367c0106e/eth/rinkeby
// npx hardhat verify --network rinkeby 0xb4EAB02d727b3547D62FB3C8067621FACE6f760e "Siracha Money" "SIR" "0x6f7282b813Bf6c8DfE6Fc98a4d2A7E5fD97AC947"