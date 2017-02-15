'use strict';

let io = require('socket.io');
const log = require('./logger.js');

module.exports = function(server) {
  io = io(server);


  io.on('connection', function (socket) {
    const ip = socket.request.connection.remoteAddress;
    log.info(`Web socket: connection from ${ip}`);

    socket.on('test', function (data) {
      log.info('Received test event, broadcasting it to clients.');
      socket.broadcast.emit('test', data);
    });
  });

  function broadcast(type, data) {
    io.sockets.emit(type, data);
  }


  return {broadcast:broadcast};
  
};
