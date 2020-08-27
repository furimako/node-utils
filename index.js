const Mailer = require('./src/mailer')
const JST = require('./src/jst')
const logging = require('./src/logging')

module.exports = {
    createMailer({ host, user, pass }, { title, defaultFrom, defaultTo }) {
        return new Mailer({ host, user, pass }, { title, defaultFrom, defaultTo })
    },
    JST,
    logging
}
