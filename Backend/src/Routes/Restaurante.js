const rou = require('express').Router();

const conRestaurante = require('../Controllers/conRestaurante');

rou.get('/', conRestaurante.list);
rou.post('/add', conRestaurante.save);
rou.get('/update/:id', conRestaurante.edit);
rou.post('/update/:id', conRestaurante.update);
rou.get('/delete/:id', conRestaurante.delete);

module.exports= rou;