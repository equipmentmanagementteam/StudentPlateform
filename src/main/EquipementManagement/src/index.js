let express = require('express')
let app = express();

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);
let msg1;
let msg2;
const port = process.env.PORT || 2000;

io.on('connection', (socket) => {
    console.log('user connected');

    socket.on('client1', (message) => {
      console.log(message);
      msg1=message;
    });

    socket.on('client1', (msg1) => {
        io.emit('client2',msg1)
      });

      socket.on('client2', (message) => {
        console.log(message);
        msg2=message;
      });
  
      socket.on('client2', (msg2) => {
          io.emit('client1',msg2)
        });

});

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});


