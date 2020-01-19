const Admin = require('../models/admin');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');

function add (req, res, next) {
    const { email, password } = req.body
    const datas = { email, password }
    try {
        if(!email || !password) {
            return responces.error(res, errors.params);
        }
        Admin.create(datas);
        return responces.success(res, success.saved)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}


async function edit (req, res, next) {
    const { email, password } = req.body
    const datas = { email, password }
    try {
        await Admin.findByIdAndUpdate(req.params.id, datas);
        return responces.success(res, success.updated);  
    } catch (error) {
        return responces.error(req, errors.server);
    }
}

async function lists (req, res, next) {
    try {
        const rows = await Admin.find();
        return responces.success(res, success.success, rows);  
    } catch (error) {
        return responces.error(req, errors.server);
    }
}

async function deletes (req, res, next) {
    try {
        await Admin.findByIdAndRemove(req.params.id);
        return responces.success(res, success.deleted);  
    } catch (error) {
        return responces.error(req, errors.server);
    }
}

module.exports = { add, edit, lists, deletes }