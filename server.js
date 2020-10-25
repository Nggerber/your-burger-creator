const express = require('express');
const expresshb = require('express-handlebars');

const PORT = process.env.PORT || 3000;

const app = express();


app.listen(PORT, function(){
console.log("Server listening on: http://localhost:" + PORT)


});