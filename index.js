const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const connectionString = require("./config").dbConnection
const products_controller = require('./products_controller');
const port = 4500
// require('dotenv').config()

massive( connectionString ).then(function(dbInstance){
    app.set("db", dbInstance)
})

const app = express();
app.use( bodyParser.json() );
app.use( cors() );

app.post( '/api/product', products_controller.create );
app.get( '/api/products', products_controller.getAll );
app.get( '/api/product/:id', products_controller.getOne );
app.put( '/api/product/:id', products_controller.update );
app.delete( '/api/product/:id', products_controller.delete );

app.listen(port, () => {
    console.log("Listening on port 4500")
})