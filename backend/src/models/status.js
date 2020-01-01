const mongoose = require('mongoose');
const Schema = mongoose.Schema

const StatusSchema = new Schema({
    status: {type: Boolean}
})
module.exports = Status = mongoose.model('Status', StatusSchema)