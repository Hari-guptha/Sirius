import { AppBar, Button, Drawer, Toolbar } from '@mui/material'
import { Stack } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import "../assets/css/style.css"
import { Link } from 'react-router-dom';
function Navbar() {
    const [menu , setmenu]= useState(false)
    return (
        <>
            <AppBar position="sticky">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", background: "white" }}>
                    <img alt='logo' id='logo' src={require("../assets/img/logo.png")} />
                    <Stack direction="row" spacing={3} sx={{ display: { xs: "none", sm: "block" } }}>
                        <Link to="/" id="navitem">Home</Link>
                        <a href="#features" id="navitem">Feature</a>
                        <a href="#heading2" id="navitem">Service</a>
                        <Link to="/" id="navitem">Contact Us</Link>
                        <Button id="navbtn3" >
                            <Link to="login" style={{textDecoration: 'none',color:"white"}}>LOGIN</Link>
                        </Button>
                    </Stack>
                    <MenuIcon sx={{ color: "black", display: { xs: "block", sm: "none" } }} onClick={e=>setmenu(true)}  />
                </Toolbar>
            </AppBar>
            {/* --------------------------------------------mobile------------------------------------------- */}
            <Drawer open={menu}
                onClose={e=>setmenu(false)}>
                    <CloseIcon sx={{ml:"80%",mu:"10px",width:"50px"}} onClick={e=>setmenu(false)} />
            <img alt='logo' id='logo2' src={require("../assets/img/logo.png")} />
                    <Stack direction="column" spacing={3}>
                        <Link to="/" id="navitem2" onClick={e=>setmenu(false)}>Home</Link>
                        <a href="#features" id="navitem2" onClick={e=>setmenu(false)}>Feature</a>
                        <a href="#heading2" id="navitem2" onClick={e=>setmenu(false)}>Service</a>
                        <Link to="/" id="navitem2" onClick={e=>setmenu(false)}>Contact Us</Link>
                        <Button id="navbtn3" onClick={e=>setmenu(false)} >
                            <Link to="login" style={{textDecoration: 'none',color:"white"}}>LOGIN</Link>
                        </Button>
                    </Stack>
            </Drawer>
        </>
    )
}

export default Navbar