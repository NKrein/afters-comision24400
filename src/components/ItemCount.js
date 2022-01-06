import { useState } from "react";
import { Button } from "react-bootstrap";

const ItemCount = ({ stock, initial, onAdd }) => {

  const [contador, setContador] = useState(initial);

  const aumentarContador = () => {
    if (contador <= stock) setContador(contador + 1);
  };

  const disminuirContador = () => {
    if (contador > initial) setContador(contador - 1);
  };

  return (
    <div style={{display: 'flex', flexFlow: 'row'}}>
      <Button style={{margin: '1rem'}} variant='dark' onClick={disminuirContador}>
        -
      </Button>
      <p style={{margin: '1rem'}}>{contador}</p>
      <Button style={{margin: '1rem'}} variant='dark' onClick={aumentarContador}>
        +
      </Button>
      <Button style={{margin: '1rem'}} variant='success'>Add to cart</Button>
    </div>
  );
}

export default ItemCount;
