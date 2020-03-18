const rou = require('express').Router();

const conUsuarios = require('../Controllers/conUsuarios');

rou.get('/', conUsuarios.list);
rou.post('/add', conUsuarios.save);
rou.get('/update/:id', conUsuarios.edit);
rou.post('/update/:id', conUsuarios.update);
rou.get('/delete/:id', conUsuario.delete);

module.exports= rou;