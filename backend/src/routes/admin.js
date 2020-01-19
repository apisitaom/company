const router = require('express').Router();
const admin = require('../services/admin');

router.get('/', (req, res) => {res.json({info : `admin route`})});
router.get('/lists', admin.lists);

router.post('/add', admin.add);
router.put('/edit/:id', admin.edit);

router.delete('/delete/:id', admin.deletes);

module.exports = router;