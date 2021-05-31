const mongoose = require("mongoose");
const express = require("express");
const apollo = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolver");
const { dataLoader } = require("./loader");

const ApolloServer = apollo.ApolloServer;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    movieLoader: dataLoader;
  },
});

const app = express();
server.applyMiddleware({ app });

const dbString =
  "enter mongo cluster - uri";
const PORT = 8000;

mongoose
  .connect(dbString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connection Successful"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("server is running on", PORT);
});
