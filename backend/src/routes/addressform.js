const router = require('express').Router();
const addressform = require('../services/addressform');

router.get('/', (req, res) => {res.json({info : `addressform route`})});
router.get('/lists', addressform.lists);

router.post('/add', addressform.add);
router.put('/edit/:id', addressform.edit);

router.delete('/delete/:id', addressform.deletes);

module.exports = router;