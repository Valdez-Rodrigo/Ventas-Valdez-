import React, {Fragment, useEffect, useState} from 'react';
import {Table, Button} from 'react-bootstrap';
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
        <fragment>
            <h1>{saludo}</h1>
            <ItemList items={items} />
            <Table className='responsive'>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>button</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>
                            <Button variant="dark">Dark</Button>{' '}
                        </td>
                    </tr>

                    <tr>
                        <td>Mark</td>
                        <td>
                            <Button variant="dark">Dark</Button>{' '}
                        </td>
                    </tr>
                    
                    <tr>
                        <td>Mark</td>
                        <td>
                            <Button variant="dark">Dark</Button>{' '}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </fragment>
    );
  }
  
  export default ItemListContainer;