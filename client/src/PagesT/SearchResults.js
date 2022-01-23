import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Container, Grid } from '@mui/material';




export default function SearchResults() {
  const [data, setData] = React.useState(undefined);
  React.useEffect(() => {
    fetch('http://localhost:8000/Search').then(res => { return res.json() }).then((res) => { setData(res); });
  }, []);

  return (
    <Container sx={{ marginTop: "100px" }}>
      <Grid sx={{ marginLeft: 6 }} container spacing={3}>
      {data && data.map((item) => (
        <Grid sx={{ marginBottom: 6 }} xs={12} md={6} lg={4}>
          <Card container spacing={3} sx={{ maxWidth: 345, height: 400 }}>
            <Grid >
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" color='red'>
                    Nom : {item.NomOuvrier}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    Prénom : {item.PrenomOuvrier}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    Date de naissance : {item.DateNaiOuvrier.substring(0, 10)}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    Email : {item.Email}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    Addresse : {item.AdrOuvrier}
                  </Typography>
                  <Typography gutterBottom variant="h5">
                    Téléphone : {item.TelephoneOuv}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Grid>
          </Card>
        </Grid>
      ))



      }
      </Grid>
    </Container>
  );
}
