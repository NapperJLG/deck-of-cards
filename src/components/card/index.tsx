import React from 'react';
import Container from './style'

const Card = (props: CardProps) => {

  const suitSymbol = () => {
    switch (props.suit) {
      case 'clubs':
        return <span>&#9827;</span>
      case 'spades':
        return <span>&#9824;</span>
      case 'diamonds':
        return <span>&#9830;</span>
      case 'hearts':
        return <span>&#9829;</span>
    }
  }

  return (
    <Container suit={props.suit}>
      <div className='text'>
        <span >{props.value}</span>
        {suitSymbol()}
      </div>
      <div className='bottom-text'>
        <span >{props.value}</span>
        {suitSymbol()}
      </div>
    </Container>
  )
}

export interface CardProps {
  index: number;
  suit: string;
  value: string;
}

export default Card 
