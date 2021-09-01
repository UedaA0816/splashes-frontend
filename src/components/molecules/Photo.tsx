import React from 'react'
import PhotoType from '../../types/Photo'

type PhotoProps = PhotoType

const Photo:React.VFC<PhotoProps> = ({label,photo_uri})=>{
  return (<div className="">
    <img src={photo_uri} alt="" loading="lazy" className="w-full" />
  </div>)
} 
export default Photo