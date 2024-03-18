const { expect } = require("chai");
const { ethers } = require("hardhat");
const { describe } = require("mocha");


describe("Greeter", async () => {

    it("Should check the new greet Value", async () => {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello Sunil");
        console.log(await greeter.greet())
        await greeter.setGreet("Ola Sunil")
        expect(await greeter.greet()).to.equal("Ola Sunil")


    })
})