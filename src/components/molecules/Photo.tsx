import React from 'react'
import PhotoType from '../../types/Photo'

type PhotoProps = PhotoType

const Photo:React.VFC<PhotoProps> = ({label,photo_uri})=>{
  return (<div>
    <img src={photo_uri} alt="" loading="lazy" />
  </div>)
} 
export default Photo