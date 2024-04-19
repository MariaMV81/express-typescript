"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)(); //creamos aplicación con express
app.use(express_1.default.json()); // le decimos que nuestra aplicación va a utilizar express.json como  que es un middleware que transforma la rep.body a un json
const PORT = 3000; //puerto donde se levanta nuestro servidor
//creamos un endpoint llamado ping
app.get('/ping', (_req, res) => {
    console.log('someone pinged here!!!'); //vemos que en el sevidor todo esta funcionando bien, que algien ha hecho ping
    res.send('pong'); //y contestamos pong
});
//Nuestra aplicacion va ha estar escuchando en el puerto 3000 y cuado eso ocurra
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
