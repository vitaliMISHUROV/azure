//WEB SERVER APP

const express = require("express");
const app = express();
app.use(express.json());
const urlencodedParser = express.urlencoded({extended:false});



let login = require("./controllers/auth/login").login
app.post("/api/auth/login", urlencodedParser, login);


// определяем роутеры

// сопоcтавляем роутер с конечной точкой "/users"
app.listen( 80, () => {
    console.log("http server started");
});
