const Addresspresent = require('../models/addresspresent');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');


async function add (req, res, next) {
    const { address, province, distric, subdistric, postcode } = req.body
    const datas = { address, province, distric, subdistric, postcode }
    try {
        await Addresspresent.create(datas);
        return responces.success(res, success.saved)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    const { address, province, distric, subdistric, postcode } = req.body
    const datas = { address, province, distric, subdistric, postcode }
    try {
        await Addresspresent.findByIdAndUpdate(req.params.id, datas);
        return responces.success(res, success.updated)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists (req, res, next) {
    try {
        const rows = await Addresspresent.find();
        return responces.success(res, success.success, rows)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function deletes (req, res, next) {
    try {
        await Addresspresent.findByIdAndRemove(req.params.id);
        return responces.success(res, success.deleted)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

module.exports = { add, edit, lists, deletes }