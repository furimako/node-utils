const JST = require('./jst')
const mailer = require('./mailer')

module.exports = {
    info: msg => console.log(`${JST.getISO8610()} [INFO] ${msg}`),
    error: (msg) => {
        console.error(`${JST.getISO8610()} [ERROR] ${msg}`)
        mailer.send('get ERROR', `${msg}`)
    }
}
