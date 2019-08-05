const mailgunJS = require('mailgun-js')

module.exports = class Mailer {
    constructor({ apiKey, domain }, title, from, to = 'furimako@gmail.com') {
        this.mailgun = mailgunJS({ apiKey, domain })
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
        
        this.mailgun.messages().send(data, (err, body) => {
            if (err) {
                throw new Error(`some error occurred in mailer\n${err}`)
            }
            console.log('--- sending mail ---')
            console.log(`body: ${body}`)
            console.log(`<<text>>\n${text}`)
            console.log('--------------------')
        })
    }
}
