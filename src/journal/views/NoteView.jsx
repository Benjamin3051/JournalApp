import React, { useMemo } from 'react'
import {Button, Grid, TextField, Typography } from '@mui/material'
import { SaveOutlined } from '@mui/icons-material'
import { ImageGallery } from '../components'
import { useForm } from '../../hooks/useForm'
import { useSelector } from 'react-redux'

export const NoteView = () => {

    const { active :notaActiva} = useSelector(state => state.journal)
    const {body, title, date, onImput,onInputChange,formState } = useForm(notaActiva);

    /* const fechaString = useMemo(() => 
    {
      const newDate= new Date(date)
      return newDate.toUTCString();

    }, [date])
 */

  return (
    
    <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
        <Grid item>
            <Typography fontSize={ 39 } fontWeight='light' >"10 10 10 trst"</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{ padding: 2 }}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Guardar
            </Button>
        </Grid>

        <Grid container>
            <TextField 
                type="text"
                variant="filled"
                fullWidth
                placeholder="Ingrese un título"
                label="Título"
                sx={{ border: 'none', mb: 1 }}
                name = "tittle"
                value ={title}
                onChange={onInputChange}


            />

            <TextField 
                type="text"
                variant="filled"
                fullWidth
                multiline
                placeholder="¿Qué sucedió en el día de hoy?"
                minRows={ 5 }
                name = "tittle"
                value ={body}
                onChange={onInputChange}

            />
        </Grid>

        <ImageGallery />

    </Grid>
  )
}
