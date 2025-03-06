import React,{useState} from "react"
import data from "./data.json"
const Slider = ()=>{
    console.log(data[0].download_url)
    const [next,setnext] = useState(0);
    const handleNext = ()=>{
        if(next==data.length-1)
        {
            setnext(0)
        }
        else
        {
        setnext(next+1);
        }
    }
    return (
        <div className="container">
            <div className="left-btn">
                 {/* <button onClick={handlePrevious}>{"<"}</button> */}
            </div>
            <img src={data[next].download_url} alt="image"/>
            <div className="right-btn">
               <button onClick={handleNext}>{">"}</button>
            </div>

        </div>
    )
}
export default Slider;
