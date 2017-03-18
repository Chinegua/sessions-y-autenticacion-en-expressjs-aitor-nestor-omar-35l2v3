// ECMA 6
"use strict";

var config = require('./users.json');
console.log(config.user + ' ' + config.password);

let express = require('express'),
    app = express(),
    session = require('express-session');
let cookieParser = require('cookie-parser');
let path = require('path');
let util = require("util");
var bodyParser = require('body-parser');
let bcrypt = require("bcrypt-nodejs");
let hash = bcrypt.hashSync(config.password);
let user = config.user

console.log(user);




app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port',(process.env.PORT || 8085));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

let auth = function(req, res, next) {
    if (req.session.user == user)
        return next();
    else
        return res.render('login');
};

// /login, renderizo la vista login.ejs

app.get('/login', function (req, res) {

    res.render('login');

});


// Recibo del formulario vía POST los datos del formulario
// Se usa bodyparser para parsear

app.post('/login', function (req, res) {


    console.log(req.body.username);
    console.log(req.body.password)
    if (!req.body.username || !req.body.password) {
        console.log('login failed');
        res.send('login failed');
    } else if (req.body.username == "nestor" && bcrypt.compareSync(req.body.password, hash)) {
        req.session.user = req.body.username;
        req.session.admin = true;
        res.send("login success! user " + req.session.user);
    } else {
        console.log(`login ${util.inspect(req.body)} failed`);
        res.send(layout(`login ${util.inspect(req.body)} failed. You are ${req.session.user || 'not logged'}`));
    }
});


//El libro se monta en la ruta /content/ si el Middleware auth lo Authorization


app.get('/content/*?',
    auth
);

// Se sirve del directorio public para los html

app.use('/content', express.static(path.join(__dirname, 'public')));

app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
