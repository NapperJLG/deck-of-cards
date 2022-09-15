import React from 'react';
import Container from './style'

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <Container onClick={onClick} >
      {children}
    </Container>
  )
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string
}

export default Button
