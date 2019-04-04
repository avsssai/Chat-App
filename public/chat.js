// Make connection
var socket = io.connect();

// Query DOM
var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
      btn = document.getElementById('send'),
      output = document.getElementById('output');

// Emit events
function sendMessage(){
    //everytime the send button is pressed, this function is fired emitting 'chat' and the object.
    socket.emit('chat', {
        message: message.value,
        handle: handle.value
    });
    message.value = "";
  
}

// Listen for events, whenever the chat event is fired, update the html with the message.
socket.on('chat', function(data){
    output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
});
