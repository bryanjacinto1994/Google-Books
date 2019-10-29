const db = require("../models");


module.exports = {
    findAll: function (req, res) {
        db.Book
            .find(req.query)
            .sort({ date: 1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(404).json(err));
    },


    findById: function(req, res)  {
        db.Book
        .findById(req.params.id)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },

    update: function (req,res) {
        db.Book
        .findOneAndUpdate({ _id: req.params.id}, req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(404).json(err));
    },

    delete: function (req, res) {
        db.Book
        .findById({_id: req.params.id}) 
        .then(dbModel => dbModel.remove())
        .catch(err => res.status(404).json(err));
    }
}

