import { Box, styled } from '@mui/material'
import { Stack } from '@mui/system'
import "../assets/css/dash.css"
import { Link } from 'react-router-dom';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Person2Icon from '@mui/icons-material/Person2';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';


function Navbar() {
    const Item = styled(Box)(({ theme }) => ({
        backgroundColor: "#03dfc1",
        padding:"25px 40px",
        textAlign: 'left',
        fontSize:"20px",
        fontWeight:"600",
    }));
    return (
        <>
            <Box position="sticky" id="box1" sx={{ display: { xs: "none", sm: "block" } }}>
                    <img alt='logo' id='logo2' src={require("../assets/img/logo.png")} />
                    <Stack direction="column" spacing={1}>
                    <Item><AccountBalanceIcon sx={{mr:"5px"}}/><Link to="/" id="sidebarc">Home</Link></Item>
                    <Item><Person2Icon sx={{mr:"5px"}} /><Link to="dashboard/dashboardmain1" id="sidebarc">Account</Link></Item>
                    <Item><CurrencyExchangeIcon sx={{mr:"5px"}} /><Link to="dashboard/dashboardmain2" id="sidebarc">Transaction</Link></Item>
                    </Stack>
            </Box>
        </>
    )
}

export default Navbar