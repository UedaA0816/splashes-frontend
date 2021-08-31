import React from "react";
import Header from "../organisms/Header";
import Unsplash from "../organisms/Unsplash";
import HeaderMain from "../templates/HeaderMain";

const Home = ()=>{
  return (
  <HeaderMain>
    <Header />
    <Unsplash />
  </HeaderMain>
  )
}

export default Home