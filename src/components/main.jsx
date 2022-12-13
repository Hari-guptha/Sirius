import { Box, Button, Grid } from '@mui/material'
import React from 'react'


function Main() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/main.gif")} alt=" " id="mainimg" />
                </Grid>
                <Grid item xs={12} sm={6}>
                <Box id="main">
                <h1>Welcome to Sirius</h1>
                <br></br>
                <h4>Taking Banking Technology to Common Man, Your Tech-friendly bank</h4>
                <br></br>
                <Button href="#features" id="mainbtn">Let's Go</Button>
                </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Main