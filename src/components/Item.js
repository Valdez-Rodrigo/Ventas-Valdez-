import React from 'react'
import {Card, Button} from 'react-bootstrap';

const Item = ({item}) => {
    const {name, price, image} = item;

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