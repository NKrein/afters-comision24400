import React from 'react';
import { Badge } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs'

const CartWidget = () => {
  return (
    <>
      <BsCart3 style={{height: '50px'}}/><Badge bg="secondary">0</Badge>
    </>
  )
}

export default CartWidget;
