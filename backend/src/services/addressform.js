const Addressform = require('../models/addressform');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');


async function add (req, res, next) {
    const { address, province, distric, subdistric, postcode } = req.body
    const datas = { address, province, distric, subdistric, postcode }
    try {
        await Addressform.create(datas);
        return responces.success(res, success.success)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    const { address, province, distric, subdistric, postcode } = req.body
    const datas = { address, province, distric, subdistric, postcode }
    try {
        await Addressform.findOneAndUpdate(req.params.id, datas);
        return responces.success(res, success.updated)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists (req, res, next) {
    try {
        const rows =  await Addressform.find();
        return responces.success(res, success.success, rows)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function deletes (req, res, next) {
    try {
        await Addressform.findByIdAndRemove(req.params.id);
        return responces.success(res, success.deleted)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists, deletes }