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

export var OuvrierInformation;


const DisplayTableOuvriers = () => {

  const [NomOuvrier, setNomOuvrier] = useState(undefined);
  const [PreOuvrier, setPreOuvrier] = useState(undefined);
  const [DateNaiOuvrier, setDateNaiOuvrier] = useState(undefined);
  const [AdrOuvrier, setAdrOuvrier] = useState(undefined);

  const [OuvrierList, setOuvrierList] = useState([]);
  const [OuvrierInfo, setOuvrierInfo] = useState([]);


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

  const getOuvrier = () => {
    Axios.get("http://localhost:8000/ouvriers").then((response) => {
      setOuvrierList(response.data);
    });
  };



  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
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

  return (

    <Container >
      <div className="ouvriers">
        <Button
          //fullWidth
          variant="contained"
          color='warning'

          sx={{ mt: 3, mb: 2 }}

          onClick={getOuvrier}>Consulter Ouvriers</Button>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table sx={{ minWidth: 900 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell className={classes.TableHead} align="center"></StyledTableCell>

                {/** <StyledTableCell className={classes.TableHead} align="center">ID Ouvrier&nbsp;</StyledTableCell>*/}
                <StyledTableCell className={classes.TableHead} align="center">Nom Ouvriers&nbsp;</StyledTableCell>
                <StyledTableCell className={classes.TableHead} align="center">Prenom Ouvrier&nbsp;</StyledTableCell>
                <StyledTableCell className={classes.TableHead} align="center"></StyledTableCell>
                <StyledTableCell className={classes.TableHead} align="center"></StyledTableCell>


              </TableRow>
            </TableHead>
            <TableBody>
              {OuvrierList.map((val, key) => (
                <StyledTableRow key={val.idOuvrier}>
                  {/**  <StyledTableCell className={classes.StyledTableCell}  component="th" scope="val" align="center"> {val.idOuvrier}</StyledTableCell>*/}
                  <StyledTableCell className={classes.StyledTableCell} align="center" > <Avatar alt={val.NomOuvrier} sx={{ bgcolor: 'coral' }} src='user/src/Assets/img/pics2.png' /></StyledTableCell>
                  <StyledTableCell className={classes.StyledTableCell} align="center" > {val.NomOuvrier}</StyledTableCell>
                  <StyledTableCell className={classes.StyledTableCell} align="center"> {val.PrenomOuvrier}  </StyledTableCell>
                  <StyledTableCell className={classes.StyledTableCell} align="center" >
                    {/* <Button variant="outlined" onClick={() => { getUnOuvrier(val.idOuvrier); }} OuvrierInformation={val.idOuvrier} > Consulter</Button> */}

                    
                    <Button onClick={() => {
                      document.location.href= '/InfoOuv/'+val.idOuvrier.toString()
                    }}
                    variant="outlined" >
                      Consulter / Modifier
                    </Button>
                    

                  </StyledTableCell>
                  <StyledTableCell className={classes.StyledTableCell} align="center" ><Button variant="outlined" onClick={() => { deleteOuvrier(val.idOuvrier); }} >Supprimer</Button></StyledTableCell>
                </StyledTableRow>


              ))}

            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Container>

  );
}
export default DisplayTableOuvriers;
