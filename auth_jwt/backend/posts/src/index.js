let express = require("express");
const app = express();

let auth = require("./middlewares/jwtAuth").auth;
//const {request, response } = require("express");

app.get("/api/posts", auth, (request, response) => {
    return response.status(200).json({
        "user": request.user
    });
});

// определяем роутеры

// сопоcтавляем роутер с конечной точкой "/users"
app.listen(80, () => {
    console.log("http server started");
});
