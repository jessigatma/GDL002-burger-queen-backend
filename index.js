const express = require('express');
const mongoose = require('mongoose');
const config = require('./config');
const authMiddleware = require('./middleware/auth');
const errorHandler = require('./middleware/error');
const routes = require('./routes');
const pkg = require('./package.json');
const bodyParser = require('body-parser');
const cors = require('cors');
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
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());
// app.use(bodyParser.json());

routes(app, (err) => {
  if (err) {
    throw err;
  }


  // Registro de "middleware" que maneja posibles errores
  app.use(errorHandler);

  app.listen(port, () => console.log(`App listening on port ${port}`));
});

