const app = require('express')();
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const typeDefs = require('./schemas/types');
const mutations = require('./schemas/mutations');
const queries = require('./schemas/queries');

app.use(cors());

const resolvers = {
  Query: queries,
  Mutation: mutations,
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });
app.listen(4000, (err) => {
  if (err) throw err;
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});
