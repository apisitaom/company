const Addresspresent = require('../models/addresspresent');
const responces = require('../lib/responces');
const success = require('../lib/success');
const errors = require('../lib/error');


async function add (req, res, next) {
    try {
        return responces.success(res, success.success)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function edit (req, res, next) {
    try {
        return responces.success(res, success.success)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function lists (req, res, next) {
    try {
        return responces.success(res, success.success)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}

async function deletes (req, res, next) {
    try {
        return responces.success(res, success.success)
    } catch (error) {
        return responces.error(res, errors.server);
    }
}