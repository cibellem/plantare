import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/index";
import Hero from "../../components/Hero";
import PlantCard from "../../components/PlantCard";
import Api from "../../Utils/API";

function Home() {
  const [products, setProducts] = useState([]);
  // when the page loads a call is made to the db to display all the plants
  useEffect(() => {
    Api.getAllProducts().then((res) => {
      setProducts(res.data);
    });
  }, []);

 

  return (
    <>
      <Nav />
      <Hero />
      <PlantCard products={products} />
    </>
  );
}

export default Home;
