const Nom = require('../models/Nom')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
    try {
        const nom = await Nom.find({
        })
        res.status(200).json(nom)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const nom = await Nom.findById(req.params.id)
        res.status(200).json(nom)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
      await Nom.remove({_id: req.params.id})
      res.status(200).json({
        message: 'Номенклатура удалена.'
      })
    } catch (e) {
      errorHandler(res, e)
    }
  }

module.exports.create = async function(req, res) {
    const nom = new Nom({
        name: req.body.name,
        user: req.user.id
    })

    try {
        await nom.save()
        res.status(201).json(nom)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    const updated = {
      name: req.body.name
    }
  
    try {
      const nom = await Nom.findOneAndUpdate(
        {_id: req.params.id},
        {$set: updated},
        {new: true}
      )
      res.status(200).json(nom)
    } catch (e) {
      errorHandler(res, e)
    }
  }