const express = require('express');
const router = express.Router();
const banks = require('../data/banks.json');

router.get('/', (req, res) => {
  const { search } = req.query;
  if (search) {
    const filtered = banks.filter(b =>
      b.name.toLowerCase().includes(search.toLowerCase()) ||
      b.shortname.toLowerCase().includes(search.toLowerCase())
    );
    return res.json({ count: filtered.length, data: filtered });
  }
  res.json({ count: banks.length, data: banks });
});

router.get('/:code', (req, res) => {
  const bank = banks.find(b => b.code === req.params.code);
  if (!bank) return res.status(404).json({ error: 'Bank not found' });
  res.json({ data: bank });
});

module.exports = router;
