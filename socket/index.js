const io = require("socket.io")(8900 , {
    cors: {
        origin: "http://localhost:5173"
    }
})

let users = [];

const addUser = (userId, socketId) => {
    !users.some(user => user.userId === userId) && users.push({userId, socketId});

}
const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}
const getUsers = (socketId) => {
    return users.find(user => user.socketId === socketId);
}
io.on("connection", (socket) => {
    console.log("a user connected " + socket.id);

    // console.log(users);
    socket.on("addUser", message=>{
        // console.log(message);
        addUser(message, socket.id);
        io.emit("getUsers", users);
    })


    socket.on("sendMessage", async({senderId , receiverId , text})=>{
        console.log("sendMessage", senderId, receiverId , text);
        const user = await users.find((user) => user.userId === receiverId);
        user && console.log(user)
        if(user){

            io.to(user.socketId).emit("getMessage", {
                senderId,
                text
            });
            console.log("User is Online")
        }
        else{
            console.log("User is not online")
        }
    })





    socket.on("disconnect", () => {
        removeUser(socket.id);
        io.emit("getUsers", users);
    })
})