import React from "react";
import { useWidthBreak } from "../../customHooks/useWidthBreak";
import Header from "../organisms/Header";
import Unsplash from "../organisms/Unsplash";
import HeaderMain from "../templates/HeaderMain";

const Home = ()=>{
  const w = useWidthBreak([{break:1020,width:960},{break:820,width:760},{break:620,width:560},{break:0,width:300}])
  const width = w ? w : 0
  return (
  <HeaderMain width={width}>
    <Header />
    <Unsplash />
  </HeaderMain>
  )
}

export default Home