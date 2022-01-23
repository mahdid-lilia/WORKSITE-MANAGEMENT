import { useState } from "react";
import Axios from "axios";
import { Box, Button, Container, Grid, textFieldClasses } from "@mui/material";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@material-ui/core';
import { palette } from '@mui/system';
import { Avatar, Link } from "@mui/material";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Dialog from '@mui/material/Dialog';

export var ChantierInformation;


const DisplayTableChantiers = () => {

  const [idChantier, setidChantier] = useState(undefined);
  const [idResponsable, setidResponsable] = useState(undefined);
  const [DescChantier, setDescChantier] = useState(undefined);
  
  const [ChantierList, setChantierList] = useState([]);
  const [ChantierInfo, setChantierInfo] = useState([]);


  const useStyles = makeStyles({
    table: {
      minWidth: 900
    },
    tableContainer: {
      background: '#ffbb76',
      margin: '10px 10px',
      borderRadius: 15,
      fontFamily: 'monospace ',
      padding: '0 30px',
    },
    TableHead: {
      fontWeight: 'bold',
      fontFamily: 'monospace',
      backgroundColor: ' #ffa74e',

    },
    StyledTableCell: {
      fontWeight: 'semibold',
      fontFamily: 'monospace',

    }
  });
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#ffbb76',
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  const classes = useStyles();

  const getChantier = () => {
    Axios.get("http://localhost:8000/Chantiers").then((response) => {
      setChantierList(response.data);
    });
  };



  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  // suppression d'un Chantiers de la base de donnees
  const deleteChantier = (idChantier) => {
    Axios.delete(`http://localhost:8000/deleteChantier/${idChantier}`).then((response) => {
      setChantierList(
        ChantierList.filter((val) => {
          return val.idChantier !== idChantier;
        })
      );
    });
    console.log("suppression effectuee avec success")
  };

  return (

    <Container >
      <div className="Chantiers">
        <Button
          //fullWidth
          variant="contained"
          color='warning'

          sx={{ mt: 3, mb: 2 }}

          onClick={getChantier}>Consulter Chantiers</Button>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.TableHead} align="center"></StyledTableCell>

                {/** <StyledTableCell className={classes.TableHead} align="center">ID Chantier&nbsp;</StyledTableCell>*/}
                <StyledTableCell className={classes.TableHead} align="center">Numéro Chantier&nbsp;</StyledTableCell>
                <StyledTableCell className={classes.TableHead} align="center"> Responsable Chantier&nbsp;</StyledTableCell>
                

                <StyledTableCell className={classes.TableHead} align="center"></StyledTableCell>
                <StyledTableCell className={classes.TableHead} align="center"></StyledTableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {ChantierList.map((val, key) => (
                <StyledTableRow key={val.idChantier}>
                  {/**  <StyledTableCell className={classes.StyledTableCell}  component="th" scope="val" align="center"> {val.idChantier}</StyledTableCell>*/}
                  <StyledTableCell className={classes.StyledTableCell} align="center" > <Avatar alt={val.NomChantier} sx={{ bgcolor: 'coral' }} src='user/src/Assets/img/pics2.png' /></StyledTableCell>
                  <StyledTableCell className={classes.StyledTableCell} align="center"> {val.idChantier}  </StyledTableCell>

                  <StyledTableCell className={classes.StyledTableCell} align="center"> {val.idResponsable}  </StyledTableCell>
                  
                  
                  <StyledTableCell className={classes.StyledTableCell} align="center" >
                    {/* <Button variant="outlined" onClick={() => { getUnChantier(val.idChantier); }} ChantierInformation={val.idChantier} > Consulter</Button> */}

                    
                    <Button onClick={() => {
                      document.location.href= '/InfoChant/'+val.idChantier.toString()
                    }}
                    variant="outlined" >
                      Consulter / Modifier
                    </Button>

                  </StyledTableCell>
                  <StyledTableCell className={classes.StyledTableCell} align="center" ><Button variant="outlined" onClick={() => { deleteChantier(val.idChantier); }} >Supprimer</Button></StyledTableCell>
                </StyledTableRow>


              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>

  );
}
export default DisplayTableChantiers;
