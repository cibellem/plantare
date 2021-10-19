import React, { useState, useEffect } from "react";
import Nav from "../../components/Nav/index";
import Hero from "../../components/Hero";
import PlantCard from "../../components/PlantCard";


import Api from "../../Utils/API";

function Home() {



  return (
    <>
      <Nav />
      <Hero />
      <PlantCard/>
    </>
  );
}

export default Home;
