import { Card, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import '../assets/css/style.css'

function Features() {
    return (
        <div id="features">
            <h1 id="heading">Features</h1>
            <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item  xs={12} sm={4}>
                    <Card id="card">
                        <img id="cardimg" alt="f1" src={require("../assets/img/shield.gif")} />
                        <div>
                            <h3 id="cheading">Secure transaction</h3>
                            <h5 id="ccontent">Make a secure transaction with our latest technology</h5>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Card id="card">
                        <img id="cardimg" alt="f1" src={require("../assets/img/exchange.gif")} />
                        <div>
                            <h3 id="cheading">Fast transaction</h3>
                            <h5 id="ccontent">Make a fast transaction with our latest technology</h5>
                        </div>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                <Card id="card">
                        <img id="cardimg" alt="f1" src={require("../assets/img/chatbot.gif")} />
                        <div>
                            <h3 id="cheading">Chatbot</h3>
                            <h5 id="ccontent">24 hours chatbot assist</h5>
                        </div>
                    </Card>
                </Grid>
            </Grid>
        </Box>
        </div>
    )
}

export default Features
