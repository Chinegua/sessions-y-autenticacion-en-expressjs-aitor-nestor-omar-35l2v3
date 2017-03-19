// TODO


"use strict";
let express = require('express'),
    app = express(),
    session = require('express-session');
let cookieParser = require('cookie-parser');
let path = require('path');
let util = require("util");
var jsonfile = require('jsonfile')
var bodyParser = require('body-parser');
let bcrypt = require("bcrypt-nodejs");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('port',(process.env.PORT || 8086));
app.use(bodyParser.urlencoded({ extended: false }));
var data = require('./users.json');

//(var parsedJSON = JSON.parse(data);
console.log(data);
let user = data.username
let hash = data.password
//-----------------------------------------------COOKIES Y SESSIONS
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
        return res.render('login'); // https://httpstatuses.com/401
};

app.get('/login', function (req, res) {
    if (req.session.user == user){

        res.redirect('/content')
    }
    else{
        res.render('login');
    }


});

app.post('/login', function (req, res) {

    for (let i = 0; i < data.length; i++) {
        user = data[i].username;
        hash = data[i].password;
    if (!req.body.username || !req.body.password) {
        console.log('login failed');
        res.send('login failed');
    } else if (req.body.username == user && bcrypt.compareSync(req.body.password, hash)) {
        req.session.user = req.body.username;
        req.session.admin = true;

        res.redirect('/content')

    } else {
        console.log(`login ${util.inspect(req.body)} failed`);
        res.send("Contraseña incorrecta");
    }
    }

});
app.get('/session',function(req,res){

        res.send(req.session.user)


});

app.get('/logout',function(req,res){
    req.session.destroy();
    res.render('logout');
});

app.get('/cpass',function(req,res){
    res.render('cpass',{ name:req.session.user  })
});

app.get('/profile',function(req,res){
    for (let i = 0; i < data.length;i++) {
        user = data[i].username
        if (req.session.user == user) {
            res.render('profile', {name: req.session.user})
        }
        else
            res.redirect('/login');
    }

})

app.post('/profile',function(req,res){
    data.password = bcrypt.hashSync(req.body.password);
    jsonfile.writeFile("users.json", data, {spaces: 2}, function(err) {
        console.error(err)
    })

})

app.get('/content/*?',
    auth  // next only if authenticated
);
app.use('/content', express.static(path.join(__dirname, '_book')));

//-----------------------------------------------PUERTO
app.listen(app.get('port'), () => {
    console.log(`Node app is running at localhost: ${app.get('port')}` );
});
