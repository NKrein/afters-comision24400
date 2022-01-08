import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';

const ItemDetail = ({ product, onAdd, added }) => {
  return (
    <Container>
      <Row>
        <Col>
          <img src={product.image} alt={product.title} width='500px' />
        </Col>
        <Col style={{display: 'flex', flexFlow: 'column', alignItems: 'center', justifyContent: 'space-evenly'}}>
          <h3>{product.title}</h3>
          <p>{product.category}</p>
          <p>Precio ${product.price}</p>
          <p>{product.description}</p>
          {added ? <Link to='/cart'>Go to Cart</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail;
