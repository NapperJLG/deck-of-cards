import React, { useEffect, useState } from 'react';
import Deck from './components/deck'
import { CardProps } from './components/card'
import Button from './components/button'

function App() {

  const [deck, setDeck] = useState<CardProps[]>([])

  useEffect(() => {
    const suits = ['clubs', 'diamonds', 'hearts', 'spades']
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
    const tempDeck = []

    for (let x = 0; x < suits.length; x++) {
      for (let y = 0; y < values.length; y++) {
        let card = { suit: suits[x], value: values[y] };
        tempDeck.push(card);
      }
    };

    const indexedDeck = tempDeck.map((card, i) => { return { ...card, index: i } })
    setDeck(indexedDeck)
  }, [])

  return (
    <div className="App">
      <Deck deck={deck} />
      <Button>Shuffle</Button>
    </div>
  );
}

export default App;
