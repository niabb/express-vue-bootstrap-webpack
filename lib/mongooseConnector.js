'use strict';

const mongoose = require('mongoose');
const cfg = require('../cfg/config.json');

mongoose.Promise = global.Promise;
mongoose.connect(cfg.mongoUrl);
