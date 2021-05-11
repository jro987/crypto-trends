const Dotenv = require('dotenv-webpack')

module.exports = {
    devServer: {
        proxy: "https://pro-api.coinmarketcap.com",
    },
    configureWebpack: {
        plugins: [
            new Dotenv()
        ]
    }
}
