const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Buyer backend ready' });
});

module.exports = router;
