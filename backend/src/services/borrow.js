const Borrow = require('../models/borrow');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');


async function add (req, res, next) {
    const { employeeid, storeid } = req.body
    const datas = { employeeid, storeid }
    try {
        await Borrow.create(datas);
        return responces.success(res, success.saved)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    const { employeeid, storeid } = req.body
    const datas = { employeeid, storeid }
    try {
        await Borrow.findByIdAndUpdate(req.params.id, datas);
        return responces.success(res, success.updated)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists (req, res, next) {
    try {
        const rows = await Borrow.find();
        return responces.success(res, success.success, rows)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function deletes (req, res, next) {
    try {
        await Borrow.findByIdAndRemove(req.params.id);
        return responces.success(res, success.deleted)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists, deletes }