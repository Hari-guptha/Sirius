import { Box } from '@mui/material'
import React from 'react'
import '../assets/css/style.css'

function Footer() {
    return (
        <div>
            <Box id="footer" >
                Developer by Sirius Team
                <img id="footerimg" alt="" src={require("../assets/img/footer.gif")} />
            </Box>
        </div>
    )
}

export default Footer
