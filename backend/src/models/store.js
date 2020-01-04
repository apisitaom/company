const mongoose = require('mongoose');
const Schema = mongoose.Schema

const StoreSchema = new Schema({
    picture: {type: String},
    name: {type: String},
    option: {type: String},
    detail: {type: String},
    category: {type: String}
})
module.exports = Store = mongoose.model('Store', StoreSchema)