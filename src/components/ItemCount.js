import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import { Fragment } from 'react';
import {Button} from 'react-bootstrap'

export default function ItemCount({value}) {

    const [counter, setCounter] = useState(value);

    const handleAdd = () => setCounter(counter + 1);
    const handleSubstract = () => setCounter(counter - 1);
    const handleReset = () => setCounter(value);

  return (
    <Fragment>
        <div className='mb-2'>
            <h1>Counter</h1>
            <h2>{counter}</h2>
            <Button onClick={handleSubstract} variant="outline-primary" size="sm">-1</Button>{' '}
            <Button onClick={handleReset} variant="primary" size="sm">Reset</Button>{' '}
            <Button onClick={handleAdd} variant="outline-primary" size="sm">+1</Button>{' '}
        </div>
    </Fragment>
  );
};

ItemCount.propTypes = {
    value: PropTypes.number
}

ItemCount.defaultProps = {
    value: 0
};
