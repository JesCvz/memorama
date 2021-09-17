import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';
import React from 'react';


export const Instructions = () => {
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
                                <Typography variant="body" gutterBottom>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
                                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
                                    officia deserunt mollit anim id est laborum.
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Card>
            </Box>
        </Grid>
    )
}