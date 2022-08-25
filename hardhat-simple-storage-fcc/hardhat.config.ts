import { HardhatUserConfig, task } from "hardhat/config"
import "@nomicfoundation/hardhat-toolbox"
import "@nomiclabs/hardhat-ethers"
import "dotenv"

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    rinkeby: {
      url: process.env.RINKEBEY_RPC_URL,
      accounts: [],
      chainId: 4,
    },
  },
  solidity: "0.8.8",
}

export default config
