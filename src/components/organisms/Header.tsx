import { useEffect, useState } from "react"
import { useRecoilState, useSetRecoilState } from "recoil"
import { photoSearchTextFormState } from "../../atoms/PhotoSearchTextFormAtom"
import { useDebounce } from "../../customHooks/useDebounce"
import Logo from "../atoms/Logo"
import Button from "../molecules/Button"
import SearchInput from "../molecules/SearchInput"

const Header = ()=>{

  const [searchText, setSearchText] = useState("")
  const setSearchTextState = useSetRecoilState(photoSearchTextFormState)
  const debouncedSearchText = useDebounce(searchText,750)

  const handlerSearchInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchText(e.target.value)
  }

  useEffect(() => {
    setSearchTextState(debouncedSearchText)
  }, [debouncedSearchText])

  const addPhoto:React.MouseEventHandler<HTMLButtonElement> = (e)=>{

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