import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <Card style={{ width: '18rem', margin: '1rem'}}>
      <Card.Img variant="top" src={product.image} width='100px' height='200px'/>
      <Card.Body style={{display: 'flex', flexFlow: 'column', justifyContent: 'space-evenly' }}>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Price ${product.price}
        </Card.Text>
        <Link className='btn btn-primary' to={`/item/${product.id}`}>View details</Link>
      </Card.Body>
    </Card>
  )
}

export default Item;