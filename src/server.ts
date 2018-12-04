import * as dotenv from 'dotenv';
import * as express from 'express';
import * as handlebars from 'express-handlebars';
import * as validator from 'express-validator';
import * as cookieParser from 'cookie-parser';
import bodyParser = require("body-parser");

import {HomeController} from "./controller/home-controller";

const app: express.Application = express();
const hbs: Exphbs = handlebars.create({});

dotenv.config();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(validator());
app.use(cookieParser());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use('/', HomeController);

const port: number = parseInt(process.env.PORT as string);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/`);
});