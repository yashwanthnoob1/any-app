const markets = [
  {
    question: 'Will SpaceX land humans on Mars before 2030?',
    yesPrice: 0.45,
    noPrice: 0.55,
    volume: 12345.67
  },
  {
    question: 'Will Bitcoin close above $100k in 2025?',
    yesPrice: 0.32,
    noPrice: 0.68,
    volume: 98765.43
  },
  {
    question: 'Will proposal #123 pass in the DAO?',
    yesPrice: 0.7,
    noPrice: 0.3,
    volume: 4321.0
  }
];

function renderMarkets() {
  const list = document.getElementById('market-list');
  markets.forEach(market => {
    const card = document.createElement('div');
    card.className = 'market-card';

    const title = document.createElement('h2');
    title.textContent = market.question;
    card.appendChild(title);

    const prices = document.createElement('div');
    prices.className = 'prices';
    prices.innerHTML = `<span>Yes: ${market.yesPrice}</span><span>No: ${market.noPrice}</span>`;
    card.appendChild(prices);

    const volume = document.createElement('div');
    volume.className = 'volume';
    volume.textContent = `Volume: ${market.volume}`;
    card.appendChild(volume);

    list.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', renderMarkets);
