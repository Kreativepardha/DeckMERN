import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Deck from './models/Deck';
import { config } from 'dotenv';
import cors from 'cors';
config();

const app = express();
const PORT = process.env.PORT || 8000 ;
app.use(cors({
        origin: "*"
}));
app.use(express.json());

app.get("/decks", async (req,res) => {

        const decks = await Deck.find();
        res.json(decks)

})

app.delete('/decks/:deckId', async(req,res) => {
                const deckId = req.params.deckId;

               const deck = await Deck.findByIdAndDelete(deckId);
               res.json(deck);

})

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
