import { useState } from "react";
import Axios from "axios";
import { Box, Button, Container, Grid, TextField } from "@mui/material";

function App() {
  const [idChantier, setidChantier] = useState(0);
  const [idResponsable, setidResponsable] = useState("");
  const [DescChantier, setDescChantier] = useState("");
  const [newDescChantier, setnewDescChantier] = useState("");
  const [ChantierList, setChantierList] = useState([]);

  const addChantier = () => {
    Axios.post("http://localhost:8000/createChantier", {
      idChantier:idChantier,
      idResponsable:idResponsable,
      DescChantier:DescChantier,
    }).then(() => {
      setChantierList([
        ...ChantierList,
        {
          idChantier:idChantier,
          idResponsable:idResponsable,
          DescChantier:DescChantier,
        },
      ]);
    });

  };

  const getChantier = () => {
    Axios.get("http://localhost:8000/Chantiers").then((response) => {
      setChantierList(response.data);
    });
  };

  const updateDescChantier = (idChantier) => {
    Axios.put("http://localhost:8000/updateChantier", { DescChantier: newDescChantier, idChantier: idChantier }).then(
      (response) => {
        setChantierList(
          ChantierList.map((val) => {
            return val.idChantier !== idChantier
              ? {
                  idChantier: val.idChantier,
                  idResponsable: val.idResponsable,
                  DescChantier: val.DescChantier
                 
                }
              : val;
          })
        );
      }
    );
  };

  const deleteChantier = (idChantier) => {
    Axios.delete(`http://localhost:8000/deleteChantier/${idChantier}`).then((response) => {
      setChantierList(
        ChantierList.filter((val) => {
          return val.idChantier !== idChantier;
        })
      );
    });

  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 10 }}>
      <Box className="information" noValidate sx={{ mt: 3 }}>
        <Grid container spacing={2}>
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
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Responsable"
              name="email"
              autoComplete="email"
              variant="outlined"
              autoFocus
              type="number"
              onChange={(event) => {
                setidResponsable(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              margin="normal"
              required
              fullWidth
              defaultValue="billal"
              id="prénom"
              label="DescChantier"
              name="prénom"
              autoComplete="prénom"
              variant="outlined"
              autoFocus
              type="text"
              onChange={(event) => {
                setDescChantier(event.target.value);
              }}
            />
          </Grid>

        </Grid>
        <Button type="submit"
          variant="contained"
          variant="outlined"
          onClick={addChantier}> Add Chantier</Button>
      </Box>

      <div className="chantiers">
        <Button
          type="submit"
          //fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}

          onClick={getChantier}>Show Chantiers</Button>

        {ChantierList.map((val, key) => {
          return (
            <div className="clients">
              <div>
                
                <h3>idChantier {val.idChantier}</h3>
                <h3>Responsable {val.idResponsable}</h3>
                <h3>DescChantier {val.DescChantier}</h3>
                

              </div>
              <div>
                <TextField
                  type="text"
                  placeholder="2000..."
                  onChange={(event) => {
                    setnewDescChantier(event.target.value);
                  }}
                />
                <button
                  onClick={() => {
                    updateDescChantier(val.idChantier);
                  }}
                >
                  {" "}
                  Update
                </button>

                <button
                  onClick={() => {
                    deleteChantier(val.idChantier);
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

export default App;