require("dotenv").config();
const nodemailer = require('nodemailer');

const email = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false, // true for 465, false for other ports
    "auth": {
        "user": process.env.NODEMAILER_USER, // generated ethereal user
        "pass": process.env.NODEMAILER_PASS// generated ethereal password
    },
};

const gmailSmtp = {
    "host": 'smtp.gmlail.com',
    "port": 587,
    "secure": false, // true for 465, false for other ports
    requireTLS: true,
    "auth": {
        "user": process.env.GOOGLE_USER, // generated ethereal user
        "pass": process.env.GOOGLE_PASS// generated ethereal password
    },
};

console.log(email)

const send = async (data) => {
    nodemailer.createTransport(email).sendMail(data, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info);
            return info.response;
        }
    });
};

const content = {
    from: '"vopgh0409@gmail.com', // sender address
    to: "c6744da078-28469a@inbox.mailtrap.io", // list of receivers
    subject: "Hello ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: "<h2>node mailer test</h2>", // html body
};

send(content);