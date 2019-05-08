const Prihod = require('../models/Prihod')
const errorHandler = require('../utils/errorHandler')

module.exports.getAll = async function(req, res) {
    const query = {
    }

    try {
        const prihod = await Prihod
            .find(query)
            .sort({date: -1})
            .skip(+req.query.offset)
            .limit(+req.query.limit)

        res.status(200).json(prihod)
    } catch (e) {
        errorHandler(res, e)
    }
}

module.exports.create = async function(req, res) {
    try {
        const prihod = await new Prihod({
            status: 'В наличии',
            nom : req.body.nom,
            ediz: req.body.ediz,
            quantity: req.body.quantity,
            contr : req.body.contr,
            sklad: req.body.sklad,
            prihodUser: req.body.prihodUser
        }).save()

        res.status(201).json(prihod)
    } catch (e) {
        errorHandler(res, e)
    }
}
