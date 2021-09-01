import React, { useState } from 'react'
import PhotoType from '../../types/Photo'

type PhotoProps = PhotoType

const Photo:React.VFC<PhotoProps> = ({label,photo_uri})=>{
  const [hover, setHover] = useState(false)
  const handlerMouseEnter:React.MouseEventHandler<HTMLDivElement> = (e) => {
    setHover(true)
  }
  const handlerMouseLeave:React.MouseEventHandler<HTMLDivElement> = (e) => {
    setHover(false)
  }
  const className = `w-full rounded-2xl transition ${hover ? "filter brightness-75" : ""}`
  const textClassName = `text-white absolute bottom-0 w-full px-4 mb-2 font-bold text-lg opacity-0 transition-opacity ${hover?"opacity-100":""}`
  return (
    <div className="rounded-2xl relative" onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
      <img src={photo_uri} alt="" loading="lazy" className={className} />
      {
        <span className={textClassName}>{label}</span>
      }
    </div>
  )
}
export default Photo