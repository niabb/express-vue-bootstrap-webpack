'use strict';

const fs = require('fs');
const Log = require('log');
const config = require('../cfg/config.json');

const myLog = new Log('debug', fs.createWriteStream(config.logFile, { flags: 'a', encoding: null, mode: '0666' }));


function info(string) {
  myLog.info(string);
}

function error(string) {
  myLog.error(string);
}

function warning(string) {
  myLog.warning(string);
}

function debugJson(string, json) {
  myLog.info(string + JSON.stringify(json, null, 2));
}

function errorJson(string, json) {
  myLog.error(string + JSON.stringify(json, null, 2));
}

module.exports = {info, error, warning, debugJson, errorJson};