const io = require("socket.io")(8001,{
    cors:{
        origin:"http://localhost:3000",
    },
});

let connectedUsers = {};

/**
 * Add user adds a new {userId:socketId} key,value pair to the connectedUsers object above
 *   It filters the incoming users based on userId. 
 *   If none of the keys are the userId of the current user, then we can add that user to the object
 * 
 * @param {int} userId  => id of the user
 * @param {int} socketId => will be the first socket id from the user when they first get to page
 */
const addUser = (userId,socketId) => {
    const noKey = Object.keys(connectedUsers).every((key) => {
        if(key === userId) {
            return false
        }
        return true
    });
    if(noKey) {
        connectedUsers[userId] = socketId;
    }
}

/**
 * Removes a user from the connectedUsers object by userId key
 * 
 * @param {int} userId  => id of the user that is disconnecting
 */
const removeUser = (userId) => {
    const successful = delete connectedUsers.userId;
    successful ? console.log("a user disconnected") : console.log(`There was a problem trying to discconect user ${userId}`);
}

const getUser = (userId) => {
    try {
        console.log(connectedUsers)
        const foundUser = connectedUsers[userId]; //gets the socketId of the user to send message to
        return foundUser;
    } catch(err) {
        console.log("Couldn't Find User To Send Message")
        console.log(err);
    } 
}

io.on("connection",(socket) => {
    let user_id;
    /***** WHEN USER CONNECTS *****/
    console.log("a user connected");
    socket.on("addUser",userId => {
        user_id = userId;
        addUser(userId,socket.id);
        io.emit("getConnectedUsers",connectedUsers);
    });
    /******************************/
    
    /**** WHEN USER SENDS MESSAGE ****/
    socket.on("sendMessage",({fromUserId,toUserId,msgTxt}) => {
        console.log(connectedUsers);
        console.log(`toUserId: ${toUserId}`)
        console.log(`fromUserId: ${fromUserId}`)
        const toSocketId = getUser(toUserId);
        console.log(`To SocketId: ${toSocketId}`)
        io.to(toSocketId).emit("getMessage", {
            toUserId,
            fromUserId,
            msgTxt
        })
    })
    /******************************/

    /**** WHEN USER DISCONNECTS ****/
    socket.on("disconnect",()=> {
        removeUser(user_id);
        io.emit("getConnectedUsers",connectedUsers);
    })
    /******************************/
});



