// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
async function main() {
  const Greeter = await ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy("Hello Sunil");
  await greeter.waitForDeployment();
  console.log(greeter)
  console.log("Greeter deployed to:", await greeter.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});