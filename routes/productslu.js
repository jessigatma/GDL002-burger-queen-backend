const Product = require('../models/Productlu');
const {
  requireAuth,
  //   requireAdmin,
  //   isAdmin,
} = require('../middleware/auth');

module.exports = (app, next) =>{

  app.get('/products/lunch',  (req, res) => {

    Product.find({}, (err, products) => {
      if (err) return res.status(500).send({
        message: 'Error al realizar petición'
      });
      if (!products) return res.status(404).send({
        message: 'No existe el producto'
      })

      res.status(200).send({
        products,
      });
    });
  });

  app.get('/products/lunch/:productId',  (req, res) => {
    const productId = req.params.productId;

    Product.findById(productId, (err, product) => {
      if (err) return res.status(500).send({
        message: 'Error al realizar la petición',
      });
      if (!product) return res.status(404).send({
        message: 'No existe el producto',
      });

      res.status(200).send({
        product,
      });
    });
  });

  app.post('/products/lunch',  (req, res) => {
    // console.log('POST /products');
    // console.log(req.body);

    const product = new Product();

    product.image = req.body.image;
    product.food = req.body.food;
    product.price = req.body.price;
    product.status = req.body.status;
    product.objectID = req.body.objectID;

    product.save((err, productStored) => {
      if (err) res.status(500).send({
        message: `Error al salvar en la base de datos ${err}`,
      })

      res.status(200).send({
        product: productStored,
      });
    });
  });

  app.put('/products/lunch/:productId',  (req, res) => {
    const productId = req.params.productId;
    const update = req.body;

    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
      if (err) res.status(500).send({
        message: `Error al salvar en la base de datos ${err}`,
      });

      res.status(200).send({
        product: productUpdated,
      });
    });
  });

  app.delete('/products/lunch/:productId',  (req, res) => {
    const productId = req.params.productId;

    Product.findById(productId, (err, product) => {
      if (err) res.status(500).send({
        message: `Error al salvar en la base de datos ${err}`,
      });

      product.remove((err) =>{
        if (err) res.status(500).send({
          message: `Error al salvar en la base de datos ${err}`,
        });

        res.status(200).send({
          message: 'El producto ha sido eliminado',
        });
      });
    });
  });

  return next();

};