import { Box, Grid } from '@mui/material'
import React from 'react'

function Allmodules() {
    return (
        <div>
            <h1 id="heading2">Services</h1>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                <Box id="main3">
                <h1>Authentication</h1>
                <h4>Best authentication system to make your account more secure</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/login.gif")} alt=" " id="mainimg3" />
                </Grid>
{/* --------------------------------card------------------------------------------------------- */}
                <Grid item xs={12} sm={6} sx={{display:{sm:"none",xs:"block"}}}>
                <Box id="main3">
                <h1>Money Transfer</h1>
                <h4>Transfer your money to anyone you know</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/trans.gif")} alt=" " id="mainimg31" />
                </Grid>
                <Grid item xs={12} sm={6} sx={{display:{sm:"block",xs:"none"}}}>
                <Box id="main3">
                <h1>Money Transfer</h1>
                <h4>Transfer your money to anyone you know</h4>
                </Box>
                </Grid>
{/* --------------------------------card------------------------------------------------------- */}
                <Grid item xs={12} sm={6}>
                <Box id="main3">
                <h1>Withdraw money </h1>
                <h4>Withdraw your money with our new chatbot banking technology</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/withdraw.gif")} alt=" " id="mainimg3" />
                </Grid>
{/* --------------------------------card------------------------------------------------------- */}
                <Grid item xs={12} sm={6} sx={{display:{sm:"none",xs:"block"}}}>
                <Box id="main3">
                <h1>Statement</h1>
                <h4>View your bank statement with our banking technology</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/statement.gif")} alt=" " id="mainimg31" />
                </Grid>
                <Grid item xs={12} sm={6} sx={{display:{sm:"block",xs:"none"}}}>
                <Box id="main3">
                <h1>Statement</h1>
                <h4>View your bank statement with our banking technology</h4>
                </Box>
                </Grid>
{/* --------------------------------card------------------------------------------------------- */}
                <Grid item xs={12} sm={6}>
                <Box id="main3">
                <h1> Change pin  / Security</h1>
                <h4>Best authentication system to make your account more secure and user friendly</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/security.gif")} alt=" " id="mainimg3" />
                </Grid>
{/* --------------------------------card------------------------------------------------------- */}
                <Grid item xs={12} sm={6} sx={{display:{sm:"none",xs:"block"}}}>
                <Box id="main3">
                <h1>Credit Card Bill Payment</h1>
                <h4>Make bill payment using our bank credit card</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/ccpb.gif")} alt=" " id="mainimg31" />
                </Grid>
                <Grid item xs={12} sm={6} sx={{display:{sm:"block",xs:"none"}}}>
                <Box id="main3">
                <h1>Credit Card Bill Payment</h1>
                <h4>Make bill payment using our bank credit card</h4>
                </Box>
                </Grid>
{/* --------------------------------card------------------------------------------------------- */}
                <Grid item xs={12} sm={6}>
                <Box id="main3">
                <h1>Vicinity </h1>
                <h4>Find the nearest bank with our chatbot</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/main1.gif")} alt=" " id="mainimg3" />
                </Grid>
                {/* --------------------------------card------------------------------------------------------- */}
                <Grid item xs={12} sm={6} sx={{display:{sm:"none",xs:"block"}}}>
                <Box id="main3">
                <h1>Stock market</h1>
                <h4>Bye and sell your Stocks</h4>
                </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                <img src={require("../assets/img/stock.gif")} alt=" " id="mainimg31" />
                </Grid>
                <Grid item xs={12} sm={6} sx={{display:{sm:"block",xs:"none"}}}>
                <Box id="main3">
                <h1>Stock market</h1>
                <h4>Bye and sell your Stocks</h4>
                </Box>
                </Grid>
            </Grid>
        </Box>

        </div>
    )
}

export default Allmodules
