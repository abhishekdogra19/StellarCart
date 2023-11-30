/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";

const Products = ({ products }) => {
  const [reversedProducts, setReversedProducts] = useState([]);
  useEffect(() => {
    setReversedProducts([...products].reverse());
  }, [products]);
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">
          Shopping Everyday
        </h1>
        <span className="w-20 h-[3px] bg-black"></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
          voluptatum, magni fugiat libero odit minima. Ipsa deserunt
          necessitatibus porro deleniti officia laborum repudiandae, ipsum eius
          obcaecati rerum facilis autem cupiditate.
        </p>
      </div>
      <div className="grid p-2 grid-cols-2 gap-2 sm:max-w-screen-xl mx-auto py-10 sm:grid-cols-4 sm:gap-10">
        {reversedProducts.map((item) => (
          <ProductsCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
