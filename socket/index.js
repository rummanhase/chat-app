const { Server } = require("socket.io")
const io = new Server({ cors : "https://chat-app-ybty.onrender.com"})

let onlineUsers = [];

io.on("connection" , (socket) => {
    console.log("new connection" , socket.id)

    //listen to a connection 
    socket.on("addNewUser" , (userId)=> {
        !onlineUsers.some((user) => user.userId === userId) &&
        onlineUsers.push({
            userId , 
            socketId : socket.id,
        })
        console.log("online users" , onlineUsers)
        io.emit("getOnlineUser" , onlineUsers)
    })

    socket.on("sendMessage" ,(message)=>{
        const user = onlineUsers.find((user) => user.userId === message.recipientId)
        // console.log(message)
        if(user){
            io.to(user.socketId).emit("getMessage" , message)
        }
    })
    socket.on("disconnect" , ()=>{
        onlineUsers = onlineUsers.filter(user => user.socketId !== socket.id)
        io.emit("getOnlineUser" , onlineUsers)
    })

})

io.listen(3000)