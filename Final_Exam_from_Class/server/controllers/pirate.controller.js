const Pirate = require('../models/pirate.model');

module.exports.getAll = (req, res) => {
    Pirate.find()
        .then(pirates => res.json({pirates: pirates}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.getOne = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(pirates => res.json({pirates: pirates}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}

module.exports.create = (req, res) => {
    Pirate.create(req.body)
        .then(newPirate => res.json({pirates: newPirate}))
        .catch(err => res.status(400).json(err))
}

module.exports.update = (req, res) => {
    Pirate.findOneAndUpdate({_id: req.params.id}, req.body, {new: true, runValidators: true})
        .then(updatedPirate => res.json({pirates: updatedPirate}))
        .catch(err => res.status(400).json(err))
}

module.exports.delete = (req, res) => {
    Pirate.deleteOne({_id: req.params.id})
        .then(pirates => res.json({pirates: pirates}))
        .catch(err => res.json({message: "Something went wrong", error: err}))
}