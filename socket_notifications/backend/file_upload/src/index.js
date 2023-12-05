//WEB SERVER APP

const express = require("express");
const app = express();



// Обработка загрузки файлов
const fileUpload = require('express-fileupload');
app.use(fileUpload());


//use body in  request
//for working with json
app.use(express.json());
const urlencodedParser = express.urlencoded({extended:false});



let uploadAvatar = require ('./controllers/avatar')
app.post("/api/upload/avatar", urlencodedParser, uploadAvatar)


// определяем роутеры

// сопоcтавляем роутер с конечной точкой "/users"
app.listen( 80, () => {
    console.log("http server started");
});
