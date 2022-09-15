import React, { useEffect, useState } from 'react';
import CardPile from './components/cardPile'
import { CardProps } from './components/card'
import Button from './components/button'

function App() {

  const [deck, setDeck] = useState<CardProps[]>([])
  const [hand, setHand] = useState<CardProps[]>([])

  useEffect(() => {
    createDeck()
  }, [])

  const createDeck = () => {
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

    return indexedDeck
  }

  const shuffleDeck = () => {
    let array = createDeck()
    let currentIndex = array.length, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    setDeck([...array])
    setHand([])
  }

  const drawCard = () => {
    let tempDeck = deck
    let tempHand = hand

    var element = tempDeck[tempDeck.length - 1];
    if (deck.length > 0) {
      tempDeck.splice(tempDeck.length - 1, 1);
      tempHand.push(element);

    }

    setDeck([...tempDeck])
    setHand([...tempHand])
  }

  const sortHand = () => {
    const tempHand = hand
    tempHand.sort((a, b) => a.index - b.index).map((card, index, array) => card.value)
    setHand([...tempHand])
  }

  return (
    <div className="App">
      <CardPile cards={deck} />
      <Button onClick={() => shuffleDeck()}>Shuffle</Button>
      <Button onClick={() => drawCard()}>Draw card</Button>
      <Button onClick={() => sortHand()}>Sort Hand</Button>
      <CardPile cards={hand} />
    </div>
  );
}

export default App;
