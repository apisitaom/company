const router = require('express').Router();
const addressform = require('../services/addressform');

router.get('/', (req, res) => {res.json({info : `addressform route`})});
router.get('/lists', addressform.lists);

router.post('/add', addressform.add);
router.put('/edit', addressform.edit);

router.delete('/delete', addressform.deletes);

module.exports = router;