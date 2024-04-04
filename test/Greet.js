const { expect } = require("chai");
const { ethers } = require("hardhat");
const { describe } = require("mocha");


describe("Greeter", async () => {

    let contract;

    beforeEach(async () => {
        const Greeter = await ethers.getContractFactory("Greeter");
        const greeter = await Greeter.deploy("Hello Sunil");
        contract = greeter;
    })

    it("Should check the new greet Value", async () => {

        console.log(await contract.greet())
        await contract.setGreet("Ola Sunil")
        expect(await contract.greet()).to.equal("Ola Sunil")
    })

    it("Should check the new greet Value", async () => {

        console.log(await contract.greet())
        await contract.setGreet("Ola Sunil")
        expect(await contract.greet()).to.equal("Ola Sunil")


    })
})