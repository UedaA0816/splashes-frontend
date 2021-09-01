import { useRecoilValue } from "recoil"
import { searchedPhotoListSelector } from "../../selectors/SearchedPhotoListSelector"
import Photo from "../molecules/Photo"
import StackGrider from "../molecules/StackGrider"

const Unsplash = ()=>{
  const photos = useRecoilValue(searchedPhotoListSelector)
  if(!photos) return <p>Error</p>
  return <StackGrider array={photos} />
}

export default Unsplash