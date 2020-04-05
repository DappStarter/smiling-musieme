require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict hero force spot toy note remind purpose harvest clock flock genius'; 
let testAccounts = [
"0x87cf62773647323d724aac2930ca7ed5bf4de416329396a53a058380637e75fa",
"0x117ed117ce743911fa3c2bd2e6430ca485369ba86863597b42c73d911b1ae6ba",
"0x67bad667d1f3d1ec8fd35dbd254628f07841996ecf2a8d81a9bd274772350489",
"0x4619f6582b217b08016955c8365039aa5322b667e776b147b35d3fb56ab4e371",
"0x293276651c1e55908873a90372b8d8441a83868f21789d0f0ffb5b1b4a89dec6",
"0x170f4bb5b33918b659437032d966468ce399494b062b7ee3ca7c196b17d2a2f0",
"0x2c16bd565222b583346d465403dc809d0f82d2da4dfcf47d81a0582154ca2048",
"0xdefd0633fad767150cf77ce367c7caef6db7e828b2e61ef46514fb3dc32c3a0d",
"0xc9a36dfda01bb42e7d9eb799ba73309c33cff57000fa57b4b722e0f70ad4900d",
"0xafa4ffda089c658d43a59dc4a26ff9f1df6b4ac34b3623adf66493ae8dcd1ff2"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
