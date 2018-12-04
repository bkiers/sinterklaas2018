"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = require("dotenv");
var express = require("express");
var handlebars = require("express-handlebars");
var validator = require("express-validator");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var home_controller_1 = require("./controller/home-controller");
var app = express();
var hbs = handlebars.create({});
dotenv.config();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', home_controller_1.HomeController);
var port = parseInt(process.env.PORT) || 80;
app.listen(port, function () {
    console.log("Listening at http://localhost:" + port + "/");
});
//# sourceMappingURL=server.js.map