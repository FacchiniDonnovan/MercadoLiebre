const express = require('express');
const app = express();
const path = require('path');
const APP_PORT = 4001;

const publicFolderPath = path.resolve('public');
app.use(express.static(publicFolderPath));

app.listen(APP_PORT, () =>
    console.log('---------------> Servidor corriendo en puerto 4001.')
);

app.get('/', (req, res) => {
    res.sendFile(path.resolve('views/home.html'))
});