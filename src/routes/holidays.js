const express = require('express');
const router = express.Router();
const holidays = require('../data/holidays.json');

router.get('/', (req, res) => {
  const { type } = req.query;
  if (type) {
    const filtered = holidays.filter(h =>
      h.type.toLowerCase().includes(type.toLowerCase())
    );
    return res.json({ count: filtered.length, data: filtered });
  }
  res.json({ count: holidays.length, data: holidays });
});

module.exports = router;
