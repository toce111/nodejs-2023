const fs = require('fs');
const Mailgun = require('mailgun.js');
const formData = require('form-data');
const validator = require('./validate');

const send = async (template, data) => {
    if (!validator[template]) {
        throw 'Validation schema does not exist for the given template.'
    }

    validator.validate(data, validator[template]);
    let tmpl = `${__dirname}/../../email_templates/${template}.html`
}