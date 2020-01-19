const monngoose = require('mongoose');
const Schema = monngoose.Schema

const AdminSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
})
module.exports = Admin = monngoose.model('Admin', AdminSchema);