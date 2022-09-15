import React from 'react';
import Card, { CardProps } from '../card'
import Container from './style'

const CardPile = (props: { cards: CardProps[] }) => {

  return (
    <React.Fragment>
      <Container>
        {props.cards.map((card) => <Card index={card.index} value={card.value} suit={card.suit} />)}
      </Container>
    </React.Fragment>
  )
}

export default CardPile
