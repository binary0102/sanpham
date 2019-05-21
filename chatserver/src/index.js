const server = require('http').createServer()
const io = require('socket.io')(server);
import {makeHandlers} from './handle';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

mongoose.connect(" mongodb://mongo:27017/shop", { useCreateIndex: true, useNewUrlParser: true },function (err) {
  if (err) throw err;
});

io.use(function(socket, next){
  if (socket.handshake.query && socket.handshake.query.token){ 

    jwt.verify(socket.handshake.query.token, '123456', {
      expiresIn:86400 
  },function(err, decoded) {
 
      if(err) return next(new Error('Authentication error'));
        socket.decoded = decoded;
      next();
    });
  }else {
    next(new Error('Authentication error'));
  }  
})


.on('connect', function(client) {
   const {
    handleMessage,
    handleJoin,
    handleGetThreads, 
   } =  makeHandlers(client);
 
   
    client.on('join', handleJoin)
    client.on('threads', handleGetThreads)
    client.on('message', handleMessage)
  
   
})

server.listen(4000, function(){
  console.log('listening on *:4000');
});