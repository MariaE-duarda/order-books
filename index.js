const express = require('express');
const server = express();
const path = require('path');

(async() => {
    const database = require('./db');
    const Perfil = require('./models/perfil');

    try{
        const resultado = await database.sync();
        console.log(resultado);

        const resultadoCreate = await Perfil.create({
            nome: 'Ana',
            email: 'ana@gmail.com',
            senha: 'senha123',
            login: 'Ana'
        })

        const resultadoCreate2 = await Perfil.create({
            nome: 'Eduarda',
            email: 'eduarda@gmail.com',
            senha: 'senha321',
            login: 'Eduarda'
        })

        console.log(resultadoCreate);
        console.log(resultadoCreate2);
    } catch(error){
        console.log(error);
    }
})();

server.get('./login', (req, res) => {
    res.sendFile(path.join(__dirname+'/pages/login.html'));
})

server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/index.html'))
})

server.listen(3030)