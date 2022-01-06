import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';

const ItemDetail = ({ product }) => {
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
          <ItemCount stock={product.stock} initial={1} />
        </Col>
      </Row>
    </Container>
  )
}

export default ItemDetail;
