import { AppBar, Avatar, Drawer } from '@mui/material'
import { Box, Stack } from '@mui/system'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react'
import "../assets/css/dash.css"
import { Link } from 'react-router-dom';
function Navbar() {
    const [menu, setmenu] = useState(false)
    return (
        <>
            <AppBar position="sticky">
                <Box id="tpc" sx={{ display: "flex", justifyContent: "space-between", background: "#03dfc1" }}>
                    <MenuIcon sx={{ p: "20px", color: "white", display: { xs: "block", sm: "none" } }} onClick={e => setmenu(true)} />
                    <Avatar  id="ava" alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </Box>
            </AppBar>
            {/* --------------------------------------------mobile------------------------------------------- */}
            <Drawer open={menu}
                onClose={e => setmenu(false)}>
                <CloseIcon sx={{ ml: "80%", mu: "10px", width: "50px" }} onClick={e => setmenu(false)} />
                <img alt='logo' id='logo2' src={require("../assets/img/logo.png")} />
                <Stack direction="column" spacing={3}>
                    <Link to="/" id="navitem2" onClick={e => setmenu(false)}>Home</Link>
                    <Link to="dashboard/dashboardmain1" id="navitem2" onClick={e => setmenu(false)}>Account</Link>
                    <Link to="dashboard/dashboardmain2" id="navitem2" onClick={e => setmenu(false)}>Transaction</Link>
                </Stack>
            </Drawer>
        </>
    )
}

export default Navbar
