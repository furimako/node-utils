const mailgun = require('mailgun.js')

module.exports = class Mailer {
    constructor({ apiKey, domain }, title, from, to = 'furimako@gmail.com') {
        this.mailgun = mailgun.client({ username: 'api', key: apiKey })
        this.domain = domain
        this.title = title
        this.from = from
        this.to = to
    }
    
    send(subject, text) {
        const data = {
            from: this.from,
            to: this.to,
            subject: `[${this.title}][${process.env.NODE_ENV}] ${subject}`,
            text
        }
        
        this.mailgun.messages.create(this.domain, data)
            .then((msg) => {
                console.log('--- sending mail ---')
                console.log(`body: ${msg}`)
                console.log(`<<text>>\n${text}`)
                console.log('--------------------')
            })
    }
}
