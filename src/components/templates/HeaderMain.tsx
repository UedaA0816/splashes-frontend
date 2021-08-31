import React from "react";

const HeaderMain:React.FC<{}> = ({children})=>{
  const [header,...main] = React.Children.toArray(children)
  return (
    <div>
      <header>{header}</header>
      {main.map((v)=><main>{v}</main>)}
    </div>
  )
}

export default HeaderMain