
import { useEffect, useState } from 'react'
import './App.css'


type TDeck = {
  title: string;
  _id: string;

}

function App() {
   const [title,setTitle] = useState('')
  const [decks,setDecks] = useState<TDeck[]>([]);


    async function handleCreateDeck(e: React.FormEvent ) {
      e.preventDefault();
      await fetch("http://localhost:8000/decks", {
          method:"POST",
        body: JSON.stringify({
          title,
        }),
        headers: {
          "Content-Type" : "application/json", 
        }
      })
      setTitle("");
    }

    useEffect(() =>{
      async function fetchDecks() {
        try {
          const res =  await fetch("http://localhost:8000/decks")
          if (!res.ok) {
           throw new Error('Failed to fetch decks');
         }
           const newDecks =  await res.json();  
          setDecks(newDecks)
         }
        catch (error) {
            console.error(error);
        }}
      
      fetchDecks();
    },[])

  return (
    <div className='App'>
    <ul className="decks">
    {decks.map((deck) => (
  <li key={deck._id}>{deck.title}</li>
))}

    
    </ul>
    <form onSubmit={handleCreateDeck} >
      <label htmlFor="deck-title">DEck title</label>
      <input type="text" id="deck-title" 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setTitle(e.target.value);
        }}/>
      <button>Create Deck</button>
    </form>
    </div>
  )
}

export default App
