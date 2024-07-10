const AuthorController = require('../controllers/author.controller');

module.exports = function(app){
    app.get('/api', AuthorController.index);
    app.get('/api/author', AuthorController.findAllAuthors)
    app.get('/api/author/:id', AuthorController.findOne);
    app.patch('/api/author/:id', AuthorController.updateExistingAuthor);
    app.post('/api/author', AuthorController.createAuthor);
    app.delete('/api/author/:id', AuthorController.deleteAnExistingAuthor);
}