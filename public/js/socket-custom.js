
var socket = io();

socket.on('connect', function(){
    console.log("connected");
});

socket.on('disconnect', function(){
    console.log("connetion lost");
});

socket.on('ServerEvent', function(data){
    console.log("Catch ServerEvent: ", data);
})

socket.emit('EmmitMessage', { user:'usuario', menssage: 'message...' } , function( resp ){console.log('Server response ', resp); }); 
