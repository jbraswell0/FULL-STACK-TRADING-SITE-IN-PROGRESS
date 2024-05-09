import express from 'express';
const port = 5000;

const app = express();

app.get('/', (req, res) => { 
    res.send('API is running...');
});

{/* GET request to find a card example
    
    app.get('/api/cards/:id', (req, res) => {
        const card = cards.find((c) => c._id === req.params.id);
        res.json(card);
    });
*/}

app.listen(port, () => console.log(`Server running on port ${port}`));