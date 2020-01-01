const router = require('express').Router();
const store = require('../services/store');
const img = require('../lib/imageupload');

router.get('/', (req, res) => {res.json({info : `store route`})});
router.get('/lists', store.lists);

router.post('/add', img.upload, store.add);
router.put('/edit/:id', store.edit);

router.delete('/delete/:id', store.deletes);

module.exports = router;