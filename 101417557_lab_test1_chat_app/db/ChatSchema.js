const mongoose = require('mongoose');

// Mongo Schema for the saving of the user data
const userSchema = new mongoose.Schema({
    _id: String,
    username: String,
    firstname: String,
    lastname: String,
    password: String,
    createon: { type: Date, default: Date.now }
});

// Group chat message storage 
const groupMessageSchema = new mongoose.Schema({
    _id: String,
    from_user: String,
    room: String,
    message: String,
    date_sent: { type: Date, default: Date.now }
});

// Private message storage
const privateMessageSchema = new mongoose.Schema({
    _id: String,
    from_user: String,
    to_user: String,
    message: String,
    date_sent: { type: Date, default: Date.now }
});

module.exports = {
    User: mongoose.model('User', userSchema),
    GroupMessage: mongoose.model('GroupMessage', groupMessageSchema),
    PrivateMessage: mongoose.model('PrivateMessage', privateMessageSchema)
};
