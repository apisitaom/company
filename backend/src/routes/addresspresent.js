const router = require('express').Router();
const addresspresent = require('../services/addresspresent');

router.get('/', (req, res) => {res.json({info : `addresspresent route`})});
router.get('/lists', addresspresent.lists);

router.post('/add', addresspresent.add);
router.put('/edit/:id', addresspresent.edit);

router.delete('/delete/:id', addresspresent.deletes);

module.exports = router;