const JST = require('./jst')

module.exports = {
    info: msg => console.log(`${JST.getISO8610()} [INFO] ${msg}`),
    error: msg => console.error(`${JST.getISO8610()} [ERROR] ${msg}`)
}
