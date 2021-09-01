import { useRecoilValue, useRecoilValueLoadable } from "recoil"
import { searchedPhotoListSelector } from "../../selectors/SearchedPhotoListSelector"
import StackGrider from "../molecules/StackGrider"

const Unsplash = ()=>{
  const photosLoadable = useRecoilValueLoadable(searchedPhotoListSelector)
  if(photosLoadable.state === "hasValue" && photosLoadable.contents){
    return <StackGrider array={photosLoadable.contents} />
  }else if(photosLoadable.state === "hasError" || !photosLoadable.contents){
    return <p>Error</p>
  }else{
    return <p>Loading</p>
  }
}

export default Unsplash