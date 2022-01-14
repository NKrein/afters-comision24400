import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const CartItem = ({ item, handleDelete }) => {
  return (
    <Card body>
      <Container>
        <Row>
          <Col>
            {item.product.title}
          </Col>
          <Col>
            {item.product.quant}
          </Col>
          <Col>
            {item.product.price}
          </Col>
          <Col>
          <Button variant='danger' onClick={handleDelete}>Delete</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default CartItem;
