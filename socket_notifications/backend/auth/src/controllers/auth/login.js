let jwt = require('jsonwebtoken');
let rabbitMQ_notification = require('../../helpers/rabbit');
let socketEmitter = require('../../helpers/socket_emitter');
// отримати секретний ключ
const JWT_KEY = process.env.JWT_KEY;


// Модуль, який отримує HTTP-запит та HTTP-відповідь
exports.login = function (request, response) {
    // якщо користувач не відправив дані, повертаємо статус 400
    if (!request.body) return response.sendStatus(400);

    // отримуємо дані з тіла запиту
    console.log(request.body);
    let user = request.body;
    rabbitMQ_notification('user.login', user);

    // користувач існує (пара співпала), user те, що потрібно
//create jwt token easy key
        let token = jwt.sign({
            "user": user,
            "hello": "World" // інші дані
        }, JWT_KEY
        );

    // формуємо результат обробки запиту
    let result = {
        "user": user,
        "token":token // щоб фронтенд знали, які дані в базі
    };

    // статус 200, все пройшло ок
    return response.status(200).json(result);
}
