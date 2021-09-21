import { Box, Button, Card, CardActions, CardContent, Divider, Grid, List,Typography } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import JugarButton from '../../images/JugarButton.PNG';
import OtroParButton from '../../images/OtroParButton.PNG';
import CartasCombinadas from '../../images/CartasCombinadas.PNG';
import React from 'react';
import { useHistory } from 'react-router';


export const Instructions = () => {
    const history = useHistory();
    const handlePushHistory = (route) => {
        history.push(route)
    }
    return(
        <Grid container alignItems="center" direction="column">
            <Box sx={{ width: '100%', maxWidth: 1000 }} >
                <Card >
                    <CardContent>
                        <Grid container alignItems="center" direction="column">
                            <Grid item>
                                <Typography variant="h3">Instrucciones</Typography>
                            </Grid>
                            <Grid item>
                                <List>
                                    <ListItem>
                                        1.-Pulse el botón “jugar” ubicado en la parte posterior derecha, esto lo llevara al la interfaz de juego.<br/>
                                        O seleccione el botón de abrir menú y seleccione la opción de Juego.
                                    </ListItem>
                                   
                                    <ListItem>
                                        2.-A continuación se mostrará la interfaz del juego de Memorama donde podrá observar todas las cartas volteadas.
                                    </ListItem>
                                    <ListItem>
                                        3.-Pulse el botón “iniciar juego” en la parte posterior izquierda de la interfaz.
                                    </ListItem>
                                    <Grid container justifyContent={'center'}>
                                        <img src={JugarButton} width={500}/>
                                    </Grid>
                                    <ListItem>
                                        4.-En seguida las cartas se presentarán volteadas y procederá a seleccionar los pares de cartas correctos, 
                                        en caso de que su par de cartas no correspondan al mismo deberá pulsar el botón “trata otro par”, 
                                        ubicado en la parte posterior derecha, esto con el fin de regresar las cartas seleccionadas y seguir intentando hasta finalizar el juego.
                                    </ListItem>
                                    <Grid container justifyContent={'center'}>
                                        <img src={OtroParButton} width={500}/>
                                    </Grid>
                                    <ListItem>
                                        5.-Una vez finalizado el juego, usted habrá ganado y podrá volverlo a jugar pulsando en el botón “iniciar juego” nuevamente, para volver a jugar con un acomodo de cartas distinto.
                                    </ListItem>
                                    <Grid container justifyContent={'center'} style={{marginBottom:10}}>
                                        <img src={CartasCombinadas} width={350}/>
                                    </Grid>
                                </List>
                            </Grid>
                        </Grid>
                    </CardContent>
                    <Divider/>
                    <CardActions>
                    <Grid container direction='row' justifyContent= "space-around" style={{marginTop: 10, marginBottom: 10}}>
                        <Button variant="contained" color="primary" onClick={() => {handlePushHistory('/portada')}}>
                            Portada
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