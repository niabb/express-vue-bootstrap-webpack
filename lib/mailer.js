'use strict';

const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

const config = require('../cfg/config.json');
const log = require('./logger.js');

const transporter = nodemailer.createTransport(smtpTransport({
  service: 'gmail',
  auth: {
    user: config.mailer.user,
    pass: config.mailer.pass // application specific password
  }
}));


function sendMail(to, subject, text, html) {
  var mailOptions = {from: config.mailer.from, to, subject, text, html};
  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        log.errorJson('Error in sendMail: ', error);
        return reject(error);
      }
      resolve(info);
    });
  });
}

module.exports = {sendMail};
