import React from "react";

const HeaderMain:React.FC<{width:number}> = ({children,width})=>{
  const [header,...main] = React.Children.toArray(children)
  return (
    <div className="h-full flex flex-col mx-auto" style={{width:width}}>
      <header>{header}</header>
      {main.map((v,i)=><main className="flex-grow" key={i}>{v}</main>)}
    </div>
  )
}

export default HeaderMain