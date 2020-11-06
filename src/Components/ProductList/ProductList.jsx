import React, { useContext } from "react";
import Title from "../Title/Title";
import Product from "./Product/Product";
import { GlobalContext } from "../../Context/GlobalState";

const ProductList = () => {
  const { products } = useContext(GlobalContext);

  return (
    <>
      <section className="py-4">
        <div className="container">
          <Title name={"our"} title={"products"} />
          <div className="row">
              {products.map(product =>{
                  return  <Product key={product.id} products={product}/>
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductList;
