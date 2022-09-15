import React from 'react';
import Card, { CardProps } from '../card'
import Container from './style'

const Deck = (props: { deck: CardProps[] }) => {

  return (
    <React.Fragment>
      <Container>
        {props.deck.map((card) => <Card index={card.index} value={card.value} suit={card.suit} />)}
      </Container>
    </React.Fragment>
  )

}

export default Deck
