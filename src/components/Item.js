import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem'}}>
      <Card.Img variant="top" src={product.image} width='100px' height='200px'/>
      <Card.Body style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Price ${product.price}
        </Card.Text>
        <Button variant="primary">View details</Button>
      </Card.Body>
    </Card>
  )
}

export default Item;