import React from 'react';
import './App.css';
import kodiri from './kodiri.jpg'

function Text() {
  return (
    <div>
      <h1>Welcome!!!!</h1>
      <About />
    </div>
  );
}

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Kodiri</h1>
      <p>next</p>
      <img src={kodiri} alt='kodiri'/>
      <Text />
  
    </div>
  );
}

export default App;
