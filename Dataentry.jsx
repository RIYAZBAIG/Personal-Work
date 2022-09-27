import React from "react";
import { Button, TextField, Submit, Cancel } from "@mui/material";
  export const Dataentry=()=>{
    return(

        <div className="sub">
            <h1>Dataentry Form</h1>
        <TextField label="First Name"varient="outlined"/>
        <TextField label="Middle  Name"varient="outlined"/>
        <TextField label="Last Name"varient="outlined"/>   <br />
        

        <TextField label="Mobile Number"varient="outlined"/>   
        <TextField label="Email Id"varient="outlined"/> 
        <TextField label="Plot No 59,"varient="outlined"/> <br /> 
        <TextField label="Area Name,"varient="outlined"/>   
        <TextField label="Location,"varient="outlined"/>   <br />
        <TextField label="City Name,"varient="outlined"/>   
        <TextField label="Pin Code,"varient="outlined"/> <br />
        <br />
        <Button variant="contained"color="success">Submit</Button> 
        <Button variant="contained" color="error">Cancel</Button>  






        


        </div>

    )

    
}