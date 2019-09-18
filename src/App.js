import React from 'react';
import './App.css';
import { Cards } from './Cards';
import { strikes } from './StrikeList.js';
import { guards } from './GuardList.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Learn how to lightsaber fight!</h1>
      </header>
      <main>
        <Cards type="strike" cards={strikes}/>
        <Cards type="guard" cards={guards}/>
      </main>
    </div>
  );
}

export default App;
