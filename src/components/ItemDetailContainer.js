import { useContext } from "react";
import { React, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import ItemDetail from "./ItemDetail";
import Loader from "./Loader";

const ItemDetailContainer = () => {

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [added, setAdded] = useState(false);

  // const id = 1;
  const { id } = useParams();

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);

    const URL = `https://fakestoreapi.com/products/${id}`;
    const getItem = fetch(URL)

    getItem
      .then((res) => res.json())
      .then((res) => {
        setProduct(res)
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false))
  }, [id]);

  const onAdd = (count) => {
    addToCart(product, count);
    setAdded(true); // seteo en tru cuando es agregado el producto
  }

  return (
    <>
      {loading ? <Loader /> : <ItemDetail onAdd={onAdd} product={product} added={added} />}
    </>
  );
}

export default ItemDetailContainer;
