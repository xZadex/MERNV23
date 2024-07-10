const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.get('/api', ProductController.index);
    app.get('/api/product', ProductController.findAllProducts)
    app.get('/api/product/:id', ProductController.findOne);
    app.patch('/api/product/:id', ProductController.updateExistingProduct);
    app.post('/api/product', ProductController.createProduct);
    app.delete('/api/product/:id', ProductController.deleteAnExistingProduct);
}