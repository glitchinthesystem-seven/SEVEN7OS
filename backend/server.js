const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'SEVEN7OS Backend Orbiting' }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server aligned at http://localhost:${PORT}`));
