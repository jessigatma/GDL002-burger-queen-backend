const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');
const bodyParser = require('body-parser')
// const Product = require('./models/Product')


const {
  port,
  mongoUrl,
  secret
} = config;
const app = express();


// Conectar aplicación a MongoDB
mongoose.connect(mongoUrl, {
  useNewUrlParser: true
});


app.set('config', config);
app.set('pkg', pkg);


app.use(express.json());
app.use(authMiddleware(secret));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

routes(app, (err) => {
  if (err) {
    throw err;
  }


  // Registro de "middleware" que maneja posibles errores
  app.use(errorHandler);

  app.listen(port, () => console.log(`App listening on port ${port}`));
});

/////////////////////////////////////////////////////////////////////////

// Registrar rutas

// app.get('/products', (req, res)=> {
//   res.status(200).send({products:[]})
// })

// app.get('/products/:productid', (req, res)=> {

// })

// app.post('/products', (req, res)=> {
//   console.log('POST /products')
//   console.log(req.body)
//   let product = new Product()
//   product.name = req.body.name
//   product.price = req.body.price
//   product.menu =  req.body.menu

//   product.save((err,productStored) => {
//     if(err) res.status(500).send({message:'Error al salvar la BD'})

//     res.status(200).send({product:productStored})
//   })
// })

// app.put('/products/:productid', (req, res)=> {

// })

// app.delete('/products/:productid', (req, res)=> {

// })
