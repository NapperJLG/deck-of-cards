import React from 'react';
import Deck from './components/deck'
import Button from './components/button'

function App() {
  return (
    <div className="App">
      <Deck />
      <Button>
        Shuffle
      </Button>
    </div>
  );
}

export default App;
