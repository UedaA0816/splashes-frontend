import React from "react";
import { Path, UseFormRegister } from "react-hook-form";
import { IAddPhotoForm } from "../../types/AddPhotoForm";

type InputProps = {
  label:string;
  name: Path<IAddPhotoForm>;
  register: UseFormRegister<IAddPhotoForm>;
  required: boolean;
  pattern?: RegExp;
  placeholder: string;
  className?: string;
};

const SearchInput: React.VFC<InputProps> = ({ label, name, register, required, pattern, placeholder, className }) => {

  return (
    <div className={className}>
      <label className="block font-medium text-sm text-gray-900">{label}</label>
      <div className=" flex items-center mt-[10px] px-5 h-14 w-full box-border rounded-xl border border-gray-900 shadow">
        <input placeholder={placeholder || "Search by name"} {...register(name, { required, pattern })}  className=" font-medium text-sm text-gray-600 w-full outline-none"></input>
      </div>
    </div>
  )
}

export default SearchInput