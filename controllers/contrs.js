const Contr = require('../models/Contr')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
    try {
        const contr = await Contr.find({
        })
        res.status(200).json(contr)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.getById = async function(req, res) {
    try {
        const contr = await Contr.findById(req.params.id)
        res.status(200).json(contr)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.remove = async function(req, res) {
    try {
      await Contr.remove({_id: req.params.id})
      res.status(200).json({
        message: 'Номенклатура удалена.'
      })
    } catch (e) {
      errorHandler(res, e)
    }
  }

module.exports.create = async function(req, res) {
    const contr = new Contr({
        name: req.body.name,
        user: req.user.id
    })

    try {
        await contr.save()
        res.status(201).json(contr)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.update = async function(req, res) {
    const updated = {
      name: req.body.name
    }
  
    try {
      const contr = await Contr.findOneAndUpdate(
        {_id: req.params.id},
        {$set: updated},
        {new: true}
      )
      res.status(200).json(contr)
    } catch (e) {
      errorHandler(res, e)
    }
  }