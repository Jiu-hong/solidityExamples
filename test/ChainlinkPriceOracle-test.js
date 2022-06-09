const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ChainlinkPriceOrable", function () {
  it("ChainlinkPriceOrable", async function () {
    const ChainlinkPriceOrable = await ethers.getContractFactory("ChainlinkPriceOracle");
    const chainlinkPriceOrable = await ChainlinkPriceOrable.deploy();
    await chainlinkPriceOrable.deployed();

    console.log("price is: ", await chainlinkPriceOrable.getLatestPrice());
  });
});
