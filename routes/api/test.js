const router = require('express').Router();

router.get('/', async (req, res) => {
	return res.end();
});

module.exports = router;
