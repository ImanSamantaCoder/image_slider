import React from "react"
const Slider = ()=>{
    return (
        <div className="container">
            <div className="left-btn">
                 <button>{"<"}</button>
            </div>
            <img src="https://picsum.photos/id/0/5000/3333" alt="image"/>
            <div className="right-btn">
               <button>{">"}</button>
            </div>

        </div>
    )
}
export default Slider;
