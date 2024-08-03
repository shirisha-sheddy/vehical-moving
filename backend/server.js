const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const dummyData = [
  {"latitude": 17.385044, "longitude": 78.486671, "timestamp": "2024-07-20T10:00:00Z"},
  {"latitude": 17.385045, "longitude": 78.486672, "timestamp": "2024-07-20T10:00:05Z"},
  {"latitude": 17.385046, "longitude": 78.486673, "timestamp": "2024-07-20T10:00:10Z"},
  {"latitude": 17.385047, "longitude": 78.486674, "timestamp": "2024-07-20T10:00:15Z"},
  {"latitude": 17.385048, "longitude": 78.486675, "timestamp": "2024-07-20T10:00:20Z"}
];

let currentIndex = 0;

app.get('/api/vehicle-location', (req, res) => {
  currentIndex = (currentIndex + 1) % dummyData.length;
  res.json(dummyData[currentIndex]);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
