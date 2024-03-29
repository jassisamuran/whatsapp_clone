import { Server } from "socket.io";

const io = new Server(9000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let users = [];

const addUser = (userData, socketId) => {
  !users.some((user) => user.sub == userData.sub) &&
    users.push({ ...userData, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.sub === userId);
};

io.on("connection", (socket) => {
  console.log("user connected");
  // console.log('socket data is ',socket)

  //connect
  socket.on("addUsers", (userData) => {
    addUser(userData, socket.id);
    io.emit("getUsers", users);
  });

  //send message
  //   socket.on("sendMessage", (data) => {
  //     const user = getUser(data.receiverId);
  //     io.to(user.socketId).emit("getMessage", data);
  //   });
  socket.on("sendMessage", (data) => {
    const user = getUser(data.receiverId);

    // Check if user is found before accessing its socketId
    if (user && user.socketId) {
      io.to(user.socketId).emit("getMessage", data);
    } else {
      // Handle the case where the user is not found or has no socketId
      console.error("User not found or missing socketId");
    }
  });

  //disconnect
  // socket.on('disconnect', () => {
  //     console.log('user disconnected');
  //     removeUser(socket.id);
  //     io.emit('getUsers', users);
  // })
});
