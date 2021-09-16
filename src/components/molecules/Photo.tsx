import axios from 'axios'
import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { searchedPhotoListSelector } from '../../selectors/SearchedPhotoListSelector'
import PhotoType from '../../types/Photo'
import WarningButton from './WarningButton'

type PhotoProps = PhotoType

const Photo:React.VFC<PhotoProps> = ({label,photo_uri,_id})=>{
  const [hover, setHover] = useState(false)
  const handlerMouseEnter:React.MouseEventHandler<HTMLDivElement> = (e) => {
    setHover(true)
  }
  const handlerMouseLeave:React.MouseEventHandler<HTMLDivElement> = (e) => {
    setHover(false)
  }
  const updateSearchedPhotoList = useSetRecoilState(searchedPhotoListSelector)
  const handlerOnClick:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    const data = {
      "objectId":_id
    }
    axios.delete("http://localhost:3001/photo",{"data":data}).then(()=>{ 
      updateSearchedPhotoList(undefined)
    })
  }
  const className = `w-full rounded-2xl transition ${hover ? "filter brightness-75" : ""}`
  const textClassName = `text-white absolute bottom-0 w-full px-4 mb-2 font-bold text-lg opacity-0 transition-opacity ${hover?"opacity-100":""}`
  const buttonClassName = `absolute top-0 w-full p-3 text-right opacity-0 transition-opacity ${hover?"opacity-100":""} ${hover?"":"hidden"}`
  return (
    <div className="rounded-2xl relative" onMouseEnter={handlerMouseEnter} onMouseLeave={handlerMouseLeave}>
      <img src={photo_uri} alt="" loading="lazy" className={className} />
      {
        <span className={textClassName}>{label}</span>
      }
      {
        <span className={buttonClassName}><WarningButton onClick={handlerOnClick}>delete</WarningButton></span>
      }
    </div>
  )
}
export default Photo