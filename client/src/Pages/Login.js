import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
//---------Variables globales--------------//
var cpt = 0;
//----------------------------------------//
const theme = createTheme();

export default function Login() {

  const [Email, setEmail] = useState("");

  const [motdePasse, setmotdePasse] = useState("");

  const [emailError, setEmailError] = useState(false);
  const [motdePasseError, setmotdePasseError] = useState(false);
  const [loginParams, setLoginParams] = useState(undefined);
  const [flag, setFlag] = useState(false);
  const navigate = useNavigate();
  const tmp = 100;
  const tentatives = 3; 

  // React.useEffect(() => {
  //   fetch("http://localhost:8000/")
  //     .then(res => { return res.json() })
  //     .then(res => {
  //       setLoginParams(res);
  //       if (res.indicator) setFlag(true);
  //       else setFlag(false);
  //       if(flag){
  //         navigate("/ouv");
  //       }
  //       else{
  //         setEmailError(true);
  //         setmotdePasseError(true);
  //       }
  //     });
  // });

  //--------------------------Login------------------------------//
  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:8000/Login", {
      Email: Email,
      motdePasse: motdePasse
    });

    setTimeout(() => {
      fetch("http://localhost:8000/")
      .then(res => { return res.json() })
      .then(res => {
        setLoginParams(res);
        if (res.indicator) setFlag(true);
        else setFlag(false);
        if (res.indicator) {
          navigate("/Home");
          window.location.reload();
        }
        else {
          setEmailError(true);
          setmotdePasseError(true);
          cpt += 1;
          console.log(cpt);
          if(cpt === tentatives) {
            cpt = 0;
            document.getElementsByName("email")[0].value = "";
            document.getElementsByName("password")[0].value = "";
            setEmailError(false);
            setmotdePasseError(false);
            alert("Votre mot de passe ou addresse email sont incorrectes !!");
          }
        }
      });
    }, (tmp));

  };
  //-----------------------------------------------------------//

  return (

    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Connexion
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse email"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              error={emailError}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              error={motdePasseError}
              onChange={(e) => setmotdePasse(e.target.value)}

            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Se souvenir de moi"
            />
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Connexion
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Mot de passe Oublié?
                </Link>
              </Grid>
              
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
