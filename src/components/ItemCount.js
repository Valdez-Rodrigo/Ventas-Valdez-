import React, {useState, useEffect} from 'react'
import { Fragment } from 'react';
import {Button} from 'react-bootstrap'

function ItemCount() {
    const [numero, setNumero] = useState(0)
    const [boton, setBoton] = useState('Add to Cart')

    const suma = () => {
        setNumero(numero + 1);
    };

    const handleButton = () => {
        setBoton('Next Purchase')
    };

    useEffect (() => {

    }, [boton]);

  return (
    <Fragment>
        <div className='mb-2'>
            <Button variant="outline-primary" size="sm">-</Button>{' '}
            <p>{numero}</p>
            <Button variant="outline-primary" size="sm" onClick={suma}>+</Button>{' '}
        </div>
        <div>
            <Button variant="primary" onClick={handleButton}>{boton}</Button>{' '}
        </div>
    </Fragment>
  )
}

export default ItemCount;