import React from "react";

const HeaderMain:React.FC<{}> = ({children})=>{
  const [header,...main] = React.Children.toArray(children)
  return (
    <div className="h-full flex flex-col">
      <header>{header}</header>
      {main.map((v)=><main className="flex-grow">{v}</main>)}
    </div>
  )
}

export default HeaderMain