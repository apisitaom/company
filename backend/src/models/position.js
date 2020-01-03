const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PositionSchema = new Schema({
    position: {type: String},
})
module.exports = Position = mongoose.model('Position', PositionSchema)