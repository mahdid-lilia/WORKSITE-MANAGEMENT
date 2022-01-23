import "../styles/App.css";
import { useState } from "react";
import Axios from "axios";
import { TextField } from "@material-ui/core";
import { Box, Button, Container, Grid, textFieldClasses } from "@mui/material";


function Ouvriers() {
  // declaration des variables
  // Pour la table Ouvriers
  const [idOuvrier, setidOuvrier] = useState(0);
  const [NomOuvrier, setNomOuvrier] = useState("");
  const [PreOuvrier, setPreOuvrier] = useState("");
  const [DateNaiOuvrier, setDateNaiOuvrier] = useState("");
  const [Email, setEmail] = useState("");
  const [AdrOuvrier, setAdrOuvrier] = useState("");
  const [Telephone, setTelephone] = useState("");
  const [idSpec, setidSpec] = useState("");
  const [idChant, setidChant] = useState("");
  const [newTelephone, setnewTelephone] = useState("");

  const [OuvrierList, setOuvrierList] = useState([]);
  // l'operation d'ajoute d'un ouvrier
  const addOuvrier = () => {
    Axios.post("http://localhost:8000/create", {
      idOuvrier: idOuvrier,
      NomOuvrier: NomOuvrier,
      PreOuvrier: PreOuvrier,
      DateNaiOuvrier: DateNaiOuvrier,
      Email: Email,
      Telephone: Telephone,
      AdrOuvrier: AdrOuvrier,
      idChant: idChant,
      idSpec: idSpec,


    }).then(() => {
      setOuvrierList([
        ...OuvrierList,
        {
          idOuvrier: idOuvrier,
          NomOuvrier: NomOuvrier,
          PreOuvrier: PreOuvrier,
          DateNaiOuvrier: DateNaiOuvrier,
          Email: Email,
          Telephone: Telephone,
          AdrOuvrier: AdrOuvrier,
          idChant: idChant,
          idSpec: idSpec,
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
  //Operation de mise a jours du numero de telephone d'un ouvrier
  const updateTelephone = (idOuvrier) => {
    Axios.put("http://localhost:8000/update", { Telephone: newTelephone, idOuvrier: idOuvrier }).then(
      (response) => {
        setOuvrierList(
          OuvrierList.map((val) => {
            return val.idOuvrier !== idOuvrier
              ? {
                idOuvrier: val.idOuvrier,
                NomOuvrier: val.NomOuvrier,
                PreOuvrier: val.PreOuvrier,
                DateNaiOuvrier: val.DateNaiOuvrier,
                Email: val.Email,
                AdrOuvrier: val.AdrOuvrier,
                Telephone: val.Telephone,
                idSpec: val.idSpec,
                idChant: val.idChant,
              }
              : val;
          })
        );
      }
    );
    console.log("mise a jour effectuee avec success")
  };
  // suppression d'un ouvriers de la base de donnees
  const deleteOuvrier = (idOuvrier) => {
    Axios.delete(`http://localhost:8000/delete/${idOuvrier}`).then((response) => {
      setOuvrierList(
        OuvrierList.filter((val) => {
          return val.idOuvrier !== idOuvrier;
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
            label="ID"
            name="email"
            autoComplete="email"
            variant="outlined"
            autoFocus
            type="number"
            onChange={(event) => {
              setidOuvrier(event.target.value);
            }}
          />
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Nom"
              name="email"
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
              name="prénom"
              autoComplete="prénom"
              variant="outlined"
              autoFocus
              type="text"
              onChange={(event) => {
                setPreOuvrier(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}><TextField
            margin="normal"
            required
            fullWidth
            id="Date"
            name="Datenaissance"
            autoComplete="date"
            variant="outlined"
            autoFocus
            type="Date"
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
              name="email"
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
              name="Adresse"
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
              name="Numéro de téléphone"
              autoComplete="Numéro de téléphone"
              variant="outlined"
              autoFocus
              onChange={(event) => {
                setTelephone(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Spécialité "
              label="Spécialité "
              name="Spécialité "
              autoComplete="Spécialité "
              variant="outlined"
              autoFocus
              onChange={(event) => {
                setidSpec(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="Chantier "
              label="Chantier "
              name="Chantier"
              autoComplete="Chantier "
              variant="outlined"
              autoFocus
              type="number"
              onChange={(event) => {
                setidChant(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit"
          variant="contained"
          variant="outlined"
          onClick={addOuvrier}> Add Ouvrier</Button>
      </Box>

      <div className="ouvriers">
        <Button
          type="submit"
          //fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}

          onClick={getOuvrier}>Show Ouvriers</Button>

        {OuvrierList.map((val, key) => {
          return (
            <div className="Ouvriers">
              <div>
                <h3>idOuvrier {val.idOuvrier}</h3>
                <h3>NomOuvrier {val.NomOuvrier}</h3>
                <h3>PreOuvrier {val.PreOuvrier}</h3>
                <h3>DateNaiOuvrier {val.DateNaiOuvrier}</h3>
                <h3>Email {val.Email}</h3>
                <h3>AdrOuvrier {val.AdrOuvrier}</h3>
                <h3>Telephone {val.Telephone}</h3>
                <h3>idSpec {val.idSpec}</h3>
                <h3>idChant {val.idChant}</h3>

              </div>
              <div>
                <TextField
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewTelephone(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateTelephone(val.idOuvrier);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteOuvrier(val.idOuvrier);
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
/* 
function App() {
  // declaration des variables
  // Pour la table Client
  const [idClient, setidClient] = useState(0);
  const [idChantier, setidChantier] = useState("");
  const [NomClient, setNomClient] = useState("");
  const [PreClient, setPreClient] = useState("");
  const [DateNaiClient, setDateNaiClient] = useState("");
  const [Email, setEmail] = useState("");
  const [AdrClient, setAdrClient] = useState("");
  const [	TelClient, set	TelClient] = useState("");

  const [newEmail, setnewEmail] = useState("");
  const [newTelephone, setnewTelephone] = useState("");

  const [OuvrierList, setOuvrierList] = useState([]);
// l'operation d'ajoute d'un ouvrier
  const addOuvrier = () => {
    Axios.post("http://localhost:3001/create", {
      idOuvrier: idOuvrier,
      NomOuvrier: NomOuvrier,
      PreOuvrier: PreOuvrier,
      DateNaiOuvrier:DateNaiOuvrier,
      Email:Email, 
      AdrOuvrier:AdrOuvrier, 
      Telephone: Telephone , 
      idSpec: idSpec, 
      idChant : idChant,
     
    }).then(() => {
      setOuvrierList([
        ...OuvrierList,
        {
          idOuvrier: idOuvrier,
          NomOuvrier: NomOuvrier,
          PreOuvrier: PreOuvrier,
          DateNaiOuvrier:DateNaiOuvrier,
          Email:Email, 
          AdrOuvrier:AdrOuvrier, 
          Telephone: Telephone , 
          idSpec: idSpec, 
          idChant : idChant,
        },
      ]);
    });
    console.log('Success')
  };

  const getOuvrier = () => {
    Axios.get("http://localhost:3001/ouvriers").then((response) => {
      setOuvrierList(response.data);
    });
  };
//Operation de mise a jours du numero de telephone d'un ouvrier
  const updateTelephone = (idOuvrier) => {
    Axios.put("http://localhost:3001/update", { Telephone: newTelephone, idOuvrier: idOuvrier }).then(
      (response) => {
        setOuvrierList(
          OuvrierList.map((val) => {
            return val.idOuvrier !== idOuvrier
              ? {
                idOuvrier: val.idOuvrier,
                NomOuvrier: val.NomOuvrier,
                PreOuvrier: val.PreOuvrier,
                DateNaiOuvrier:val.DateNaiOuvrier,
                Email:val.Email, 
                AdrOuvrier:val.AdrOuvrier, 
                Telephone: val.Telephone , 
                idSpec: val.idSpec, 
                idChant : val.idChant,
                }
              : val;
          })
        );
      }
    );
    console.log("mise a jour effectuee avec success")
  };
// suppression d'un ouvriers de la base de donnees
  const deleteOuvrier = (idOuvrier) => {
    Axios.delete(`http://localhost:3001/delete/${idOuvrier}`).then((response) => {
      setOuvrierList(
        OuvrierList.filter((val) => {
          return val.idOuvrier !== idOuvrier;
        })
      );
    });
    console.log("suppression effectuee avec success")
  };
// le code html pour les ouvriers
  return (
    <div className="App">
      <div className="information">
        <label>idOuvrier</label>
        <TextField
          type="number"
          onChange={(event) => {
            setidOuvrier(event.target.value);
          }}
        />
        <label>NomOuvrier</label>
        <TextField
          type="text"
          onChange={(event) => {
            setNomOuvrier(event.target.value);
          }}
        />
        <label>PrenomOuvrier</label>
        <TextField
          type="text"
          onChange={(event) => {
            setPreOuvrier(event.target.value);
          }}
        />
        <label>PrenomOuvrier</label>
        <TextField
          type="Date"
          onChange={(event) => {
            setDateNaiOuvrier(event.target.value);
          }}
        />
        <label>EmailOuvrier</label>
        <TextField
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
         <label>AdrOuvrier</label>
        <TextField
          type="text"
          onChange={(event) => {
            setAdrOuvrier(event.target.value);
          }}
        />
        <label>Telephone</label>
        <TextField
          type="number"
          onChange={(event) => {
            setTelephone(event.target.value);
          }}
        />
        <label>Specialite</label>
        <TextField
          type="number"
          onChange={(event) => {
            setidSpec(event.target.value);
          }}
        />
        <label>Chantier</label>
        <TextField
          type="number"
          onChange={(event) => {
            setidChant(event.target.value);
          }}
        />
        <button onClick={addOuvrier}>Add Ouvrier</button>
      </div>
      <div className="ouvriers">
        <button onClick={getOuvrier}>Show Ouvriers</button>

        {OuvrierList.map((val, key) => {
          return (
            <div className="Ouvriers">
              <div>
                <h3>idOuvrier {val.idOuvrier}</h3>
                <h3>NomOuvrier {val.NomOuvrier}</h3>
                <h3>PreOuvrier {val.PreOuvrier}</h3>
                <h3>DateNaiOuvrier {val.DateNaiOuvrier}</h3>
                <h3>Email {val.Email}</h3>
                <h3>AdrOuvrier {val.AdrOuvrier}</h3>
                <h3>Telephone {val.Telephone}</h3>
                <h3>idSpec {val.idSpec}</h3>
                <h3>idChant {val.idChant}</h3>

              </div>
              <div>
                <TextField
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewTelephone(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                      updateTelephone(val.idOuvrier);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteOuvrier(val.idOuvrier);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

*/

export default Ouvriers;