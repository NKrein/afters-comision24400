import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loader = () => {
  return (
    <div>
      <Spinner style={{margin: '.5rem'}} animation="grow" size="lg" variant="primary" />
      <Spinner style={{margin: '.5rem'}} animation="grow" size="lg" variant="primary" />
      <Spinner style={{margin: '.5rem'}} animation="grow" size="lg" variant="primary" />
    </div>
  )
}

export default Loader;
