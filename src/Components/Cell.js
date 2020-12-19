import React, { useState } from 'react';

const Cell = ({ obj, setCurr, ckey}) => {
    const [imgSrc, setImgSrc] = useState("./rec.svg");
    const enlargePic = () => {

        if (obj) {
            setImgSrc("./rec.svg");
            
        } else {
            setImgSrc("./delete.svg");
            
        }
        document.querySelector(".cell-" + ckey).classList.add("elementToAnimate");
        document.querySelector("#cell-container" + ckey).classList.add("disable");
        setCurr(!obj, ckey);
    }
    return (
        <div className="cell-container" onClick={enlargePic} id={"cell-container" + ckey}>
            <img src={imgSrc} alt="" width="0%" className={"cell-" + ckey} />
        </div>
    )
}
export default Cell;