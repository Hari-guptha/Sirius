import {
    Container,
    Button,
    Grid,
    Paper,
    TextField,
    IconButton,
    InputAdornment,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import React, { useState } from "react";
import '../assets/css/style.css'
import { Link } from "react-router-dom";

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        pass: "",
        showPass: false,
    });

    const handlePassVisibilty = () => {
        setValues({
            values,
            showPass: !values.showPass,
        });
    };

    return (
        <div>
            <Container maxWidth="sm">
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    justifyContent="center"
                    style={{ minHeight: "100vh" }}
                >
                    <Paper elelvation={24} id="logcard">
                        <form>
                        <img alt='logo'  id='logicon' src={require("../assets/img/password.gif")} />
                            <Grid container direction="column" spacing={2}>
                                <Grid item>
                                    <TextField
                                        type="email"
                                        fullWidth
                                        label="Enter your email"
                                        placeholder="Email Address"
                                        variant="outlined"
                                        required
                                    />
                                </Grid>

                                <Grid item>
                                    <TextField
                                        type={values.showPass ? "text" : "password"}
                                        fullWidth
                                        label="Password"
                                        placeholder="Password"
                                        variant="outlined"
                                        required
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <IconButton
                                                        onClick={handlePassVisibilty}
                                                    >
                                                        {values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                    </IconButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />
                                </Grid>

                                <Grid item>
                                    <Button type="submit" fullWidth id="navbtn3" variant="contained">
                                        <Link to="/dashboard" sx={{color:"white"}}> LOGIN</Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </Grid>
            </Container>
        </div>
    );
};

export default Login;