import React, { useState, useEffect } from "react";
export const ProductContext = React.createContext();
const productsArray = [
  {
    name: "Cactus",
    price: 15,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/cactus.png",
    tagNumber: 1,
  },
  {
    name: "Fiddle-leaf Fig",
    price: 55,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/fig-leaf.png",
    tagNumber: 2,
  },

  {
    name: "Aloe Vera",
    price: 25,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/aloe.png",
    tagNumber: 3,
  },
  {
    name: "Boston Fern",
    price: 20,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016444/boston.jpg",
    tagNumber: 4,
  },
  {
    name: "Bird of Paradise",
    price: 75,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/birdof-paradise.png",
    tagNumber: 5,
  },
  {
    name: "Zanzibar Gem",
    price: 30,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/zanzibar.png",
    tagNumber: 6,
  },
  {
    name: "Banana Leaf Plant",
    price: 100,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590014908/banana-leaf.png",
    tagNumber: 7,
  },
  {
    name: "Parlour Palm ",
    price: 65,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016443/parlourpalm.png",

    tagNumber: 8,
  },
  {
    name: "Snake Plant",
    price: 35,
    image:
      "https://res.cloudinary.com/dhmh846wn/image/upload/v1590016444/snake_plant.png",
    tagNumber: 9,
  },
];

export const ProductProvider = (props) => {
  const [products, setProducts] = useState(productsArray);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
