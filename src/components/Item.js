import React from 'react'
import {Card, Button} from 'react-bootstrap';

const Item = ({items}) => {
    const {name, price, image} = items;

  return (
    <div>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
    </div>
  );
};

export default Item;