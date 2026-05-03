const express = require('express');
const router = express.Router();
const counties = require('../data/counties.json');

router.get('/', (req, res) => {
  const { region } = req.query;
  if (region) {
    const filtered = counties.filter(c => c.region.toLowerCase() === region.toLowerCase());
    return res.json({ count: filtered.length, data: filtered });
  }
  res.json({ count: counties.length, data: counties });
});

router.get('/:code', (req, res) => {
  const county = counties.find(c => c.code === parseInt(req.params.code));
  if (!county) return res.status(404).json({ error: 'County not found' });
  res.json({ data: county });
});

module.exports = router;
