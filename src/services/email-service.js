let config = require('../config');
let sendgrid = require('sendgrid')(config.sendgridKey);

exports.send = async (to, subject, body) => {
    sendgrid.send({
        to: to,
        from: 'hello@hello.com',
        subject: subject,
        html: body
    });
}