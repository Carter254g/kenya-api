const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const countiesRouter = require('./routes/counties');
const banksRouter = require('./routes/banks');
const mpesaRouter = require('./routes/mpesa');
const holidaysRouter = require('./routes/holidays');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    name: 'Kenya Public Data API',
    version: '1.0.0',
    description: 'A free public REST API serving Kenya public data',
    author: 'Carter254g',
    github: 'https://github.com/Carter254g/kenya-api',
    endpoints: {
      counties: '/api/counties',
      banks: '/api/banks',
      mpesa: '/api/mpesa/paybills',
      holidays: '/api/holidays',
    }
  });
});

app.use('/api/counties', countiesRouter);
app.use('/api/banks', banksRouter);
app.use('/api/mpesa', mpesaRouter);
app.use('/api/holidays', holidaysRouter);

app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Kenya API running on port ${PORT}`);
});

module.exports = app;
