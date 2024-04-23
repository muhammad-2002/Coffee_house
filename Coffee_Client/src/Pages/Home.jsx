import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import PopularProducts from "../Components/PopularProducts";

const Home = () => {
  const loaderData = useLoaderData();
  console.log(loaderData);
  const [coffees, setCoffee] = useState(loaderData);
  return (
    <div>
      <PopularProducts
        coffees={coffees}
        setCoffee={setCoffee}
      ></PopularProducts>
    </div>
  );
};

export default Home;
