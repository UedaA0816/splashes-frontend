import { useState ,useEffect } from "react";
import { useWindowSize } from "./useWindowSize";

export function useWidthBreak(breakpoints:{break:number,width:number}[]) {
  const [windowSize, setWindowSize] = useState<number|undefined>(undefined);
  const { width } = useWindowSize()
  useEffect(() => {
    for (let p of breakpoints) {
      if(!width){
        setWindowSize(breakpoints[breakpoints.length-1].width)
        return
      }
      if(p.break < width){
        setWindowSize(p.width)
        break
      }
      
    }
    
  }, [width,breakpoints]);
  return windowSize;
}