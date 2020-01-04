const mongoose = require('mongoose');
const Schema = mongoose.Schema

const EmployeeSchema = new Schema({
    name: {type: String},
    identification: {type: String},
    identificationsocial: {type: String},
    nickname: {type: String},
    birthday: {type: Date},
    age: {type: Number},
    phonenumber: {type: String},
    gender: {type: String},
    wieght: {type: Number},
    hight: {type: Number},
    country: {type: String},
    nationality: {type: String},
    race: {type: String},
    religion: {type: String},
    status: {type: Boolean}, 
    position: {type: String},
})
module.exports = Employee = mongoose.model('Employee', EmployeeSchema)