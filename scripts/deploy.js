const fs = require("fs");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await hre.ethers.deployContract("Token");

  const token = await Token.waitForDeployment();

  console.log("Contract deploy at ", await token.getAddress());

  const filePath = "./ContractAdress.json";

  const jsonData = JSON.stringify(
    { ContractAddress: await token.getAddress() },
    null,
    
  );

  fs.writeFile(filePath, jsonData, (err) => {
    if (err) {
      console.error("Error writing to the file:", err);
    }
  });

  await run(`verify:verify`, {
    address: await token.getAddress(),
    
  });
  
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });