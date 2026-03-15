const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (request, response) => {
    response.json({ message: "Welcome to the DigiMarket API!" });
});

//test endpoint for business
let businesses = [];
app.post('/businesses', (request, response) => {
    const business = request.body;
    businesses.push(business);
    response.json({ message: "Business added successfully!", data: business });
});

app.get('/businesses', (request, response) => {
    response.json({ data: businesses });
}); 

app.listen(PORT, () => {
    console.log(`DigiMarket backend is running on http://localhost:${PORT}`);
});