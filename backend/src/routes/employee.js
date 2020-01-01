const router = require('express').Router();
const employee = require('../services/employee');

router.get('/', (req, res) => {res.json({info : `employee route`})});
router.get('/lists', employee.lists);

router.post('/add', employee.add);
router.put('/edit/:id', employee.edit);

router.delete('/delete/:id', employee.deletes);

module.exports = router;