const Order = require('../models/Order');
const {
  requireAuth,
  //   requireAdmin,
  //   isAdmin,
} = require('../middleware/auth');

module.exports = (app, next) => {

  app.get('/orders', requireAuth, (req, res) => {

    Order.find({}, (err, orders) => {
      if (err) return res.status(500).send({
        message: 'Error al realizar petición'
      });
      if (!orders) return res.status(404).send({
        message: 'No existe el producto'
      })

      res.status(200).send({
        orders
      })
    })
  });

  app.get('/orders/:orderId', requireAuth, (req, res) => {
    let orderId = req.params.orderId

    Order.findById(orderId, (err, order) => {
      if (err) return res.status(500).send({
        message: 'Error al realizar la petición'
      })
      if (!order) return res.status(404).send({
        message: 'No existe el producto'
      })

      res.status(200).send({
        order
      })
    })
  });

  app.post('/orders', requireAuth, (req, res) => {
    console.log('POST /orders')
    console.log(req.body)

    let order = new Order()

    product.food = req.body.food
    product.price = req.body.price
    product.status = req.body.status

    product.save((err, orderStored) => {
      if (err) res.status(500).send({
        message: `Error al salvar en la base de datos ${err}`
      })

      res.status(200).send({
        order: orderStored
      })
    })
  });

  app.put('/orders/:orderId', requireAuth, (req, res) => {
    let orderId = req.params.orderId
    let update = req.body

    Order.findByIdAndUpdate(orderId, update, (err, orderUpdated) => {
      if (err) res.status(500).send({
        message: `Error al salvar en la base de datos ${err}`
      })

      res.status(200).send({
        order: orderUpdated
      })
    })
  });

  app.delete('/orders/:orderId', requireAuth, (req, res) => {
    let orderId = req.params.orderId

    Order.findById(orderId, (err, order) => {
      if (err) res.status(500).send({
        message: `Error al salvar en la base de datos ${err}`
      })

      order.remove(err => {
        if (err) res.status(500).send({
          message: `Error al salvar en la base de datos ${err}`
        })

        res.status(200).send({
          message: 'El producto ha sido eliminado'
        })
      })
    })
  })



  return next();

}
