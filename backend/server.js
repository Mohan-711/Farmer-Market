const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const farmerRoutes = require('./farmer');
const companyRoutes = require('./company');
const buyerRoutes = require('./buyer');
const logisticsRoutes = require('./logistics');
const governmentRoutes = require('./government');
const loginRoutes = require('./Login');
const consumerRoutes = require('./consumer');

app.use('/api/farmer', farmerRoutes);
app.use('/api/company', companyRoutes);
app.use('/api/buyer', buyerRoutes);
app.use('/api/logistics', logisticsRoutes);
app.use('/api/government', governmentRoutes);
app.use('/api/login', loginRoutes);
app.use('/api/consumer', consumerRoutes);

app.get('/', (req, res) => {
  res.json({ message: 'Farmer Market backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
