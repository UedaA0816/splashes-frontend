import { useRecoilValue } from "recoil"
import { searchedPhotoListSelector } from "../../selectors/SearchedPhotoListSelector"
import Photo from "../molecules/Photo"

const Unsplash = ()=>{
  const photos = useRecoilValue(searchedPhotoListSelector)
  if(!photos) return <p>Error</p>
  return (
    <div className="flex flex-wrap">
      {photos.map((v)=> <Photo {...v} key={v._id} />)}
    </div>
  )
}

export default Unsplash