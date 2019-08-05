const Mailer = require('./src/mailer')
const JST = require('./src/jst')
const logging = require('./src/logging')

module.exports = {
    createMailer: ({ apiKey, domain }, title, from) => new Mailer({ apiKey, domain }, title, from),
    JST,
    logging
}
