import React, { useState } from 'react';

const Cell = ({ obj, setCurr, ckey, setXArray, setOArray }) => {
    const [imgSrc, setImgSrc] = useState("./rec.svg");
    const enlargePic = () => {

        if (obj) {
            setImgSrc("./rec.svg");
            setXArray(-1);
            setOArray(ckey);
        } else {
            setImgSrc("./delete.svg");
            setOArray(-1);
            setXArray(ckey);
        }
        document.querySelector(".cell-" + ckey).classList.add("elementToAnimate");
        document.querySelector("#cell-container" + ckey).classList.add("disable");
        setCurr(!obj)
    }
    return (
        <div className="cell-container" onClick={enlargePic} id={"cell-container" + ckey}>
            <img src={imgSrc} alt="" width="0%" className={"cell-" + ckey} />
        </div>
    )
}
export default Cell;