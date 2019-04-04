const express = require('express');

const app = express();
const PORT = 3600;
const socket = require('socket.io');
//defining server to listen on port.
const server = app.listen(PORT,()=>{
    console.log('Listening on port ' +PORT);
})
app.use(express.static('public'));


//setting up socket 2 way communication.
//passing the server into th socket function so that the socket can be set up everytime a request is made
//to the server.
const io = socket(server);

io.on('connection',(socket)=>{
    console.log('Made connection to socket!' +socket.id);
    //on firing the chat method in the client side,we get the data from the client.
    socket.on('chat',function(data){
        //transmit this data to all the sockets connected, whenever the 'chat' is invoked.
        io.sockets.emit('chat',data);
        //now listen to this on the frontend and pass in the data onto the DOM.
    })
})