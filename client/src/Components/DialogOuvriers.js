import Dialog from '@mui/material/Dialog';
import { Button } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

function SimpleDialog({ onClose, selectedValue, open, data }) {

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
}

// SimpleDialog.propTypes = {
//   onClose: PropTypes.func.isRequired,
//   open: PropTypes.bool.isRequired,
//   selectedValue: PropTypes.string.isRequired,
// };

export default function SimpleDialogDemo({ data, func }) {
  const [open, setOpen] = React.useState(false);
  const [ouv, setOuv] = useState(data);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Consulter
      </Button>

      <Dialog onClose={handleClose} open={open}>
        <React.Fragment>
          <Typography variant="h6" gutterBottom>
            Ouvrier N°
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                id="firstName"
                name="firstName"
                label="Prénom"
                fullWidth
                autoComplete="given-name"
                variant="standard"
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
                variant="standard"
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
                variant="standard"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="email"
                name="email"
                label="Email"
                fullWidth
                disabled
                autoComplete="shipping address-line2"
                variant="standard"
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                required
                id="tel"
                name="tel"
                label="Téléphone"
                fullWidth
                disabled
                autoComplete="shipping address-level2"
                variant="standard"
              />
            </Grid>
            <Button onClick={()=> func()} color='primary' variant='outlined'>Valider</Button>
          </Grid>
        </React.Fragment>
      </Dialog>

    </div>
  );
}