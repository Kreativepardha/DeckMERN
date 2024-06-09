import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import Deck from './models/Deck';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT || 8000 ;


app.post("/decks", async (req,res) => {
    const newDeck = new Deck({
        title: req.body.title
        })
        const createdDeck =  await  newDeck.save()
        res.json(createdDeck);


})











mongoose.connect(process.env.DATABASE_URL as string ||  "mongodb+srv://saradhipardha12:PARDHA123@cluster0.n0euu2z.mongodb.net/carddeck")
.then(() => {
        console.log(`listening on port ${PORT}`)
        app.listen(PORT) 
})
