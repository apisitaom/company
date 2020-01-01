const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PositionSchema = new Schema({
    name: {type: String},
    position: {type: String},
    phonecontack: {type: String},
    statusid: {type: String}
})
module.exports = Position = mongoose.model('Position', PositionSchema)