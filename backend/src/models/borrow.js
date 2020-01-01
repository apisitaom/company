const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BorrowSchema = new Schema({
    employeeid: {type: String},
    storeid: {type: String}
})
module.exports = Borrow = mongoose.model('Borrow', BorrowSchema)