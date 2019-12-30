const router = require('express').Router();

router.get('/', (req, res) => {res.json({info : `status route`})});
// router.get('/lists', aboutme.lists);

// router.post('/add', aboutme.add);
// router.post('/edit/:id', aboutme.edit);

module.exports = router;