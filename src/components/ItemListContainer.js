import React, {useEffect, useState} from 'react';
import {prod} from './productos';
import ItemList from './ItemList';

function ItemListContainer({saludo}) {
    const [items, setItems] = useState([]);

    useEffect (() =>{
        setTimeout(() => {
        const data = new Promise((resolve, reject) =>{
            resolve(prod);
        });
            data.then((data) =>{
                setItems(data);
            });
            data.catch((err) =>{
            console.log(err);
        });
        }, 2000);      
    }, []); //cuando se deja vacío, se ejecuta una sola vez, cuando se pone una array, se ejecuta cada vez que cambia el array

    return (
        <>
            <h1>{saludo}</h1>
            <ItemList items={items} />
        </>
    );
  }
  
  export default ItemListContainer;