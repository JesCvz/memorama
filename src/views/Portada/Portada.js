
import React from 'react';
import uanlLogo from '../../images/1.png';
import fimeLogo from '../../images/2.png';
import { Box, 
    Card,
    CardContent, 
    Grid, 
    makeStyles, 
    Table, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Typography, 
    Paper, 
    TableBody,
    CardActions,
    Button,
    Divider} from '@material-ui/core';
import { useHistory } from 'react-router';


const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

  const rows = [
    createData('Arturo Alejandro Hernández Vela', 1848889, 'IME', '7mo'),
    createData('Jesus Eduardo Marroquin Cavazos', 1826148, 'IAS', '8vo'),
    createData('Jesús Jared Ortiz Mendoza', 1841804, 'IAS', '8vo'),
    createData('Olga Deyanira Rodríguez Orozco', 1848018, 'IAS', '8vo'),
    createData('Miguel Angel García Martínez', 1828456, 'IAS', '8vo'),
    createData('Jorge Mario Zúñiga Castillo', 1844980, 'IAS', '8vo'),
  ];

function createData(name, matricula, carrera, semestre) {
    return { name, matricula, carrera, semestre };
  }

export const Portada = () => {
    const classes = useStyles();
    const history = useHistory();

    const handlePushHistory = (route) => {
        history.push(route)
    }

    return (
        <Grid container alignItems="center" direction="column">
            <Box sx={{ width: '100%', maxWidth: 1000 }} >
                <Card >
                    <CardContent>
                        <Grid container alignItems="center" direction="column" style={{marginTop: 10}}>
                            <Grid container direction="row">
                                <Grid item md={1} style={{textAlign:'right'}}>
                                    <img src={uanlLogo} alt={'Logo de UANL'}/>
                                </Grid>
                                <Grid item md={10} style={{textAlign:'center'}}>
                                    <Typography variant="h4">Universidad Autonoma de Nuevo Leon</Typography>
                                    <Typography variant="h4">Facultad de Ingenieria Mecanica Y Electrica</Typography>
                                </Grid>
                                <Grid item md={1} style={{textAlign:'left'}}>
                                    <img src={fimeLogo} alt={'Logo de FIME'}/>
                                </Grid>
                        </Grid>
                        <Grid container alignItems="center" direction="column" style={{marginTop: 10}}>
                                <Grid item md={10} style={{textAlign:'center', marginTop: 10}}>
                                    <Typography variant="h5"><strong>Materia:</strong></Typography>
                                    <Typography variant="h5">Pensamiento Creativo</Typography>
                                </Grid>
                                <Grid item md={10} style={{textAlign:'center', marginTop: 10}}>
                                    <Typography variant="h5"><strong>Actividad:</strong></Typography>
                                    <Typography variant="h5">Examen de Medio Curso </Typography>
                                </Grid>
                                <Grid item md={10} style={{textAlign:'center', marginTop: 10}}>
                                    <Typography variant="h5"><strong>Profesor:</strong></Typography>
                                    <Typography variant="h5">Ing. Luis Enrique Valdez Pérez </Typography>
                                </Grid>
                        </Grid>
                        <Grid container alignItems="center" direction="column" style={{marginTop: 10}}>
                                <Grid item md={10} style={{textAlign:'center', marginTop: 10}}>
                                    <Typography variant="h5"><strong>Alumnos:</strong></Typography>
                                </Grid>
                                <Grid item style={{ marginTop: 10}}>
                                <TableContainer component={Paper}>
                                    <Table className={classes.table} aria-label="simple table">
                                        <TableHead>
                                        <TableRow>
                                            <TableCell>Nombre</TableCell>
                                            <TableCell align="center">Matricula</TableCell>
                                            <TableCell align="center">Carrera</TableCell>
                                            <TableCell align="center">Semestre</TableCell>
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {rows.map((row) => (
                                            <TableRow key={row.name}>
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="center">{row.matricula}</TableCell>
                                            <TableCell align="center">{row.carrera}</TableCell>
                                            <TableCell align="center">{row.semestre}</TableCell>
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                                    </TableContainer>
                                </Grid>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <CardActions>
                    <Grid container direction='row' justifyContent= "space-around" style={{marginTop: 10, marginBottom: 10}}>
                        <Button variant="contained" color="primary" onClick={() => {handlePushHistory('/instrucciones')}}>
                            Instrucciones
                        </Button>
                        <Button variant="contained" color="primary" style={{backgroundColor:'green'}} onClick={() => {handlePushHistory('/jugar')}}>
                            Jugar
                        </Button>
                    </Grid>
                    </CardActions>
                </Card>
            </Box>
        </Grid>
    )
}