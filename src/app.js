var express = require('express');
var app = express();

const criaturesRoutes = require ('./routes/dinos-routes.js');
app.use ('/api/ark', criaturesRoutes);

app.use (express.json());
app.listen (3000, () => console.log ('Servidor furula en http://localhost:3000'));

