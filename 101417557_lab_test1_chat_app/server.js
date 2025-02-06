const express = require('express');
const socketio = require('socket.io');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./.config');

const { userSchema, groupMessageSchema, privateMessageSchema } = require('./db/ChatSchema');

const app = express();
const SERVER_PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB connection
mongoose.connect(config.MONGO_URL)
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

// Paths to current pages
// login / signup authentication connection
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        res.json({ success: true });
    } else {
        res.json({ success: false, message: 'Invalid credentials' });
    }
});

app.post('/signup', (req, res) => {
    res.json({ message: 'User created' });
});

// The container which holdes the connection to the chat
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'reg.html'));
  });  

app.get('/reg', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'reg.html'));
});

// Chat for one user
app.get('/chat', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat', 'chat.html'));
});

// Allowance path to a groupchat 
app.get('/groupchat', (req, res) => {
    res.sendFile(path.join(__dirname, 'chat', 'chat.html'));
});

const server = app.listen(SERVER_PORT, () => {
    console.log(`Chat Server running on http://localhost:${SERVER_PORT}/`);
});

const io = socketio(server);

// Server connections to the chat functions
io.on('connection', (socket) => {
    console.log(`New Socket: ${socket.id}`);

    socket.on('disconnect', () => {
        console.log(`User disconnect ${socket.id}`);
    });

    socket.on('message', (data) => {
        console.log(`Message from ${socket.id}: ${data}`);
    });

    socket.on('chat_message', (data) => {
        data.clientId = socket.id;
        console.log(JSON.stringify(data));
        io.emit('chat_message', data);
    });

    socket.on('join_group', (groupName) => {
        console.log(`User ${socket.id} joined room ${groupName}`);
        socket.join(groupName);
    });

    socket.on('leave_group', (groupName) => {
        console.log(`User ${socket.id} left room ${groupName}`);
        socket.leave(groupName);
    });

    socket.on('group_message', (data) => {
        console.log(`User ${socket.id} sent message to room ${data.group}`);
        data.senderId = socket.id;
        io.to(data.group).emit('group_message', data);
    });
});
