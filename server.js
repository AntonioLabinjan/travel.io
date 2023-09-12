const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

// Definirajte rute za unos podataka o putovanju i izračun troškova
app.post('/api/calculate', (req, res) => {
  const { distance, fuelConsumption, fuelPrice, ...otherExpenses } = req.body;

  // Izračunajte troškove putovanja
  const fuelCost = (distance / fuelConsumption) * fuelPrice;
  const totalExpenses = fuelCost + Object.values(otherExpenses).reduce((acc, expense) => acc + expense, 0);

  res.json({ totalExpenses });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
