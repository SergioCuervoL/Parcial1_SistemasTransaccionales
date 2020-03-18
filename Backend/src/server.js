const express = requiere('express');
const server = express(); 

server.listen(3000, ()=> {
    console.log('server in port 3000');
});