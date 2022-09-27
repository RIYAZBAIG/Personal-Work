import React, {useState} from "react";
import { Grid,TextField, Card, CardContent, Avatar} from "@mui/material";


export const Coeditor=()=>{
    const [ fname, setfname]=useState("");
    const [ mname, setmname]=useState("");
    const [ lname, setlname]=useState("");
    const [ addline, setaddline]=useState("");
    const [ city, setcity]=useState("");
    const [ pin, setpin]=useState("");



    return(
        <div className="sub">

            <Grid container spacing={3}>

                    <Grid item xs={6}>
                                <h1>Entry</h1>

                                <Grid container spacing={2 }>

                                    <Grid item xs={4}>
                                        <TextField label="Firts Name" onChange={e=> setfname(e.target.value)} variant="outlined" />
                                    </Grid>

                                    <Grid item xs={4}>
                                        <TextField label="Middle Name" onChange={e=> setmname(e.target.value)} variant="outlined"/>
                                    </Grid>

                                    <Grid item xs={4}>
                                        <TextField label="Last Name" onChange={e=> setlname(e.target.value)} variant="outlined"/>
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField label="Adress line" onChange={e=> setaddline(e.target.value)} fullWidth/>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField label="City Name" onChange={e=> setcity(e.target.value)}/>
                                    </Grid>

                                    <Grid item xs={6}>
                                        <TextField label="Pin" onChange={e=> setpin(e.target.value)}/>
                                    </Grid>

                                </Grid>
                    </Grid>


                    <Grid item xs={6}>
                                <h1>Card</h1>
                        <Card>
                            <CardContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <Avatar alt="Photo" src="https://i.pinimg.com/564x/b9/79/b5/b979b5704717481ca489437a606361d3.jpg" 
                                            sx={{ width: 156, height: 156  }}
                                            />
                                        </Grid>
                                    </Grid>

                                <Grid item xs={4}></Grid>

                                <Grid xs={2}></Grid>

                                <Grid xs={8}> 
                                <h2>{fname} {mname} {lname}
                                </h2> 
                                 </Grid>

                                <Grid item xs={2} className="txt">
                                       <h4> {addline} </h4>
                                </Grid>
                                <Grid item xs={12} className="txt">
                                    <h3>{city}{pin}</h3>
                                </Grid>

                            </CardContent>
                        </Card>

                    </Grid>

            </Grid>

        </div>

    )
}