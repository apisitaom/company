const router = require('express').Router();
const position = require('../services/position');

router.get('/', (req, res) => {res.json({info : `position route`})});
router.get('/lists', position.lists);

router.post('/add', position.add);
router.put('/edit/:id', position.edit);

router.delete('/delete/:id', position.deletes);

module.exports = router;