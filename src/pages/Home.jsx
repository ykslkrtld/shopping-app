import React, { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import axios from "axios";
import { useActionData } from "react-router-dom";

const Home = () => {

  const [products, setProducts] = useState([])

  const getProducts = async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products")
      setProducts(res.data)
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
  getProducts()
  }, [])
  

  return (
    <div style={{marginTop:"6rem"}}>
      <CategoryBar style={{}} />
      <ProductCard products={products} />
    </div>
  );
};

export default Home;
