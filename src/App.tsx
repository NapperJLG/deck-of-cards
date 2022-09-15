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
    let tempDeck = []

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
    let newDeck = createDeck()
    let currentIndex = newDeck.length, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [newDeck[currentIndex], newDeck[randomIndex]] = [
        newDeck[randomIndex], newDeck[currentIndex]];
    }
    setDeck([...newDeck])
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
    let tempHand = hand
    tempHand.sort((a, b) => a.index - b.index).map((card, index, array) => card.value)
    setHand([...tempHand])
  }

  return (
    <div className='board'>
      <CardPile cards={deck} />
      <div className='button-row'>
        <Button onClick={() => shuffleDeck()}>Shuffle</Button>
        <Button onClick={() => drawCard()}>Draw Card</Button>
        <Button onClick={() => sortHand()}>Sort Hand</Button>
      </div>
      <CardPile cards={hand} />
    </div>
  );
}

export default App;
