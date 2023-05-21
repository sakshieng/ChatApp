const app = require('express')();

const server = require('http').createServer(app);
const io = require('socket.io')(server,{
    cors:{
        origin:"*"
    }
});
io.on("connection",(socket)=>{
    console.log('Server is ready and waiting for connection');
    socket.on("Chat",(message)=>{
        console.log('Server received the message');
        io.emit("Chat",message);
    })
})


server.listen(5000,()=>{
    console.log('Server is listening at port 5000');
})