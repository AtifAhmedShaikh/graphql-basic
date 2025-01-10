# graphql-basic

Setup Node.js server

```
pnpm init
```

Install packages

```
pnpm i express graphql express-graphql
```

Install `pnpm i -D nodemon` this will re-start the server autometic after saving changes

create `index.js` file in root of the project

in `package.json` add below script for running node.js server

`"dev":"nodemon index.js",`

And Add below script if you are using import/export module js syntax
`"type": "module",`

Now past the following code in `index.js`
```
import express from "express";
const app = express();

app.use(express.json()); //allow json data

app.listen(500, () => {
  console.log("Server is running on port 5000");
});

```