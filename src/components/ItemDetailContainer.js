import { React, useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const id = 1;

  useEffect(() => {
    setLoading(true);

    const URL = 'https://fakestoreapi.com/products/';
    const getItem = fetch(URL)

    getItem
      .then((res) => res.json())
      .then((res) => {
        setProduct(res.find(product => product.id === id))
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id]);

  return (
    <>
      {loading ? <Loader /> : <ItemDetail product={product} />}
    </>
  );
}

export default ItemDetailContainer;
