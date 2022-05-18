import './App.css';
import React from 'react';
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Image from 'react-bootstrap/Image';



function App() {
  return (
    <div className="App">
        <NavBarComponent />
        <Image className='img-fluid' src="casa-presentacion.jpg" />
        <ItemListContainer saludo = "Bienvenido a mi tienda" />
    </div>
  );
}

export default App;
