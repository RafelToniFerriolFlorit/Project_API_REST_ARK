var express = require('express');
var app = express();

const dinousRoutes = require ('./src/routes/dinos_routes.js');
app.use('/api/dinosaurios', dinousRoutes);

app.use(express.json());
app.listen(3000, () => console.log('Servidor en http://localhost:3000'));