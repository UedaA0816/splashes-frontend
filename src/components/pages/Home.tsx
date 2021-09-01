import React, { Suspense } from "react";
import Header from "../organisms/Header";
import Unsplash from "../organisms/Unsplash";
import HeaderMain from "../templates/HeaderMain";

const Home = ()=>{
  const width = 600
  return (
  <HeaderMain width={width}>
    <Header />
    <Suspense fallback={<p>loading</p>}>
      <Unsplash />
    </Suspense>
  </HeaderMain>
  )
}

export default Home