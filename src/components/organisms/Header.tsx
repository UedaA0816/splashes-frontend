import { useRecoilState } from "recoil"
import { photoIsOpenAddMotalState } from "../../atoms/PhotoIsOpenAddMotal"
import { photoSearchTextFormState } from "../../atoms/PhotoSearchTextFormAtom"
import Logo from "../atoms/Logo"
import Button from "../molecules/Button"
import SearchInput from "../molecules/SearchInput"
import AddModal from "./AddModal"

const Header = ()=>{

  const [searchText, setSearchText] = useRecoilState(photoSearchTextFormState)

  const handlerSearchInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value)
  }
  const addPhoto:React.MouseEventHandler<HTMLButtonElement> = (e)=> isOpen(true)

  const [open, isOpen] = useRecoilState(photoIsOpenAddMotalState)
  

  return (
    <div className="py-8 flex h-[119px]">
      <Logo className="my-auto mr-6 h-[26px]" />
      <SearchInput onChange={handlerSearchInput} value={searchText} />
      <span className="flex-grow pr-2"></span>
      <Button className="flex-shrink-0" onClick={addPhoto}>Add a photo</Button>
      <AddModal isOpen={open} />
    </div>
  )
}

export default Header