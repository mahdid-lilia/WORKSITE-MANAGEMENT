import "../styles/App.css";
import { useState } from "react";
import Axios from "axios";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

function Appl() {
  const [idOuvrier, setidOuvrier] = useState("");
  
  const [NomOuvrier, setNomOuvrier] = useState("");
  const [PrenomOuvrier, setPrenomOuvrier] = useState("");
  const [DateNaiOuvrier, setDateNaiOuvrier] = useState("");

  const [Email, setEmail] = useState("");
  const [AdrOuvrier, setAdrOuvrier] = useState("");

  const [TelephoneOuv, setTelephoneOuv] = useState("");
  const [motdePasse, setmotdePasse] = useState("");

 
  const [OuvrierList, setOuvrierList] = useState([]);

  const addOuvrier = () => {
    Axios.post("http://localhost:8000/create", {
      NomOuvrier: NomOuvrier,
      PrenomOuvrier: PrenomOuvrier,
      DateNaiOuvrier: DateNaiOuvrier,
      Email: Email,
      AdrOuvrier: AdrOuvrier,
      TelephoneOuv: TelephoneOuv,
      motdePasse: motdePasse,


    }).then(() => {
      setOuvrierList([
        ...OuvrierList,
        {
          NomOuvrier: NomOuvrier,
      PrenomOuvrier: PrenomOuvrier,
      DateNaiOuvrier: DateNaiOuvrier,
      Email: Email,
      AdrOuvrier: AdrOuvrier,
      TelephoneOuv: TelephoneOuv,
      motdePasse: motdePasse,


        },
      ]);
    });
    console.log('Success')
  };

  const getOuvrier = () => {
    Axios.get("http://localhost:8000/ouvriers").then((response) => {
      setOuvrierList(response.data);
    });
  };



  const deleteOuvrier = (idOuvrier) => {
    Axios.delete(`http://localhost:8000/delete/${idOuvrier}`).then((response) => {
      setOuvrierList(
        OuvrierList.filter((val) => {
          return val.idOuvrier != idOuvrier;
        })
      );
    });
  };



  return (
    <Container  maxWidth="sm" sx={{ marginTop: 10 }}>
    <Box className="information" noValidate sx={{ mt: 3 }}>
      
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Nom"
            label="Nom"
            name="NomOuvrier"
            autoComplete="email"
            variant="outlined"
            autoFocus
            type="text"
            onChange={(event) => {
              setNomOuvrier(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="prénom"
            label="prénom"
            name="PrenomOuvrier"
            autoComplete="prénom"
            variant="outlined"
            autoFocus
            type="text"
            onChange={(event) => {
              setPrenomOuvrier(event.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}><TextField
          margin="normal"
          required
          fullWidth
          id="Date"
          name="DateNaiOuvrier"
          autoComplete="date"
          variant="outlined"
          autoFocus
          type="date"
          min="01-01-2018"
          max="12-31-2018"
          onChange={(event) => {
            setDateNaiOuvrier(event.target.value);
          }}
        />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Adresse e-mail"
            name="Email"
            autoComplete="email"
            variant="outlined"
            autoFocus
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Adresse"
            label="Adresse "
            name="AdrOuvrier"
            autoComplete="Adresse"
            variant="outlined"
            autoFocus
            onChange={(event) => {
              setAdrOuvrier(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Numéro de téléphone "
            label="Numéro de téléphone"
            name="TelephoneOuv"
            autoComplete="Numéro de téléphone"
            variant="outlined"
            autoFocus
            onChange={(event) => {
              setTelephoneOuv(event.target.value);
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Numéro de téléphone "
            label="Mot de Passe"
            name="TmotdePasse"
            autoComplete="Numéro de téléphone"
            variant="outlined"
            autoFocus
            onChange={(event) => {
              setmotdePasse(event.target.value);
            }}
          />
        </Grid>
        
       

      <Button type="submit"
        variant="contained"
        variant="outlined"
        onClick={addOuvrier}> Ajouter un  Ouvrier</Button>
        
    </Box>
    </Container>

    
              
             
  );
}

export default Appl;