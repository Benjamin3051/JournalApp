import {Grid, CircularProgress } from '@mui/material'
import React from 'react'

//componente de carga  (circulo carga)
export const CheckingAuth =() => {
  return (
    <Grid    
    container 
    spacing= {0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 5, }}
        >
                <Grid container
                      direction='row'
                      justifyContent='center'
                    >
                        <CircularProgress color='warning'/>
                </Grid>
    </Grid>
  )
}
