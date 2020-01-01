const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AddressformSchema = new Schema({
    address: {type: String},
    province: {type: String},
    distric: {type: String},
    subdistric: {type: String},
    postcode: {type: String}
})
module.exports = Addressform = mongoose.model('Addressform', AddressformSchema)