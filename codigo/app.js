// Require scout-apm first, before other requires
const scout = require("@scout_apm/scout-apm");
const express = require("express");

// The "main" function
async function start() {
  // Trigger the download and installation of the core-agent
  await scout.install({
    allowShutdown: true, // allow shutting down spawned scout-agent processes from this program
    monitor: true, // enable monitoring
    name: "",
    key: "",
  });

  // Initialize your express application
  const app = express();

  // Enable the app-wide scout middleware
  app.use(scout.expressMiddleware());

  const cookieParser = require("cookie-parser")
    app.use(cookieParser())
    //const recordarmeMiddleware= require('./middlewares/recordarmeMiddleware')
    //app.use(recordarmeMiddleware())

    //URL Encoded
    app.use(express.urlencoded({extended: true}));

    //Path
    const path = require("path");
    app.use(express.static(path.resolve(__dirname,"./public")));

    //fav icon
    const favicon = require('express-favicon');
    app.use(favicon(__dirname + '/public/images/favicon.png'));

    //Method override
    const methodOverride= require('method-override')
    app.use(methodOverride('_method'));

    //Routes
    const userRouter = require('./routes/userRouter');
    const productsRouter= require('./routes/productsRouter');
    const mainRouter= require('./routes/mainRouter');
    const apiRouter= require('./routes/apiRouter');

    //EJS
    app.set("view engine","ejs");

    //Port
    const PORT = process.env.PORT || 3000;
    app.listen(PORT,function(){
    console.log("Servidor listo, corriendo en puerto 3000");
    });

    //Session
    const session = require('express-session');
    const db = require("./database/models");
    app.set('trustproxy', true);
    app.use(session({
    secret: 'Keep Learning'
    }));

    //CORS
    const cors = require('cors');
    app.use(cors())

    app.use(express.json());
    app.use(express.urlencoded({extended: false})); 

    app.use('/users', userRouter);
    app.use('/products', productsRouter);
    app.use('/', mainRouter);
    app.use('/api', apiRouter);
    app.start();
}

// If this script is executed directly, run the start function
if (require.main === module) { start(); }
