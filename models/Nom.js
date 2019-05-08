const mongoose = require('mongoose')
const Schema = mongoose.Schema

const NomSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
      }
})

module.exports = mongoose.model('nom', NomSchema)