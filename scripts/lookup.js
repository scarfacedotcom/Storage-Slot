const hre = require("hardhat");

const address = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function lookup() {
    const value = await hre.ethers.provider.getStorageAt(address, "0x0");
    const value1 = await hre.ethers.provider.getStorageAt(address, "0x1");
    const value2 = await hre.ethers.provider.getStorageAt(address, "0x2");


    console.log(`Contract storage at slot 0 is ${parseInt(value)}`);
    console.log(`Contract storage at slot 1 is ${parseInt(value1)}`);
    console.log(`Contract storage at slot 2 is ${parseInt(value2)}`);

}

lookup();