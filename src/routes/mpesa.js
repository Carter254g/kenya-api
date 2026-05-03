const express = require('express');
const router = express.Router();
const mpesa = require('../data/mpesa.json');

router.get('/paybills', (req, res) => {
  const { category } = req.query;
  if (category) {
    const filtered = mpesa.paybills.filter(p =>
      p.category.toLowerCase() === category.toLowerCase()
    );
    return res.json({ count: filtered.length, data: filtered });
  }
  res.json({ count: mpesa.paybills.length, data: mpesa.paybills });
});

router.get('/paybills/:number', (req, res) => {
  const paybill = mpesa.paybills.find(p => p.number === req.params.number);
  if (!paybill) return res.status(404).json({ error: 'Paybill not found' });
  res.json({ data: paybill });
});

router.get('/categories', (req, res) => {
  const categories = [...new Set(mpesa.paybills.map(p => p.category))];
  res.json({ count: categories.length, data: categories });
});

module.exports = router;
