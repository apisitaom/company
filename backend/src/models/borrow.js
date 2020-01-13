const mongoose = require('mongoose');
const Schema = mongoose.Schema

const BorrowSchema = new Schema({
    employeeid: {type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true},
    storeid: {type: Schema.Types.ObjectId, ref: 'Store'}
})
module.exports = Borrow = mongoose.model('Borrow', BorrowSchema)    