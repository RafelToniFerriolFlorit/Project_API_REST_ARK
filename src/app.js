var express = require('express');
var app = express();
app.use (express.json());

const creaturesRoutes = require ('./routes/dinos-routes.js');
app.use ('/api/ark', creaturesRoutes);

const alumnnoRoutes = require ('./routes/alumno-routes.js');
app.use ('/api/alumnos', alumnnoRoutes);


app.listen (3000, () => console.log ('Servidor furula en http://localhost:3000'));

