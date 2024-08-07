import { Container, Grid, Button, TextField, Box } from "@mui/material";
import { useForm, SubmitHandler } from 'react-hook-form';
import './App.css';
import { useState } from "react";
import { red } from "@mui/material/colors";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple, faGoogle, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { error } from "console";



type FormValue = {
    username: string,
    password: string
}

const LoginForm = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormValue>()
    // const [data, setData] = useState({ email: '', password: '' })
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValue> = async(data) => {
        console.log("final-data", data);
        alert(data.username);
        localStorage.setItem('username', data.username);
        navigate('/home');
        
        try {
             
            const requestBody = JSON.stringify(data); 
        
            const response = await fetch('testurl.com/login', {
              method: 'POST',
              body: requestBody,
              headers: { 'Content-Type': 'application/json' },
            });
            
            const jsonData = await response.json();
            console.log('API response:', jsonData);
          
          }

          
          catch (error) {
              console.error('Error:', error);
          }
        
    };

    return (
        <div className="bg-color">
            <Container className="form-wrapper">
                <div className="material">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={12} lg={16}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Box component="span" sx={{ p: 2, textAlign: 'center' }}>
                                    <h1>Welcome Back!</h1>
                                    <p>Please enter your details to log in.</p>
                                </Box>

                                <Box>
                                    <div className="icons" style={{ display: 'flex' }}>
                                        <div className="icon" >
                                            <FontAwesomeIcon icon={faGoogle} style={{ color: "#ca5d49", fontSize: '2rem' }} />
                                        </div>
                                        <div className="icon" >
                                            <FontAwesomeIcon icon={faFacebook} style={{ color: "#321098", fontSize: '2rem' }} />
                                        </div>
                                        <div className="icon" >
                                            <FontAwesomeIcon icon={faTwitter} style={{ color: "#74C0FC", fontSize: '2rem' }} />
                                        </div>
                                        <div className="icon" >
                                            <FontAwesomeIcon icon={faApple} style={{ fontSize: '2rem' }} />
                                        </div>
                                    </div>
                                    <p style={{ color: 'grey', display: 'flex', justifyContent: 'center' }}>Or Sign up using this.</p>
                                </Box>

                                

                                <Box>
                                    <p style={{ fontSize: 'small', fontWeight: 'bold' }}>Username <span style={{ color: 'red' }}>*</span></p>
                                    <TextField fullWidth
                                        label="Username"
                                        placeholder="Enter Username"
                                        {
                                        ...register("username", {
                                            required: "Username is required",
                                            minLength: {
                                                value: 3,
                                                message: "Username should be at least 3 characters"
                                            }
                                        })
                                        }
                                    />
                                    {
                                        errors.username && (
                                            <p className="error">{errors.username.message}</p>
                                        )
                                    }

                                    <p style={{ fontSize: 'small', fontWeight: 'bold' }}>Password <span style={{ color: 'red' }}>*</span></p>
                                    <TextField fullWidth

                                        label="Password"
                                        type="password"
                                        placeholder="Enter Password"
                                        {
                                        ...register("password", {
                                            required: "Password is required",

                                            minLength: {
                                                value: 10,
                                                message: "Password should be atleast 10 characters"
                                            }
                                        })
                                        }
                                    />

                                    {
                                        errors.password && (
                                            <p className="error">{errors.password.message}</p>
                                        )
                                    }

                                    <div className="button-container">
                                        <Button className="login-btn" style={{ marginTop: '2rem', borderRadius: '18px', background: 'linear-gradient(to right, #6dd5ed, #cc2b5e)' }} type="submit" variant="contained" >
                                            Login
                                        </Button>
                                    </div>
                                </Box>


                            </form>
                        </Grid>

                    </Grid>
                </div>

            </Container>
        </div>
    )
}

export default LoginForm;