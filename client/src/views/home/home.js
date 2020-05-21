import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/index";
import Hero from "../../components/Hero";
import PlantCard from "../../components/PlantCard";
import Api from "../../Utils/API";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Api.getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);
  console.log(products);

  return (
    <>
      <Nav />
      <Hero />
      <PlantCard products={products} />
    </>
  );
}

export default Home;
