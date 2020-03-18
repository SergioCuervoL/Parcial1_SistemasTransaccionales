const rou = require('express').Router();
const conProductos = require ('../Controllers/conProductos');

rou.get('/', conProductos.list);
rou.post('/add', conProductos.save);
rou.get('/update/:id', conProductos.edit);
rou.post('/update/:id', conProductos.update);
rou.get('/delete/:id', conProductos.delete);

module.exports= rou;