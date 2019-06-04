const { io } = require("../server");

io.on('connection', ( client ) => {

    client.on('disconnect', () =>{
        console.log(`Back client desconectado`);    
    })

    client.emit('ServerEvent', ({id:1, datastring:'string'}));

    client.on('EmmitMessage', (data, callback ) => { 
         console.log("message: ", data );

         client.broadcast.emit('ServerEvent',data);
        //  var message = 'Error: user not found';

        //  if(data.user){
        //     message ="success";
        //  }
        //  callback(message);

        });
    //  console.log(`${client} conectado`);
    console.log(`Back client conectado`); 
});