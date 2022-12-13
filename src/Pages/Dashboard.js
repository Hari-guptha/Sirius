import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Dashmain from '../components/dashmain'
import Dashmain2 from '../components/dashmain2'
import "../assets/css/dash.css"
import { Box } from '@mui/system'
import { Grid, Paper, Stack, styled } from '@mui/material'
import Footer from '../components/Footer'
import { Route, Routes } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Dashboard() {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={1}>
                <Grid item sm={2} sx={{display:{xs:"none",sm:"block"}}}>
                    <Item>
                        <Sidebar />
                    </Item>
                </Grid>
                <Grid item xs={12} sm={10}>
                    <Item sx={{height:"100vh"}}>
                        <Stack direction="column" >
                        <Topbar/>
                        <Routes>
                            <Route>
                                <Route index element={<Dashmain />} />
                                <Route  path="/dashboard/dashboardmain1" element={<Dashmain />} />
                                <Route path="/dashboard/dashboardmain2" element={<Dashmain2 />} />
                            </Route>
                        </Routes>
                        </Stack>
                        <Footer />
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Dashboard
