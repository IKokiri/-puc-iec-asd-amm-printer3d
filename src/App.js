import React from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  window.addEventListener('appinstalled', (evt) => {    alert("Bem vindo ao Printer3D");});
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
