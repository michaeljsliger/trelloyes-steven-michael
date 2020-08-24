import React from 'react';
import List from './list';
import STORE from './store';

function App(props) {
  const STORE = props.STORE;
  const cardsArr = [];
    for (let i = 0; i < STORE.lists.length; i++){
        let objArr = [];
      // get the objects from allCards
        for (let key in STORE.allCards) {
          if (STORE.lists[i].cardIds.includes(key)) {
            objArr.push(STORE.allCards[key]);
          }
        }
        cardsArr.push(
            <List header={STORE.lists[i].header} cards={objArr} />
        )
    }

  return (
    <main className='App'>
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
        {cardsArr}
      </div>
    </main>
  );
}

export default App;