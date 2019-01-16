const express = require("express");
const schema = require("./schema");
const graphqlHTTP = require("express-graphql");

const app = express()

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
  }));

 
  app.listen(4000, ()=> console.log("server has started on port 4000"));