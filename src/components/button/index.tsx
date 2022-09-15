import React from 'react';
import Container from './style'

const Button = ({ children }: ButtonProps) => {
  return (
    <Container >
      {children}
    </Container>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export default Button
