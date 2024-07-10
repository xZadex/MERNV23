const PirateController = require("../controllers/pirate.controller");

module.exports = app => {
    app.get('/api/pirates', PirateController.getAll)
    app.get('/api/pirate/:id', PirateController.getOne)
    app.post('/api/pirate/new', PirateController.create)
    app.put('/api/pirate/update/:id', PirateController.update)
    app.delete('/api/pirate/delete/:id', PirateController.delete)
}