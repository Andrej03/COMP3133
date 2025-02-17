const express = require('express');
const mongoose = require('mongoose');
const { ApolloServer } = require('apollo-server-express');

const typeDefs = require('./gqlSchema');
const resolvers = require('./resolver');

const app = express();
app.use(express.json());

const dotenv = require('dotenv');
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT;
const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error('Unable to connect to MongoDB');
    console.error(err.message);
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  await connectDB();

  app.listen(SERVER_PORT, () => {
    console.log(`Server running on http://localhost:${SERVER_PORT}${apolloServer.graphqlPath}`);
  });
};

startServer();
