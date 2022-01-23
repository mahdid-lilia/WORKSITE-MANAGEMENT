import { Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function FormOuv({ val }) {
    const params = useParams();
    const [ouvrierInfo, setOuvrierInfo] = useState("");

    const [nom, setNom] = useState(undefined);
    const [prenom, setPrenom] = useState(undefined);
    const [dateNai, setDateNai] = useState(undefined);
    const [address, setAddress] = useState(undefined);
    const [tel, setTel] = useState(undefined);
    const [email, setEmail] = useState(undefined);
    const [OuvrierList, setOuvrierList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8000/Ouvriers/${params.idOuvrier}`)
            .then((res) => {
                return res.json();
            }).then((res) => {
                setOuvrierInfo(res[0]);
                let dateModif = res[0].DateNaiOuvrier.substring(0, 10);

                document.getElementsByName("lastName")[0].value = res[0].NomOuvrier;
                document.getElementsByName("firstName")[0].value = res[0].PrenomOuvrier;
                document.getElementsByName("birthday")[0].value = dateModif;
                document.getElementsByName("address")[0].value = res[0].AdrOuvrier;
                document.getElementsByName("email")[0].value = res[0].Email;
                document.getElementsByName("tel")[0].value = res[0].TelephoneOuv;
                setNom(res[0].NomOuvrier);
                setPrenom(res[0].PrenomOuvrier);
                setDateNai(dateModif);
                setAddress(res[0].AdrOuvrier);
                console.log(res);
            });

    }, [params.idOuvrier]);

    const handleClick = (e) => {
        e.preventDefault();
        const id = ouvrierInfo.idOuvrier;
        const data = {NomOuvrier : nom, PrenomOuvrier : prenom, DateNaiOuvrier : dateNai, AdrOuvrier : address, idOuvrier : id};
        fetch(`http://localhost:8000/ouvrierInfo`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        ).then(() => {document.location.href = '/ouvriers1'});
    }

    console.log(params.idOuvrier);
    const deleteOuvrier = (idOuvrier) => {
        Axios.delete(`http://localhost:8000/delete/${idOuvrier}`).then((response) => {
          setOuvrierList(
            OuvrierList.filter((val) => {
              return params.idOuvrier !== idOuvrier;
            })
          );
        });
        console.log("suppression effectuee avec success")
      };
    return (
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
                <Typography variant="h6" gutterBottom>
                    Ouvrier N° {params.idOuvrier}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="firstName"
                            name="firstName"
                            label="Prénom"
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                            onChange={(e) => setPrenom(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="lastName"
                            name="lastName"
                            label="Nom"
                            fullWidth
                            autoComplete="family-name"
                            variant="outlined"
                            onChange={(e) => setNom(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            required
                            id="birthday"
                            name="birthday"
                            label="Date de naissance"
                            fullWidth
                            type='date'
                            variant="outlined"
                            onChange={(e) => setDateNai(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            required
                            id="address"
                            name="address"
                            label="Addresse"
                            fullWidth
                            autoComplete="shipping address-line1"
                            variant="outlined"
                            onChange={(e) => setAddress(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            id="email"
                            name="email"
                            label=""
                            fullWidth
                            disabled
                            autoComplete="shipping address-line2"
                            variant="outlined"
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="tel"
                            name="tel"
                            label=""
                            fullWidth
                            disabled
                            autoComplete="shipping address-level2"
                            variant="outlined"
                            onChange={(e) => setTel(e.target.value)}

                        />
                    </Grid>
                    <Button onClick={handleClick} color='primary' variant='outlined'>Valider</Button>
                     <Button   onClick={() => {
                    deleteOuvrier(val.idOuvrier);
                  }} variant="outlined"  >Supprimer</Button>
                </Grid>
            </Box>

        </Container>);
}






































