import './App.css';
import React from 'react';
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import img from './logo.svg'
import ItemCount from './components/ItemCount';


function App() {
  return (
    <div className="App">
        <NavBarComponent />
        <img src="logo192.png" />
        <ItemListContainer saludo = "Bienvenido a mi tienda" />
        <ItemCount />
    </div>
  );
}

export default App;
