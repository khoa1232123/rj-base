import React from "react";
import {
  BannerOne,
  BannerThree,
  BannerTwo,
  BestChoice,
  Brands,
  ListAnimal,
  NewArrival,
  Slider,
} from "../components";

const Home = () => {
  return (
    <>
      <Slider />
      <BannerOne />
      <NewArrival />
      <BannerTwo />
      <ListAnimal />
      <BestChoice />
      <BannerThree />
      <Brands />
    </>
  );
};

export default Home;
