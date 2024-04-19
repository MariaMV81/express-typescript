import express from 'express'; //ESmodule
//const express = require('express') => commonjs, como se hacia antiguamente

import diaryRouter from './routes/diaries';

const app = express(); //creamos aplicación con express
app.use(express.json()); // le decimos que nuestra aplicación va a utilizar express.json como  que es un middleware que transforma la rep.body a un json

const PORT = 3000;//puerto donde se levanta nuestro servidor


//creamos un endpoint llamado ping
app.get('/ping', (_req, res) => {//ponemos _req pra ingnorar pues da error por la dependencia que hemos puesto en el tsconfig.json
    console.log('someone pinged here!!!' + new Date().toLocaleDateString());//vemos que en el sevidor todo esta funcionando bien, que algien ha hecho ping
    res.send('pong'); //y contestamos pong
})

app.use('/api/diaries', diaryRouter);

//Nuestra aplicacion va ha estar escuchando en el puerto 3000 y cuado eso ocurra
app.listen(PORT, () => {
       console.log(`Server running on port ${PORT}`); 
})
