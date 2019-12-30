const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AddressformSchema = new Schema({
    adress: {type: String},
    province: {type: String},
    disstric: {type: String},
    sucdisstric: {type: String},
    postcode: {type: String}
})
module.exports = Addressform = mongoose.model('Addressform', AddressformSchema)