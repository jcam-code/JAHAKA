const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Welcome to the DigiMarket API!" });
});

//test endpoint for business
let businesses = [];
app.post('/businesses', (req, res) => {
    const business = req.body;
    businesses.push(business);
    res.json({ message: "Business added successfully!", data: business });
});

app.get('/businesses', (req, res) => {
    res.json({ data: businesses });
}); 

app.listen(PORT, () => {
    console.log(`DigiMarket backend is running on http://localhost:${PORT}`);
});