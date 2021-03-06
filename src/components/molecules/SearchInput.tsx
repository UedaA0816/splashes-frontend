import React from "react";
import SearchIcon from "../atoms/SearchIcon";

type inputProps = JSX.IntrinsicElements['input']

const SearchInput: React.FC<inputProps> = ({ children, placeholder,...props }) => {

  return (
    <div className="flex justify-center items-center border border-solid border-[#BDBDBD] box-border rounded-xl w-[300px]">
      <SearchIcon className="h-[24px] m-4 mr-2" />
      <input placeholder={placeholder ? placeholder : "Search by name"} {...props} className="mr-2 outline-none flex-grow">{children}</input>
    </div>
  )
}

export default SearchInput