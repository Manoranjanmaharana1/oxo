import React, { useState } from 'react';
import Cell from './Cell';

const Board = () => {
    const [curr, setCurr] = useState(true);
    const [o_arr, setOArray] = useState([]);
    const [x_arr, setXArray] = useState([]);
    return (
        <div className="container">
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="1" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="2" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="3" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="4" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="5" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="6" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="7" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="8" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            <Cell obj={curr} setCurr={(curr) => setCurr(curr)} ckey="9" setOArray={(idx) => {if(idx !== -1) setOArray([...o_arr, idx])}} setXArray={(idx) => {if(idx !== -1) setXArray([...x_arr, idx])}}/>
            
        </div>
    )
}
export default Board;