const mongoose = require('mongoose');
const Schema = mongoose.Schema

const AddresspresentSchema = new Schema({
    address: {type: String},
    province: {type: String},
    distric: {type: String},
    subdistric: {type: String},
    postcode: {type: String}
})
module.exports = Addresspresent = mongoose.model('Addresspresent', AddresspresentSchema);