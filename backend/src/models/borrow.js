const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BorrowSchema = new Schema({
    employeeid: {type: String},
    store: {type: String}
})
module.exports = Borrow = mongoose.model('Borrow', BorrowSchema)