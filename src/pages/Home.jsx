import React, { useEffect, useState } from "react";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import axios from "axios";

const Home = () => {

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const getProducts = async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      return res.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  };

  useEffect(() => {
  getProducts()
  }, [])

  useEffect(() => {
    getProducts().then(products => {
      if (selectedCategory === "all") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(products.filter(product => product.category === selectedCategory));
      }
    });
  }, [selectedCategory]);
  

  return (
    <div style={{marginTop:"6rem"}}>
      <CategoryBar onSelectCategory={setSelectedCategory} />
      <ProductCard filteredProducts={filteredProducts} />
    </div>
  );
};

export default Home;
