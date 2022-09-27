import React,{useState} from "react";
import {Button} from "@mui/material";

export const Bulb=()=>{
    const[data,setData]=useState(false);
    return(
        <div className="sub">
            <h1>My Bulb here...</h1>
            <h3>{data ?"on":"off"}</h3>
            <div className={data?"bulbon":"bulboff"}> 
            <Button variant="contained" onClick={()=>setData(!data)} className="bulbbutton" color={data?"success":"error"}>{data?"on":"off"}</Button>


            </div>
            

        </div>
    )
}