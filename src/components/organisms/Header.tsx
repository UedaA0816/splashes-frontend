import axios from "axios"
import { useRecoilState, useRecoilValue } from "recoil"
import { photoSearchTextFormState } from "../../atoms/PhotoSearchTextFormAtom"
import { photoUserIdState } from "../../atoms/PhotoUserIdAtom"
import Logo from "../atoms/Logo"
import Button from "../molecules/Button"
import SearchInput from "../molecules/SearchInput"

const Header = ()=>{

  const [searchText, setSearchText] = useRecoilState(photoSearchTextFormState)

  const handlerSearchInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value)
  }

  const user_id = useRecoilValue(photoUserIdState)

  const ramdomMath = (max:number,min:number) => Math.floor( Math.random() * (max + 1 - min) ) + min ;
  const addPhoto:React.MouseEventHandler<HTMLButtonElement> = (e)=>{

    const height = ramdomMath(1000,100)
    const width = ramdomMath(1000,100)
    const data = {
      "user_id":user_id ,
      "label":"test",
      "photo_uri":`https://placehold.jp/${height}x${width}.png`
    }
    axios.put(`http://localhost:3001/photo`,data)
  }
  return (
    <div className="py-8 flex h-[119px]">
      <Logo className="my-auto mr-6 h-[26px]" />
      <SearchInput onChange={handlerSearchInput} value={searchText} />
      <span className="flex-grow pr-2"></span>
      <Button className="flex-shrink-0" onClick={addPhoto}>Add a photo</Button>
    </div>
  )
}

export default Header