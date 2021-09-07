import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactModal,{ Props } from "react-modal";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { photoIsOpenAddMotalState } from "../../atoms/PhotoIsOpenAddMotal";
import { photoUserIdState } from "../../atoms/PhotoUserIdAtom";
import { searchedPhotoListSelector } from "../../selectors/SearchedPhotoListSelector";
import { IAddPhotoForm } from "../../types/AddPhotoForm";
import { RFC3986_URI_REGEX } from "../../utils/common";
import Button from "../molecules/Button";
import ClearButton from "../molecules/ClearButton";
import LabelInput from "../molecules/LabelInput";


const AddModal:React.VFC<Props> = (props) => {
  
  const isOpen = useSetRecoilState(photoIsOpenAddMotalState)

  
  
  const { register, handleSubmit, formState: { errors } ,reset} = useForm<IAddPhotoForm>();
  
  const user_id = useRecoilValue(photoUserIdState)
  const updateSearchedPhotoList = useSetRecoilState(searchedPhotoListSelector)
  const onSubmit: SubmitHandler<IAddPhotoForm> = submitData => {
      const data = {
        "user_id":user_id ,
        "label":submitData.label,
        "photo_uri":submitData.photo_uri
      }
      axios.put(`http://localhost:3001/photo`,data).then(()=>{
        reset()
        isOpen(false)
        updateSearchedPhotoList(undefined)
      })
    }

    const close:React.MouseEventHandler<HTMLButtonElement> = (e)=>{
      reset()
      isOpen(false)
    }
    
    return (
      <ReactModal style={{overlay:{backgroundColor:"rgba(0,0,0,0.25)"},content:{width:`${620}px`,padding:"24px 32px",border:"none",borderRadius:"12px",top:"50%",left:"50%",bottom:"initial",right:"initial",transform:"translate(-50%,-50%)"}}} onRequestClose={close} ariaHideApp={false}  {...props}>
      <h1 className="text-2xl text-gray-900">Add a new photo</h1>
      <form className=" mt-[21px]" onSubmit={handleSubmit(onSubmit)}>
        <LabelInput label="Label" placeholder="Suspendisse elit massa" name="label" register={register} required />
        { errors.label && <p>required</p>}
        <LabelInput className="mt-[18.5px]" label="Photo URL" placeholder="https://example.com/image.jpg" name="photo_uri" register={register} required pattern={RFC3986_URI_REGEX} />
        { errors.photo_uri?.type === "pattern" && <p>not URL</p>}
        <div className=" mt-6 text-right">
          <ClearButton onClick={close} className="mr-2">Cancel</ClearButton>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </ReactModal>
  )
}

export default AddModal