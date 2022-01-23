import "../styles/App.css";
import React from 'react';
//export default Client => <div>This is home component</div>;

import { useState } from "react";
import Axios from "axios";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
function Client() {
  // declaration des variables
  // Pour la table Client
  const [idClient, setidClient] = useState(0);
  const [idChantier, setidChantier] = useState("");
  const [NomClient, setNomClient] = useState("");
  const [PreClient, setPreClient] = useState("");
  const [DateNaiClient, setDateNaiClient] = useState("");
  const [Email, setEmail] = useState("");
  const [AdrClient, setAdrClient] = useState("");
  const [TelClient, setTelClient] = useState("");
  const [newEmail, setnewEmail] = useState("");
  const [newTelClient, setnewTelClient] = useState("");

  const [ClientList, setClientList] = useState([]);
  // l'operation d'ajoute d'un ouvrier
  const addClient = () => {
    Axios.post("http://localhost:8000/AjouterClient", {
      idClient: idClient,
      idChantier: idChantier,
      NomClient: NomClient,
      PreClient: PreClient,
      DateNaiClient: DateNaiClient,
      Email: Email,
      AdrClient: AdrClient,
      TelClient: TelClient,

    }).then(() => {
      setClientList([
        ...ClientList,
        {
          idClient: idClient,
          idChantier: idChantier,
          NomClient: NomClient,
          PreClient: PreClient,
          DateNaiClient: DateNaiClient,
          Email: Email,
          AdrClient: AdrClient,
          TelClient: TelClient,

        },
      ]);
    });
    console.log('Success')
  };

  const getClient = () => {
    Axios.get("http://localhost:8000/clients").then((response) => {
      setClientList(response.data);
    });
  };
  //Operation de mise a jours du numero de telephone d'un ouvrier
  const updateTelephone = (idClient) => {
    Axios.put("http://localhost:8000/updateClient", { Telephone: newTelClient, idClient: idClient }).then(
      (response) => {
        setClientList(
          ClientList.map((val) => {
            return val.idClient !== idClient
              ? {
                idClient: val.idClient,
                idChantier: val.idChantier,
                NomClient: val.NomClient,
                PreClient: val.PreClient,
                DateNaiClient: val.DateNaiClient,
                Email: val.Email,
                AdrClient: val.AdrClient,
                TelClient: val.TelClient,
              }
              : val;
          })
        );
      }
    );
    console.log("mise a jour effectuee avec success")
  };
  // suppression d'un ouvriers de la base de donnees
  const deleteClient = (idClient) => {
    Axios.delete(`http://localhost:8000/deleteClient/${idClient}`).then((response) => {
      setClientList(
        ClientList.filter((val) => {
          return val.idClient !== idClient;
        })
      );
    });
    console.log("suppression effectuee avec success")
  };
  // le code html pour les ouvriers
  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Box className="information" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="idClient"
            name="email"
            autoComplete="email"
            variant="outlined"
            autoFocus
            type="number"
            onChange={(event) => {
              setidClient(event.target.value);
            }}
          />
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="idChantier"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="number"
              onChange={(event) => {
                setidChantier(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="prénom"
              label="NomClient"
              name="prénom"
              autoComplete="prénom"
              variant="outlined"
              autoFocus
              type="text"
              onChange={(event) => {
                setNomClient(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}><TextField
            margin="normal"
            required
            fullWidth
            id="Date"
            name="PreClient"
            autoComplete="date"
            variant="outlined"
            autoFocus
            type="text"
            onChange={(event) => {
              setPreClient(event.target.value);
            }}
          />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="DateNaiClient"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="date"
              onChange={(event) => {
                setDateNaiClient(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="EmailClient"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="text"
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
              id="email"
              label="AdresseClient"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="text"
              onChange={(event) => {
                setAdrClient(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="TelClient"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="number"
              onChange={(event) => {
                setTelClient(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit"
          variant="contained"
          variant="outlined"
          onClick={addClient}> Add Client</Button>
      </Box>

      <div className="clients">
        <Button
          type="submit"
          //fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}

          onClick={getClient}>Show Clients</Button>

        {ClientList.map((val, key) => {
          return (
            <div className="clients">
              <div>
                <h3>idClient {val.idClient}</h3>
                <h3>idChantier {val.idChantier}</h3>
                <h3>NomClient {val.NomClient}</h3>
                <h3>PreClient {val.PreClient}</h3>
                <h3>Datenaissance{val.DateNaiClient}</h3>
                <h3>EmailClient {val.Email}</h3>
                <h3>AdrClient {val.AdrClient}</h3>
                <h3>TelClient{val.TelClient}</h3>

              </div>
              <div>
                <TextField
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewTelClient(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateTelephone(val.idClient);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteClient(val.idClient);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
}

export default Client;