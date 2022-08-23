const ethers = require("ethers");
const fs = require("fs-extra");
// import ethers from "ethers";
// import fs from "fs-extra";

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    "http://127.0.0.1:7545"
  );
  const wallet = new ethers.Wallet(
    "7f929d5ef4d764c5eb4223ec218f619a905fb17f1508c824e31239660f270b93",
    provider
  );
  const abi = fs.readFileSync(
    "./build/Simplestorage_sol_SimpleStorage.abi",
    "utf-8"
  );
  const binary = fs.readFileSync(
    "./build/Simplestorage_sol_SimpleStorage.bin",
    "utf-8"
  );

  const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
  console.log("Deploying, please wait...");
  const contract = await contractFactory.deploy();
  console.log("Contract well deployed!", contract);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
