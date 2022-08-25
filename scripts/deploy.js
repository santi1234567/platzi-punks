async function main() {
    const [deployer] = await ethers.getSigners();
  
    console.log("Deploying contracts with the account:", deployer.address);
  
    console.log("Account balance:", (await deployer.getBalance()).toString());
  
    const PlatziPunks = await ethers.getContractFactory("PlatziPunks");
    const maxSupply = 10000;
    const deployed = await PlatziPunks.deploy(maxSupply);
  
    console.log("Contract address:", deployed.address, `Etherscan URL: https://rinkeby.etherscan.io/address/${deployed.address}`);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });