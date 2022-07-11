// require("@nomicfoundation/hardhat-toolbox");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/WbnJ2bT9a8LQwly9Is2VElH5pamEC8Vu',
      accounts: ['6b208f1da3cb98ef9d3aaadb8a25381eb69203542aef631052142afe713db4a5']
    }
  }
}