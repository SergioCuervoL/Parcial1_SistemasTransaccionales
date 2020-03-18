const express = require('express');
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const server = express(); 

// imports routes

const Menuroute = require('./Routes/Menu');
const Productoroute = require('./Routes/Productos');
const Restauranteroute = require('./Routes/Restaurante');
const Usuariosroute = require('./Routes/Usuarios');


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
server.use(express.urlencoded({extended:false}));

 // routes
 server.use('/', Menuroute);
 server.use('/', Productoroute);
 server.use('/', Restauranteroute);
 server.use('/', Usuariosroute);


server.listen(server,get('port'), ()=> {
    console.log(`server on port ${app.get('port')}`);
});