require('@nomiclabs/hardhat-waffle')

module.exports = {
    solidity: '0.8.0',
    networks: {
        goerli: {
            url: 'https://eth-goerli.g.alchemy.com/v2/eYWZN8zyoeYykG_ECseq6c6XK_uLueya',
            accounts: [ '' ]
        }
    }
}