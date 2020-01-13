const router = require('express').Router();
const borrow = require('../services/borrow');

router.get('/', (req, res) => {res.json({info : `borrow route`})});
router.get('/lists', borrow.lists);

router.post('/add', borrow.add);
router.put('/edit', borrow.edit);

router.delete('/delete', borrow.deletes);

module.exports = router;