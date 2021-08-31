import Logo from "../atoms/Logo"
import Button from "../molecules/Button"
import SearchInput from "../molecules/SearchInput"

const Header = ()=>{
  return (
    <div className="py-8 flex h-[119px]">
      <Logo className="my-auto mr-6 h-[26px]" />
      <SearchInput />
      <span className="flex-grow"></span>
      <Button>Add a photo</Button>
    </div>
  )
}

export default Header