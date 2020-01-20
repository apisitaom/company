const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');
const Employee = require('../models/employee');
const Store = require('../models/store');

async function employeeCount (req, res, next) {
    try {
        const rows = await Employee.find().count();
        return responces.success(res, success.success, rows);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function storeCount (req, res, next) {
    try {
        const rows = await Store.find().count();
        return responces.success(res, success.success, rows);
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { employeeCount, storeCount }