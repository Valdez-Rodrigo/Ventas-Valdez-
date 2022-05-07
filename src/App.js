import './App.css';
import React from 'react';
import NavBarComponent from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


function App() {
  return (
    <div className="App">
        <NavBarComponent />
        <ItemListContainer />
    </div>
  );
}

export default App;
