import React from "react";
import { TextField } from "@mui/material";
import{textfield,Button, Rating, Select, MenuItem} from "@mui/material"


export const Entry=()=>{
    return(
        <div className="sub">
            <h1>Data Entry Her</h1>
            <TextField label="enter name" variant="outlined" />
            <Select>
                <MenuItem>Man</MenuItem>
                <MenuItem>female</MenuItem>
                <MenuItem>Other</MenuItem>

            </Select><br /><br />
            <Button variant="contained" color="success">Submit</Button><br /><br />
            < Rating value="5"/>
            
        </div>
    )
}