const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const server = express(); 

// setting
server.set('port', process.env.PORT || 3000);
server.set('viw engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

 //middlewares
server.use(morgan('dev'));
server.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'Parcial_1'
}, 'single'));

 // routes


server.listen(server,get('port'), ()=> {
    console.log('server n port 3000');
});