const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/UserSchema');

const app = express();
const SERVER_PORT = 8081;

app.use(express.json());

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const connectDB = async () => {
    try {
        console.log(`Attempting to connect to DB`);
        const DB_NAME = "lab5";
        const DB_USER_NAME = "andrejbach05";
        const DB_PASSWORD = 'Z9GOL4CyvSmJHHk8';
        const CLUSTER_ID = 'qslf7';
        const DB_CONNECTION = `mongodb+srv://${DB_USER_NAME}:${DB_PASSWORD}@cluster0.${CLUSTER_ID}.mongodb.net/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

        mongoose.connect(DB_CONNECTION, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => {
            console.log(`MongoDB connected`);
        }).catch((err) => {
            console.log(`Error while connecting to MongoDB : ${JSON.stringify(err)}`);
        });
    } catch (error) {
        console.log(`Unable to connect to DB : ${error.message}`);
    }
}

app.listen(SERVER_PORT, () => {
    console.log('Server started');
    connectDB();
    console.log(`Server running at http://localhost:${SERVER_PORT}`);
});
