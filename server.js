const express = require("express");
const app = express();
const { ethers } = require("ethers");
const { CONTRACT_ABI } = require("./abi");

const { ContractAddress } = require("./ContractAdress.json");
require("dotenv").config();

const provider = new ethers.WebSocketProvider(
  `wss://eth-goerli.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`
);
const contract = new ethers.Contract(ContractAddress, CONTRACT_ABI, provider);

async function main() {
  contract.on("WalletAdded", (wallet, event) => {
    console.log("Event --------------===", event);
  });
}

main();

app.get("/", (req, res) => {
  res.send("Server is Running!");
});

app.listen(8000, "0.0.0.0", () => {
  console.log("Server is running.", 8000);
});
