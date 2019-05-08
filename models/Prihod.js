const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PrihodSchema = new Schema ({
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        required: true
    },
    nom: {
        type: String,
        required: true
    },
    ediz: {
        type: String,
        required: true
    },
    quantity: {
        type: String,
        required: true
    },
    contr: {
        type: String,
        required: true
    },
    sklad: {
        type: String,
        required: true
    },
    prihodUser: {
        type: String,
        required: true
    },
    user: {
        ref: 'users',
        type: Schema.Types.ObjectId
      }
})

module.exports = mongoose.model('prihods', PrihodSchema)