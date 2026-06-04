const jsonServer = require('json-server');
const cors = require('cors');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Configurar el puerto dinámico para Render
const port = process.env.PORT || 3000;

// Habilitar CORS y middlewares por defecto
server.use(cors());
server.use(middlewares);

// Usar el router de JSON Server
server.use(router);

server.listen(port, () => {
    console.log(`JSON Server está corriendo en el puerto ${port}`);
});