import React,{useMemo} from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { Grid, TextField, Typography, Button, Link,Alert }  from '@mui/material'
import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layouts/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useDispatch, useSelector } from 'react-redux'
import { chekingAuthentication, startGoogleSingnIn, startLoginWithEmailAndPassword } from '../../store/auth/thunks'

const dataForm= {
  email: '',
  password:''
};

export const LoginPage = () => {

     // seleccionar status del autentificador
    const {status,errorMessage} =useSelector( state => state.auth );

    

  const dispatch= useDispatch();


  const {email,password,onInputChange}= useForm(dataForm);

   // pregunta si es estado está activo
    const isAuthentificating = useMemo(() => status === 'cheking',[status]);

    const onSubmit = (event)=>
    {
        event.preventDefault();

        console.log({email,password});

        //dispatch(chekingAuthentication());
        dispatch(startLoginWithEmailAndPassword({email,password}));
    }


    const onGoogleSingIn = () =>
    {
      console.log('Emitido por google choro');

      dispatch(startGoogleSingnIn());
    }

  return (
    <>
      <AuthLayout title = 'Login'>
        
              <form onSubmit={ onSubmit } className='animate__animated animate__fadeIn animate__faster'>
                 <Grid container>
                   <Grid item 
                        xs={12} sx= {{ mt:2 }}>
                      <TextField
                        label= "Correo"
                        type="email"
                        placeholder="Ingrese correo"
                        fullWidth
                        name="email"
                        value={email}
                        onChange={onInputChange}
                        />
                   </Grid>
                   <Grid item 
                         xs={12} sx= {{ mt:2 }}>
                      <TextField
                        label= "Contraseña"
                        type="password"
                        placeholder="Ingrese contraseña"
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onInputChange}                        
                        />
                   </Grid>
                   <Grid container spacing= { 2 } sx= {{ mb:2 , mt: 2}}>
                      <Grid item xs={12} sm={ 6 } >
                      <Grid 
                          display = {!!errorMessage? '':'none'} >
                          <Alert severity='error'> {errorMessage} </Alert>
                        </Grid>
                          <Button
                              disabled = {isAuthentificating}
                              type= "submit"
                              variant='contained' 
                              fullWidth>
                                Ingresar
                          </Button>
                    </Grid>
                    <Grid item xs = {12} sm = { 6 } >
                          <Button
                              disabled = {isAuthentificating}
                              onClick={onGoogleSingIn}
                              variant='contained' fullWidth>
                            <Google />
                            <Typography sx={{ml:1}}>Google</Typography>
                          </Button>
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                      <Link component = { RouterLink } color='inherit' to = "/auth/register">
                        Regístrate
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
              </AuthLayout>
    </>
  )
}