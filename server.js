const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// In-memory market storage
const markets = [
  {
    market_id: '1',
    question: 'Will SpaceX land humans on Mars before 2030?',
    outcomes: ['Yes', 'No'],
    liquidity_pool: {
      yes_price: 0.45,
      no_price: 0.55
    },
    volume: 0,
    status: 'open'
  }
];

app.get('/', (req, res) => {
  res.send('Prediction Market API');
});

app.get('/markets', (req, res) => {
  res.json(markets);
});

app.post('/markets', (req, res) => {
  const { question, outcomes } = req.body;
  if (!question || !Array.isArray(outcomes) || outcomes.length < 2) {
    return res.status(400).json({ error: 'Invalid market data' });
  }

  const newMarket = {
    market_id: (markets.length + 1).toString(),
    question,
    outcomes,
    liquidity_pool: {},
    volume: 0,
    status: 'open'
  };
  markets.push(newMarket);
  res.status(201).json(newMarket);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
