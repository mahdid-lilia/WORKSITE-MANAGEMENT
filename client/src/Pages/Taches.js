import "../styles/App.css";
import { useState } from "react";
import Axios from "axios";
import { Box, Button, Container, Grid, TextField } from "@mui/material";
function Taches() {
    // declaration des variables
    // Pour la table Client
    const [idTache, setidTache] = useState(0);
    const [idOuvrier, setidOuvrier] = useState("");
    const [idChantier , setidChantier ] = useState("");
    const [DescTache , setDescTache ] = useState("");
    const [dureeTache, setdureeTache] = useState("");
    const [newDureeTache , setnewDureeTache] = useState("");
    const [TacheList, setTacheList] = useState([]);
  // l'operation d'ajoute d'un ouvrier
    const addTache = () => {
      Axios.post("http://localhost:8000/AjouterTache", {
        idTache : idTache ,
         idOuvrier : idOuvrier , 
         idChantier : idChantier , 
         DescTache : DescTache, 
         dureeTache : dureeTache,
       
       
      }).then(() => {
        setTacheList([
          ...TacheList,
          {
            idTache : idTache ,
            idOuvrier : idOuvrier , 
            idChantier : idChantier , 
            DescTache : DescTache, 
            dureeTache : dureeTache,
           
          },
        ]);
      });
      console.log('Success')
    };
  
    const getTache = () => {
      Axios.get("http://localhost:8000/Taches").then((response) => {
        setTacheList(response.data);
      });
    };
  //Operation de mise a jours du numero de telephone d'un ouvrier
    const updateDureeTache = (idTache) => {
      Axios.put("http://localhost:8000/updateTache", { newDureeTache:newDureeTache ,  idTache: idTache }).then(
        (response) => {
          setTacheList(
            TacheList.map((val) => {
              return val.idTache !== idTache
                ? {
                    idTache : val.idTache ,
                    idOuvrier : val.idOuvrier , 
                    idChantier : val.idChantier , 
                    DescTache : val.DescTache, 
                    dureeTache : val.dureeTache,
                  }
                : val;
            })
          );
        }
      );
      console.log("mise a jour effectuee avec success")
    };
  // suppression d'un ouvriers de la base de donnees
    const deleteTache = (idTache) => {
      Axios.delete(`http://localhost:8000/deleteTache/${idTache}`).then((response) => {
        setTacheList(
          TacheList.filter((val) => {
            return val.idTache !== idTache;
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
            label="idTache"
            name="email"
            autoComplete="email"
            variant="outlined"
            autoFocus
            type="number"
            onChange={(event) => {
              setidTache(event.target.value);
            }}
          />
           <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="idOuvrier"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="number"
              onChange={(event) => {
                setidOuvrier(event.target.value);
              }}
            />
          </Grid>
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
              label="DescrTache"
              name="prénom"
              autoComplete="prénom"
              variant="outlined"
              autoFocus
              type="text"
              onChange={(event) => {
                setDescTache(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}><TextField
            margin="normal"
            required
            fullWidth
            id="Date"
            name="PreClient"
            label="DuréeTache"
            autoComplete="date"
            variant="outlined"
            autoFocus
            type="text"
            onChange={(event) => {
              setdureeTache(event.target.value);
            }}
          />
          </Grid>

          
        </Grid>
        <Button type="submit"
          variant="contained"
          variant="outlined"
          onClick={addTache}> Add Tache</Button>
      </Box>

      <div className="Taches">
        <Button
          type="submit"
          //fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}

          onClick={getTache}>Show Taches</Button>

        {TacheList.map((val, key) => {
          return (
            <div className="clients">
              <div>
                <h3>idtache {val.idTache}</h3>
                <h3>ouvrier {val.idOuvrier}</h3>
                <h3>idChantier {val.idChantier}</h3>
                <h3>DescrTache {val.DescTache}</h3>
                <h3>Duree{val.dureeTache}</h3>
                

              </div>
              <div>
                <TextField
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewDureeTache(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateDureeTache(val.idTache);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteTache(val.idTache);
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
  export default Taches ;