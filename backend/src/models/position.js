const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PositionSchema = new Schema({
    name: {type: String},
    statusid: {type: String},
    contack: {type: String}
})
module.exports = Position = mongoose.model('Position', PositionSchema)