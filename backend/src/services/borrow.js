const Borrow = require('../models/borrow');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');
const middle = require('../lib/middle');

async function add (req, res, next) {
    const { storeid } = req.body
    const authenication = req.headers.authorization.split('Bearer');
    const decode = middle.verifyToken(authenication[1]);
    const datas = { employeeid: decode.data, storeid }
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
        await Borrow.find().
        populate('employeeid').
        populate('storeid').
        exec(function (err, story){
            if (err) return responces.error(res, errors.server);
            story.map(index => {
            })
            return responces.success(res, success.success, story)
        })
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