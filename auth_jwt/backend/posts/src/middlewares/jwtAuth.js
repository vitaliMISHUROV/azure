const jwt = require('jsonwebtoken');
const JWT_KEY = process.env.JWT_KEY;

exports.auth = function (request, response, next) {
    if (request.headers.authorization) {
        console.log(request.headers.authorization);

        const authHeader = request.headers.authorization;
        const token = authHeader.replace('Bearer', '');

        jwt.verify(
            token,
            JWT_KEY,
            (err, jwtUser) => {
                if (err) {
                    console.log("Error...");
                    console.log(err);
                    next();
                }
                console.log("вернути дані");
                console.log(jwtUser);
                // add request data users
                request.user = jwtUser;
            }
        )
    }
    // дальше
    next();
}
