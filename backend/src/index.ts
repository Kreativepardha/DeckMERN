import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import { config } from 'dotenv';
config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8000 ;


app.post("/decks", async (req,res) => {
    const newDeck = new Deck({
        title: req.body.title
        })
        const createdDeck =  await  newDeck.save()
        res.json(createdDeck);


})











mongoose.connect(process.env.DATABASE_URL! ?? "" )
.then(() => {
        console.log(`listening on port ${PORT}`)
        app.listen(PORT) 
})
