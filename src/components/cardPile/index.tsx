import React from 'react';
import Card, { CardProps } from '../card'
import Container from './style'

const CardPile = (props: { cards: CardProps[] }) => {

  return (
    <Container>
      {props.cards.map((card) => <Card key={card.index} index={card.index} value={card.value} suit={card.suit} />)}
    </Container>
  )
}

export default CardPile
