import React from "react";
import MainBanner from "../Components/Banner/MainBanner";

const Home = () => {
  return (
    <MainBanner
      header={"Serving you since 1989."}
      paragraph={
        "Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City."
      }
      buttonText={"Shop Merch"}
    />
  );
};

export default Home;
