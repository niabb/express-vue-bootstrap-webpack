'use strict';

const auth = require('http-auth');

module.exports = function(user, pass, realm) {
  return auth.connect(auth.basic({
      realm: realm
    }, (username, password, callback) => { 
      callback(username === user && password === pass);
    }
  ));
};