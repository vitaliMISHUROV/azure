//WEB SERVER APP

const express = require("express");
const app = express();

// определяем роутеры

// сопоcтавляем роутер с конечной точкой "/users"
app.listen( 80, () => {
    console.log("http server started");
});
