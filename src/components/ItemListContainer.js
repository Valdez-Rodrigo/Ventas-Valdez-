import React from 'react';
import { useEffect, useState } from 'react';
import {prod} from './Productos';
import ItemList from './ItemList';

function ItemListContainer({saludo}) {
    const [items, setItems] = useState([]);

    useEffect (() =>{
        
        const delay = async(time, callback) => {
            setTimeout(() => {
                callback()
            }, time)
        }
        delay(2000, () => {
            setItems(prod)
        })
        
    }, []); //cuando se deja vacío, se ejecuta una sola vez, cuando se pone una array, se ejecuta cada vez que cambia el array


    return (
        <>
            <h1>{saludo}</h1>
            <ItemList items={items} />
        </>
    );
  }
  
  export default ItemListContainer;