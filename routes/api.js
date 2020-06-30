const router = require('express').Router();
const db = require('../models');

router.get('/', (req, res) => {
	db.Product.find({})
		.then(data => res.send(data))
		.catch(err => res.send(err));
});

router.post('/product', (req, res) => {
	db.Product.create({
		title: 'Test'
	}).then(() => {
		res.send('Done');
	});
});

module.exports = router;