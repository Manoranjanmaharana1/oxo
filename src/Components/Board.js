import React, { useEffect, useState } from 'react';
import Cell from './Cell';

const Board = () => {
    const [curr, setCurr] = useState(true);
    const [o_arr, setOArray] = useState([]);
    const [x_arr, setXArray] = useState([]);
    const [winner, setWinner] = useState(<></>);
    const [gameover, setResults] = useState(false);
    const replay = () => {
        for (let i = 1; i <= 9; ++i) {
            document.querySelector("#cell-container" + i.toString()).classList.remove("disable");
            document.querySelector(".cell-" + i.toString()).classList.remove("elementToAnimate");
        }
        setCurr(true);
        setOArray([]);
        setXArray([]);
        setWinner(<></>);
        setResults(false);

    }




    useEffect(() => {
        if (!gameover) {
            if ((o_arr.indexOf("1") !== -1 && o_arr.indexOf("2") !== -1 && o_arr.indexOf("3") !== -1)
                || (o_arr.indexOf("4") !== -1 && o_arr.indexOf("5") !== -1 && o_arr.indexOf("6") !== -1)
                || (o_arr.indexOf("7") !== -1 && o_arr.indexOf("8") !== -1 && o_arr.indexOf("9") !== -1)
                || (o_arr.indexOf("1") !== -1 && o_arr.indexOf("4") !== -1 && o_arr.indexOf("7") !== -1)
                || (o_arr.indexOf("2") !== -1 && o_arr.indexOf("5") !== -1 && o_arr.indexOf("8") !== -1)
                || (o_arr.indexOf("3") !== -1 && o_arr.indexOf("6") !== -1 && o_arr.indexOf("9") !== -1)
                || (o_arr.indexOf("1") !== -1 && o_arr.indexOf("5") !== -1 && o_arr.indexOf("9") !== -1)
                || (o_arr.indexOf("3") !== -1 && o_arr.indexOf("5") !== -1 && o_arr.indexOf("7") !== -1)) {
                console.log("o");
                setResults(true);
                setWinner(
                    <>
                    <div className="result">
                        
                        <h1>O Won!!</h1>
                    </div>
                    <div className="reload" onClick={replay}>Replay</div>
                    </>
                )
                freeze();
            }
            else if ((x_arr.indexOf("1") !== -1 && x_arr.indexOf("2") !== -1 && x_arr.indexOf("3") !== -1)
                || (x_arr.indexOf("4") !== -1 && x_arr.indexOf("5") !== -1 && x_arr.indexOf("6") !== -1)
                || (x_arr.indexOf("7") !== -1 && x_arr.indexOf("8") !== -1 && x_arr.indexOf("9") !== -1)
                || (x_arr.indexOf("1") !== -1 && x_arr.indexOf("4") !== -1 && x_arr.indexOf("7") !== -1)
                || (x_arr.indexOf("2") !== -1 && x_arr.indexOf("5") !== -1 && x_arr.indexOf("8") !== -1)
                || (x_arr.indexOf("3") !== -1 && x_arr.indexOf("6") !== -1 && x_arr.indexOf("9") !== -1)
                || (x_arr.indexOf("1") !== -1 && x_arr.indexOf("5") !== -1 && x_arr.indexOf("9") !== -1)
                || (x_arr.indexOf("3") !== -1 && x_arr.indexOf("5") !== -1 && x_arr.indexOf("7") !== -1)) {
                console.log("x");
                setWinner(
                    <>
                    <div className="result">
                        
                        <h1>X Won!!</h1>
                    </div>
                    <div className="reload" onClick={replay}>Replay</div>
                    </>
                )
                setResults(true);
                freeze();
            }else if(o_arr.length + x_arr.length === 9){
                setWinner(
                    <>
                    <div className="result">
                        
                        <h1>TIED!!</h1>
                    </div>
                    <div className="reload" onClick={replay}>Replay</div>
                    </>
                )
                setResults(true);
            }
        }
    },[o_arr, x_arr, gameover])
    const freeze = () => {
        for (let i = 1; i <= 9; ++i) {
            document.querySelector("#cell-container" + i.toString()).classList.add("disable");
        }
    }
    const declareResult = (curr, idx) => {

        setCurr(curr);

        if (!curr) {
            setOArray([...o_arr, idx.toString()]);
        } else setXArray([...x_arr, idx.toString()]);

    }


    return (
        <>
            <div className="container">
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="1" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="2" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="3" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="4" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="5" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="6" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="7" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="8" />
                <Cell obj={curr} setCurr={(curr, idx) => declareResult(curr, idx)} ckey="9" />
            </div>
            {winner}
        </>
    )
}
export default Board;