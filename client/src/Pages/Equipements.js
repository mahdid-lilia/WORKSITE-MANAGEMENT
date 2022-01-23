import "../styles/App.css";
import { useState } from "react";
import Axios from "axios";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

function Equipements() {
  //idEquipement ,idChant, dateInstall ,Libellé , Prix 
  // declaration des variables
  // Pour la table Ouvriers
  const [idEquipement, setidEquipement] = useState(0);
  const [idChant, setidChant] = useState("");
  const [dateInstall, setdateInstall] = useState("");
  const [Libelle, setLibelle] = useState("");
  const [Prix, setPrix] = useState("");
  const [newLibelle, setnewLibelle] = useState("");
  const [EquipementList, setEquipementList] = useState([]);
  // l'operation d'ajoute d'un ouvrier
  const addEquipement = () => {
    Axios.post("http://localhost:8000/createEquipement", {
      idEquipement: idEquipement,
      idChant: idChant,
      dateInstall: dateInstall,
      Libelle: Libelle,
      Prix: Prix,

    }).then(() => {
      setEquipementList([
        ...EquipementList,
        {
          idEquipement: idEquipement,
          idChant: idChant,
          dateInstall: dateInstall,
          Libelle: Libelle,
          Prix: Prix,
        },
      ]);
    });
    console.log('Success')
  };

  const getEquipement = () => {
    Axios.get("http://localhost:8000/equipements").then((response) => {
      setEquipementList(response.data);
    });
  };
  //Operation de mise a jours du numero de telephone d'un ouvrier
  const updateLibelle = (idEquipement) => {
    Axios.put("http://localhost:8000/updateEquipement", { Libelle: newLibelle, idEquipement: idEquipement }).then(
      (response) => {
        setEquipementList(
          EquipementList.map((val) => {
            return val.idEquipement !== idEquipement
              ? {
                idEquipement: idEquipement,
                idChant: idChant,
                dateInstall: dateInstall,
                Libelle: Libelle,
                Prix: Prix,
              }
              : val;
          })
        );
      }
    );
    console.log("mise a jour effectuee avec success")
  };
  // suppression d'un ouvriers de la base de donnees
  const deleteEquipement = (idEquipement) => {
    Axios.delete(`http://localhost:8000/deleteEquipement/${idEquipement}`).then((response) => {
      setEquipementList(
        EquipementList.filter((val) => {
          return val.idEquipement !== idEquipement;
        })
      );
    });
    console.log("suppression effectuee avec success")
  };
  // le code html pour les equipements 
  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Box className="information" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="IDEquipement"
            name="email"
            autoComplete="email"
            variant="outlined"
            autoFocus
            type="number"
            onChange={(event) => {
              setidEquipement(event.target.value);
            }}
          />
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="IDchant"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="number"
              onChange={(event) => {
                setidChant(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="prénom"
              label="Dateinstallation"
              name="prénom"
              autoComplete="prénom"
              variant="outlined"
              autoFocus
              type="Date"
              onChange={(event) => {
                setdateInstall(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}><TextField
            margin="normal"
            required
            fullWidth
            id="Date"
            name="Libelle"
            autoComplete="date"
            variant="outlined"
            autoFocus
            type="text"
            onChange={(event) => {
              setLibelle(event.target.value);
            }}
          />
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Prix"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              onChange={(event) => {
                setPrix(event.target.value);
              }}
            />
          </Grid>
        </Grid>
        <Button type="submit"
          variant="contained"
          variant="outlined"
          onClick={addEquipement}> Add Equipement</Button>
      </Box>

      <div className="equipements">
        <Button
          type="submit"
          //fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}

          onClick={getEquipement}>Show Equipements</Button>

        {EquipementList.map((val, key) => {
          return (
            <div className="equipements">
              <div>
                <h3>idEquipement {val.idEquipement}</h3>
                <h3>idChant {val.idChant}</h3>
                <h3>dateInstallation {val.dateInstall}</h3>
                <h3>Libelle {val.Libelle}</h3>
                <h3>Prix{val.Prix}</h3>
                

              </div>
              <div>
                <TextField
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewLibelle(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateLibelle(val.idEquipement);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteEquipement(val.idEquipement);
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
        <input
          type="number"
          onChange={(event) => {
            setidOuvrier(event.target.value);
          }}
        />
        <label>NomOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setNomOuvrier(event.target.value);
          }}
        />
        <label>PrenomOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setPreOuvrier(event.target.value);
          }}
        />
        <label>PrenomOuvrier</label>
        <input
          type="Date"
          onChange={(event) => {
            setDateNaiOuvrier(event.target.value);
          }}
        />
        <label>EmailOuvrier</label>
        <input
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
         <label>AdrOuvrier</label>
        <input
          type="text"
          onChange={(event) => {
            setAdrOuvrier(event.target.value);
          }}
        />
        <label>Telephone</label>
        <input
          type="number"
          onChange={(event) => {
            setTelephone(event.target.value);
          }}
        />
        <label>Specialite</label>
        <input
          type="number"
          onChange={(event) => {
            setidSpec(event.target.value);
          }}
        />
        <label>Chantier</label>
        <input
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
                <input
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

export default Equipements;