const SyrupBar = artifacts.require("SyrupBar");
const MasterChef = artifacts.require("MasterChef");

if (!process.env.hasOwnProperty('TOKEN_ADDRESS')) {
  throw("must specify TOKEN_ADDRESS as env variable")
}

if (!process.env.hasOwnProperty('DEV_ADDRESS')) {
  throw("must specify DEV_ADDRESS as env variable")
}

const KabukiPerBlock = 25
const StartBlock = 0

module.exports = async function (deployer) {
  await deployer.deploy(SyrupBar, process.env.TOKEN_ADDRESS)
  await deployer.deploy(
    MasterChef,
    process.env.TOKEN_ADDRESS,
    SyrupBar.address,
    process.env.DEV_ADDRESS,
    KabukiPerBlock,
    StartBlock
  )
};
