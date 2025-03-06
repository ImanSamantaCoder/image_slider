import React,{useState,useRef,useEffect} from "react"
import data from "./data.json"
const Slider = ()=>{
    console.log(data[0].download_url)
    const [next,setnext] = useState(0);
    let ref = useRef(null);
    
    const handleNext = ()=>{
        setnext((previousValue)=>{
            if(previousValue==data.length-1)
            {
                return 0;
            }
            return previousValue+1;
        })
    }
    const handlePre = ()=>{
        if(next==0)
        {
            setnext(data.length-1)
        }
        else{
            setnext(next-1);
        }
    }
    useEffect(()=>{
      ref.current = setInterval(handleNext,1000);
      return(()=>{
         clearInterval(ref.current)
      })
    },[])
    return (
        <div className="container" onMouseEnter={()=>{clearInterval(ref.current)}} onMouseLeave={()=>ref.current = setInterval(handleNext,1000)}>
            <div className="left-btn">
                 <button onClick={handlePre}>{"<"}</button>
            </div>
            <img src={data[next].download_url} alt="image"/>
            <div className="right-btn">
               <button onClick={handleNext}>{">"}</button>
            </div>

        </div>
    )
}
export default Slider;
