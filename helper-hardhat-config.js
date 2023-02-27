const networkConfig = {
    31337: {
        name: "localhost",
    },
    // Price Feed Address, values can be obtained at https://docs.chain.link/docs/reference-contracts
    43113: {
        name: "fuji",
        avaxUsdPriceFeed: "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD",
    },
}

const developmentChains = ["hardhat", "localhost"]

module.exports = {
    networkConfig,
    developmentChains,
}
