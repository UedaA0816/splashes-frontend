import PhotoType from "../../types/Photo"
import Photo from "./Photo"

const StackGrider = ({array}:{array:PhotoType[]}) => {
  
  const getRow = (num:number)=>{
    return (
      <div className="w-[calc((100%-32px)/3)] flex flex-col gap-4">
        {
          array.filter((_,i)=>i%3 === num).map((v)=> <Photo {...v} key={v._id} />)
        }
    </div>
    )
  }

  return(
    <div className="flex justify-between">
      {
        getRow(0)
      }
      {
        getRow(1)
      }
      {
        getRow(2)
      }
    </div>
  )
}

export default StackGrider