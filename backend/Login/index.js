const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.json({ message: 'Login backend ready' });
});

module.exports = router;
