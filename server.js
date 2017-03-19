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

//-----------------------------------------------COOKIES Y SESSIONS
app.use(cookieParser());
app.use(session({
    secret: '2C44-4D44-WppQ38S',
    resave: true,
    saveUninitialized: true
}));

let auth = function(req, res, next) {
    let aux = 0;
    for (let i = 0; i < data.length; i++) {
        let user = data[i].username;
        if (req.session.user == user)
            aux = 1;

    }
    if (aux == 0){
        return res.render('login');

    }
    else if(aux == 1){
        return next();
    }
};

app.get('/login', function (req, res) {
    let aux = 0;

    for (let i = 0; i < data.length; i++) {
        let user = data[i].username;
        let hash = data[i].password;
        console.log(user);
        console.log(hash);
        if (req.session.user == user) {
            console.log("Entra bien")
            aux = 1;

        }
        else {
            console.log("Entra mal")

        }
    }

    if (aux == 0){
        res.render('login');
    }
    else if(aux == 1){
        res.redirect('/content')
    }


});

app.post('/login', function (req, res) {
    let aux = 0;
    console.log("post de login")
    for (let i = 0; i < data.length; i++) {
        let user = data[i].username;
        let hash = data[i].password;
    if (!req.body.username || !req.body.password) {
        console.log('login failed');
        res.send('login failed');
    } else if (req.body.username == user && bcrypt.compareSync(req.body.password, hash)) {
        req.session.user = req.body.username;
        req.session.admin = true;
        aux = 1;
        res.redirect('/content');
        break;

    } else {
        console.log(`login ${util.inspect(req.body)} failed`);
        if ( i == data.length -1 && aux == 0) {
            res.send("Contraseña incorrecta");
        }
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
//
// app.get('/cpass',function(req,res){
//     res.render('cpass',{ name:req.session.user  })
// });
//
app.get('/profile',function(req,res){
    let aux = 0;
    for (let i = 0; i < data.length;i++) {
        let user = data[i].username
        if (req.session.user == user) {
            aux = 1;
        }
    }

    if (aux == 0){
        res.redirect('/login')
    }
    else if(aux == 1){
        res.render('profile', {name: req.session.user})
    }

})

app.post('/profile',function(req,res){
    let aux = 0;
    for (let i = 0; i < data.length;i++) {
        if(req.session.user == data[i].username){
            aux = i;

        }
    }
    data[aux].password = bcrypt.hashSync(req.body.password);
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
