const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AddresspresentSchema = new Schema({
    adress: {type: String},
    province: {type: String},
    disstric: {type: String},
    sucdisstric: {type: String},
    postcode: {type: String}
})
module.exports = Addresspresent = mongoose.model('Addresspresent', AddresspresentSchema);