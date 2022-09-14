import React from 'react';
import Container from './style'

const Card = () => {
  return (
    <Container />
  )
}

export interface CardProps {
  index: number;
  suit: string;
  value: string;
}

export default Card 
