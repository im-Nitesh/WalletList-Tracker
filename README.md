# Token Smart Contract

## Overview

This smart contract is designed to maintain a list of wallet addresses. The contract allows the owner to include new addresses and provides a function to verify if a particular wallet is already listed.

## Features

- **addWallet:** Allows the owner to add new wallet addresses to the list.
- **isWalletListed:** Allows anyone to verify if a specific wallet is already listed.

## Getting Started

### Prerequisites

- Node.js
- Hardhat

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/im-Nitesh/Token-Smart-Contract
    ```

2. Navigate to the project directory: 

    ```bash
    cd Token-Smart-Contract/CDN
    ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Deploy the Token smart contract to a testnet:

    ```bash
    npm run contract-deploy
    ```
### Smart Contract Details

**Owner:** The owner is the address that deploys the contract.

**Functions:** 

**`addWallet(address _wallet)`:** Adds a new wallet address to the list. Only the owner can call this function.

**`isWalletListed(address _wallet)`:** Checks if a specific wallet address is listed.

## Docker

```bash
sudo docker build -t contract:v1 .
```
```bash
sudo docker run -d -p 8000:8000 contract:v1
```
```bash
sudo docker tag contract:v1 <username>/contract:v1
```
```bash
sudo docker login
```
```bash
sudo docker push <username>/contract:v1
```