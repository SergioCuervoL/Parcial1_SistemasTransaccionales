const rou = require('express').Router();

const conMenu = require('../Controllers/conMenu');

rou.get('/', conMenu.list);
rou.post('/add', conMenu.save);
rou.get('/update/:id',conMenu.edit);
rou.post('/update/:id',conMenu.update);
rou.get('/delete/:id', conMenu.delete);

module.exports= rou;