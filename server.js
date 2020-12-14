const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
const routes = require("./controllers/burgers_controllers");

//middleware

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//set handlebars up
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars")

// use server routes
app.use(routes);

app.listen(PORT, function(){
console.log("Server listening on: http://localhost:" + PORT)


});