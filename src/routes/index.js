const product = require('./product');
const carousel = require('./carousel');
const cart = require('./cart');

function routes(app) {
  app.use('/product', product);
  app.use('/carousel', carousel);
  app.use('/cart', cart);
  app.use('/admin', (req, res) => {
    const account = req.body.admin_account
    const password = req.body.admin_password
    if (account === 'admin' && password === 'admin') {
      res.json({"error_code": 0, "status":"Login success"})
    } else {
      res.json({"error_code": 1, "status": "Login failed"})
    }
  })
}

module.exports = routes;