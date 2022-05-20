import React from 'react'
// import {Card, Button} from 'react-bootstrap';

const Item = ({item}) => {
    const {name, price, image, descripcion} = item;
  return (
    <div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h5>{descripcion}</h5>
      <p>{price}</p>


        {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{price}</Card.Text>
            <Button variant="primary">+ informacion</Button>
        </Card.Body>
        </Card> */}
    </div>
  );
};

export default Item;