const express = require('express');
const app = express();

const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GrapqhQL Schema
const schema = buildSchema(`
  type Query {
    message: String
  }
`);

// client's query -> {message}
const root = {
  message: () => 'Hello World!'
};

// GraphQL endpoint
app.use('/hello', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));

app.listen(3000, () => console.log('server on port 3000'));