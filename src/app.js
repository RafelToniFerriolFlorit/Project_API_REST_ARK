var express = require('express');
var app = express();


app.use(express.json());
app.set("trust proxy", 1);

const criaturesRoutes = require ('./routes/dinos-routes.js');
app.use ('/api/ark', criaturesRoutes);


const PORT = process.env.PORT || 3000;


app.listen(PORT, "0.0.0.0", () => {
    console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
});

