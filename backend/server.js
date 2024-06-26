import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
const port = process.env.PORT;

connectDB(); //Connect to MongoDB

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