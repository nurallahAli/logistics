import React, { useState } from "react";
import Head from "./Head";
import Outputs from "../Outputs/Outputs";
import Form from "./Form";

export default function Card() {
  const [products, setProducts] = useState([]);

  const insertProduct = (product) => {
    setProducts(prevProducts => [...prevProducts, product]);
  }

  return (
    <div className="curds">
      <Head title="curd" head="product management system" />
      <Form btn="Create" insertProduct={insertProduct} />
      <Outputs products={products} />
    </div>
  );
}