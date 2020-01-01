const router = require('express').Router();
const category = require('../services/category');

router.get('/', (req, res) => {res.json({info : `category route`})});
router.get('/lists', category.lists);

router.post('/add', category.add);
router.put('/edit/:id', category.edit);

router.delete('/delete/:id', category.deletes);

module.exports = router;