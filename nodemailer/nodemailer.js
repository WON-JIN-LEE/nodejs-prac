require("dotenv").config();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const mailtrapSmtp = {
    "host": "smtp.mailtrap.io",
    "port": 2525,
    "secure": false, // true for 465, false for other ports
    "auth": {
        "user": process.env.NODEMAILER_USER, // generated ethereal user
        "pass": process.env.NODEMAILER_PASS// generated ethereal password
    },
};

const gmailSmtp = {
    service: 'gmail',
    "host": 'smtp.gmlail.com',
    "port": 587,
    "secure": false, // true for 465, false for other ports
    requireTLS: true,
    "auth": {
        "user": process.env.GOOGLE_USER, // generated ethereal user
        "pass": process.env.GOOGLE_PASS// generated ethereal password
    },
};

console.log(gmailSmtp)

const send = async (data) => {
    nodemailer.createTransport(mailtrapSmtp).sendMail(data, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info);
            return info.response;
        }
    });
};


const sendByGmailSMTP = async (data) => {
    nodemailer.createTransport(smtpTransport(gmailSmtp)).sendMail(data, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log(info);
            return info.response;
        }
    });
};
const content = {
    from: 'vopgh0409@gmail.com', // sender address
    to: "c6744da078-28469a@inbox.mailtrap.io", // list of receivers
    subject: "Hello ✔", // Subject line
    // text: "Hello world?", // plain text body
    html: "<h2>node mailer test</h2>", // html body
};


const content1 = {
    from: "vopgh0409@gmail.com", // sender address
    to: "bopgh@naver.com", // list of receivers
    subject: "HI! i'm gmail ✔", // Subject line
    text: "TEXT test hello wonjin", // plain text body
    // html: "<h2>node mailer test</h2>", // html body
};

// send(content);
sendByGmailSMTP(content1);