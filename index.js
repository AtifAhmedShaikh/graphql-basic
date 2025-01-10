const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const { createUser } = require("./resolvers");

const usersArray = []; // Array to store users

// Define the schema
const schema = buildSchema(`
  type Query {
    name: String
    fullName: String
    phoneNumber: Int
    greet(value: String!): String
  }

  type User {
    name: String!
    phoneNumber: Int!
    cnic: Int!
    fatherName: String!
  }

  type Mutation {
    createNewUser(name: String!, cnic: Int!): String
    updateUser(name: String!, phoneNumber: Int!, cnic: Int!, fatherName: String!): String
    findUser(id:Int!): String
  }
`);

// here properties which will be use when we pass query
const root = {
  name: (id) => {
    console.log(usersArray);
    console.log(id);

    return "Atif";
  },
  fullName: () => "John A. Doe",
  phoneNumber: () => 1234567890,
  greet: ({ value }) => `Hi, ${value}! Welcome to the GraphQL world.`,
  createNewUser: (details) => {
    console.log("Creating a new user", details);
    usersArray.push(details);
  },
  findUser: (details) => {
    console.log("find a new user", details);
    const user = usersArray.find((user) => user.cnic == details.id);
    console.log(user,usersArray)
    return user;
  },
};

const app = express();

const graphQLController = graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enable the GraphiQL devtool
});

app.use("/graphql", graphQLController);

app.listen(4000, () => {
  console.log("Server is running on http://localhost:4000/graphql");
});
