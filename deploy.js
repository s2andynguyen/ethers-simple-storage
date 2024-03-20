const ethers = require('ethers');
const fs = require('fs-extra');
async function main() {
    //compile them our code
    //compile them separately
    //http:0.0.0.0:8545
    const provider = new ethers.providers.JsonRpcProvider("http://0.0.0.0:8545");
    const wallet = new ethers.Wallet(
        "0xcf8b9509d8ce5ffa7daee950e11dd3da60a6d402863a536e8ae3aae3ca81952d",
        provider
    );
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...");
    const contract = await contractFactory.deploy();
    console.log('contract :>> ', contract);
}



main().then((result) => {
    ProcessingInstruction.exit(0);
}).catch((err) => {
    console.error(error)
    process.exit(1)
});