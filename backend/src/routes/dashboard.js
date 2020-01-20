const router = require('express').Router();
const dashboard = require('../services/dashboard');

router.get('/', (req, res) => {res.json({info : `dashboard route`})});
router.get('/employeecount', dashboard.employeeCount);
router.get('/storecount', dashboard.storeCount);

module.exports = router;