import { Button, Container, CssBaseline, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Axios } from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function FormChant({ val }) {
    const params = useParams();
    const [ChantierInfo, setChantierInfo] = useState("");


    const [idResponsable, setidResponsable] = useState("");
    const [DescChantier, setDescChantier] = useState(undefined);


    useEffect(() => {
        fetch(`http://localhost:8000/Chantiers/${params.idChantier}`)
            .then((res) => {
                return res.json();
            }).then((res) => {
                setChantierInfo(res[0]);

                document.getElementsByName("idResponsable")[0].value = res[0].NomOuvrier;
                document.getElementsByName("DescChantier")[0].value = res[0].DescChantier;

                setidResponsable(res[0].NomOuvrier);
                setDescChantier(res[0].DescChantier);
            });

    }, [params.idChantier]);

    const handleClick = (e) => {
        e.preventDefault();
        const idChantier = ChantierInfo.idChantier;
        const data = { idResponsable: idResponsable, DescChantier: DescChantier, idChantier: idChantier };
        fetch(`http://localhost:8000/ChantierInfo`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }
        ).then(() => { document.location.href = '/chantiers1' });
    }

   
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
                    Chantier N° {params.idChantier}
                </Typography>

                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                        <TextField
                            required
                            id="idResponsable"
                            name="idResponsable"
                            label="Numéro Responsable"
                            fullWidth
                            autoComplete="given-name"
                            variant="outlined"
                            onChange={(e) => setidResponsable(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={12} >
                        <TextField
                            required
                            id="DescChantier"
                            name="DescChantier"
                            label="Description du chantier"
                            fullWidth
                            type='text'
                            variant="outlined"
                            multiline="Defaultvalue"
                            onChange={(e) => setDescChantier(e.target.value)}

                        />
                    </Grid>


                    <Button onClick={handleClick}
                        color="success"
                        variant='outlined'
                        margin='0 auto'
                        display= 'block' >  Valider </Button>
                        
            </Grid>
        </Box>
   

        </Container >);
}