const Employee = require('../models/employee');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');
const middle = require('../lib/middle');

async function add (req, res, next) {
    const { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, position, status, email, password } = req.body
    const datas = { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, position, status, email, password }
    try {
        await Employee.create(datas);
        return responces.success(res, success.saved)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    const { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, position, status, email, password } = req.body
    const datas = { name, identification, identificationsocial, nickname, birthday, age, phonenumber, gender, wieght, hight, country, nationality, race, religion, position, status, email, password }
    try {
        
        await Employee.findByIdAndUpdate(req.params.id, datas);
        return responces.success(res, success.updated)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists (req, res, next) {
    try {
        //select * from employee where status = true;
        const rows = await Employee.find({status: { $all: true }});
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

async function login (req, res, next) {
    const { email, password } = req.body
    if(!email || !password) {
        return responces.error(res, errors.params);
    }
    try {
        // select email, password from employee where email = $1, and password = $2;
        const rows = await Employee.find({email: `${email}`, password: `${password}`}, {password, email});
        if( rows[0] ) {
            const token = middle.generateToken(rows[0]._id);
            return responces.token(res, success.success, '', token);
        }
        return responces.error(res, errors.params);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists, deletes, login }