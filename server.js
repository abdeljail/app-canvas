

const mysql = require('mysql');

const express = require('express');

const bodyParser = require('body-parser')

const path = require("path")

const app = express();

const router = express.Router();

const nodeEnv = app.get("env");

require('dotenv').config()

const port = 3000;

app.use(express.static(path.join(__dirname, "frontEnd/")))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/backEnd/uploads/images/', express.static(path.join(__dirname, "/backEnd/uploads/images")));

/*
++++++

    notifications
    
++++++
*/


/**
 * method get for fetch data 
 */

const getTemplete = require("./backEnd/routers/templete/get.router");
const getImage = require("./backEnd/routers/image/get.router");
const getLink = require("./backEnd/routers/link/get.router");
const getHeading = require("./backEnd/routers/heading/get.router");
const getParagraph = require("./backEnd/routers/paragraph/get.router");
const getSearch = require("./backEnd/routers/search/get.router");

app.use(`${process.env.APP_URL_APIS_GET}templete`, getTemplete);
app.use(`${process.env.APP_URL_APIS_GET}image`, getImage);
app.use(`${process.env.APP_URL_APIS_GET}background`, getImage);
app.use(`${process.env.APP_URL_APIS_GET}link`, getLink);
app.use(`${process.env.APP_URL_APIS_GET}paragraph`, getParagraph);
app.use(`${process.env.APP_URL_APIS_GET}heading`, getHeading);
app.use(`${process.env.APP_URL_APIS_GET}search`, getSearch);

/**
 * method get for fetch data 
 */

/*


/**
 * method post for fetch data 
 */

const postTemplete = require("./backEnd/routers/templete/post.router");

const postImage = require("./backEnd/routers/image/post.router");

app.use(`${process.env.APP_URL_APIS_POST}templete`, postTemplete);

app.use(`${process.env.APP_URL_APIS_POST}image`, postImage);


/**
 * method post for fetch data 
 */

/**
++++++

   notifications

++++++
*/

/**
 * send files html for client
 */

const admin = require("./backEnd/routers/pages/admin/admin.router");
const image = require("./backEnd/routers/pages/admin/image.router");
const design = require("./backEnd/routers/pages/templete.router");
app.use('/admin', admin);
app.use('/image', image);
app.use('/design', design);

/**
 * send files html for client
 */

app.listen(port, () => {
    console.log(nodeEnv);
    console.log(`app listening at http://localhost:${port}`);
});