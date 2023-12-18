// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

contract Token {
    
    address public owner;

    mapping(address => bool) public  walletList;
    

    event WalletAdded(address indexed wallet);

    modifier onlyOwner() {
        require(msg.sender == owner,"onlyOwner can call this function");
        _;
    }

    constructor() {
        owner = msg.sender;
    }
    function addWallet(address _wallet) external onlyOwner {
        require(_wallet != address(0),"Invalid address");
        require(!walletList[_wallet],"Wallet already listed");
        walletList[_wallet] = true;
        emit WalletAdded(_wallet);
    }
    function isWalletListed(address _wallet) external view returns(bool) {
        return walletList[_wallet];
    }
}