const ethers = require("ethers")
const fs = require("fs-extra")

require("dotenv").config()

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

  const abi = fs.readFileSync(
    "./build/Simplestorage_sol_SimpleStorage.abi",
    "utf-8"
  )
  const binary = fs.readFileSync(
    "./build/Simplestorage_sol_SimpleStorage.bin",
    "utf-8"
  )

  // Deploy the contract
  const contractFactory = new ethers.ContractFactory(abi, binary, wallet)
  console.log("Deploying, please wait...")
  const contract = await contractFactory.deploy()
  await contract.deployTransaction.wait(1)
  console.log("Contract well deployed!")

  //   Interact with abi
  let currentFavNumber = await contract.retrieve()
  console.log("Before: ", currentFavNumber.toString())
  await contract.store(21)
  currentFavNumber = await contract.retrieve()
  console.log("After: ", currentFavNumber.toString())
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
