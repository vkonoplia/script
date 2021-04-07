require('dotenv').config();
const express = require("express");
const app = express();
app.get("/", (request, response) => {
    response.send("<h1>Hello World</h1>");
});
app.get("/about", (request, response) => {
     
    response.send({NAME: process.env.NAME, GROUP: process.env.GROUP});
});

app.listen(3000);
