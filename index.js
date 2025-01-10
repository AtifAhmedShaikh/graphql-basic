const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

// Define a schema
const schema = buildSchema(`
  type Query {
    name: String
    fullName: String
    phoneNumber: Int
    greet(
    name: String!,
    value:String!
    ): String
  }
`);

const root = {
  hello: () => "Hello, World!",
  fullName: () => "Hello, World!", // call feild name and get
  greet: (value) => `Hi bro, this is name ${value.name} and this is value ${value.value}!`,
  phoneNumber: (value) => `Hi bro, this is name ${value.name} and this is value ${value.value}!`,
};

// Initialize the Express app
const app = express();

// Set up the GraphQL endpoint
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true, // Enables the GraphiQL devtool
  })
);


app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000");
});
