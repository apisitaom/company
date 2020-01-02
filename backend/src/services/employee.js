const Employee = require('../models/employee');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');


async function add (req, res, next) {
    const { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, positionid } = req.body
    const datas = { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, positionid }
    try {
        await Employee.create(datas);
        return responces.success(res, success.saved)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    const { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, positionid } = req.body
    const datas = { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, positionid }
    try {
        await Employee.findByIdAndUpdate(req.params.id, datas);
        return responces.success(res, success.updated)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists (req, res, next) {
    try {
        const rows = await Employee.find();
        return responces.success(res, success.success, rows)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function deletes (req, res, next) {
    try {
        await Employee.findByIdAndRemove(req.params.id);
        return responces.success(res, success.deleted)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists, deletes }