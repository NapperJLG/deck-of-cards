import styled from "styled-components";

const Container = styled.div<{ suit: string }>`
  width: 125px;
  height: 175px;
  background-color: white;
  border-radius: 4px;
  position: relative;
  margin-left: -145px;
  border: solid 1px black;
  overflow: hidden;
  

  .text, .bottom-text {
    display: flex;
    flex-direction: column;
    margin: 5px;
    overflow: hidden;
    color: ${props => props.suit === 'spades' || props.suit === 'clubs' ? 'black' : 'red'}
  }

  .bottom-text {
  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: rotate(180deg)
}
`

export default Container
