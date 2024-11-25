const express = require('express');
const routers = require('./routers');

app = express();

app.use(express.json());

app.use(routers);

app.listen(8081, function(){
    console.log('O servidor está executando na url:http://localhost:8081')
})
