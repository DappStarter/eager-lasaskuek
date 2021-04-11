require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace arctic sun tone strategy cost snow common hidden private food ghost'; 
let testAccounts = [
"0x007f7d6805fd4e02cba655d3273b0c3ebd6eeb1417f1298b0b99e626509f7d64",
"0x6228ec146211c5e0bdd8dd3f1d13bc0ac15b2e7425796b085c0dc55765f3e732",
"0x9eaa813382db4b388ebda062a7818f496376d0bb0a5f154e52a5b577a7bc6637",
"0xa8f6ab4ac37fc3817a8afc1e9c193a02d882ef742d78f2b15356a6fdf101c695",
"0xdf6b8252163942ad2dd718b4a1069c0adc8cf624dfeb78aaa6da9d1ce91b4b53",
"0x3a476e5c28d80aaea2036e8f55c1393988beb3e39cbdd00196916494ce220900",
"0x7c0b832224bb3d3595bf247b4e2a8ccb434b8fbdf973a4cf7a07faa8ebeb079e",
"0x37f4a358583a0521838604e42939fe6c4a58cce5455ced136f8fa86f4734a115",
"0xca0f0b53302e689cf5e71acd1c8d91b6d3d61913b5e02be2c5c37a0208722aa9",
"0xd384641d4c64f361a8ade2f68bddb2b11d7779dc711a14e66c8b66144459bb94"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


