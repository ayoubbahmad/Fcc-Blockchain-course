//  imports
import { ethers } from "hardhat"

// async main
async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage")
  console.log("Deploying contract...")

  const simpleStorage = await SimpleStorageFactory.deploy()
  await simpleStorage.deployed()

  console.log("Deployed to:", simpleStorage.address)
}

async function verify(contractAddress, args) {
  //
}

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
