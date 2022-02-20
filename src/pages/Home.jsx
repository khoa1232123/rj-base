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
  TitleHead,
} from "../components";

const Home = () => {
  return (
    <>
      <TitleHead title="Home Page" />
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
