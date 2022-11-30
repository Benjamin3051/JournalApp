import React,{useState,useMemo} from 'react'
import { Link as RouterLink} from 'react-router-dom'
import { Grid, TextField, Typography, Button, Link,Alert }  from '@mui/material'

import { Google } from '@mui/icons-material'
import { AuthLayout } from '../layouts/AuthLayout'
import {useForm} from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailAndPassword } from '../../store/auth/thunks'

//Crear constante nueva para registro
const formData= (
  {
     // RUT:'',
      email: '',
      password:'',
      displayName: ''

  });

  const formValidations = {

    email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],  
    password: [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],  
    displayName: [ (value) => value.length >= 3, 'El nombre es obligatorio.'],
    //RUT: [ (value) => value.includes('-'), 'El correo debe de tener una -'],
  
  }


export const RegisterPage = () => {

 const {status,errorMessage} = useSelector (state => state.auth);
 const isChekingAuthentication = useMemo(() => status, 'cheking',[status]) //cambiar

  const dispatch = useDispatch();

   const [formSubmitted, setformSubmitted] = useState(false);


  const { formState, displayName,email, password, onInputChange, 
    isFormValid, displayNameValid, emailValid, passwordValid,
  } = useForm( formData, formValidations );



  const onSubmit= (event) => 
  {
    console.log("presion boton");
    event.preventDefault();
    setformSubmitted(true);

    if(!isFormValid)return;
    
    dispatch(startCreatingUserWithEmailAndPassword(formState));

    console.log(formState);
  }

  return (
    <>
    <AuthLayout title = 'Registro'>

    <h1> Formulario:  {isFormValid? 'Válido': 'Incorrecto'}</h1>
              <form onSubmit = { onSubmit }>
              <Grid container>
                    {/*   <Grid item 
                        xs={12} sx= {{ mt:2 }}>
                         <TextField
                        label= "RUT"
                        type="text"
                        placeholder="Ingrese RUT"
                        fullWidth
                              name= "RUT"
                              value= { RUT }
                              onChange = { onInputChange }
                              error= {!! rutValid}
                              helperText = { rutValid}
                        />
                   </Grid> */}
                   <Grid item 
                        xs={12} sx= {{ mt:2 }}>
                      <TextField
                        label= "Nombre"
                        type="text"
                        placeholder="Ingrese Nombre"
                        fullWidth
                        name= 'displayName'
                        value= { displayName }
                        onChange = { onInputChange }
                        error= {!! displayNameValid && formSubmitted}
                        helperText = { displayNameValid}
                        />
                   </Grid>
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
                        error= {!! emailValid}
                        helperText = { emailValid}
                        />
                   </Grid>
                   <Grid item 
                         xs={12} sx= {{ mt:2 }}>
                      <TextField
                        label= "Contraseña"
                        type="password"
                        placeholder="Ingrese contraseña"
                        fullWidth
                              name= "password"
                              value= { password }
                              onChange = { onInputChange }
                              error= {!! passwordValid}
                              helperText = { passwordValid}
                        />
                   </Grid>
                   <Grid container spacing= { 2 } sx= {{ mb:2 , mt: 2}}>
                      <Grid item xs={12} mt={2} >
                        <Grid 
                          display = {!!errorMessage? '':'none'} >
                          <Alert severity='error'> {errorMessage} </Alert>
                        </Grid>
                          <Button
                              disable = { isChekingAuthentication }
                              type='submit'
                              variant='contained' 
                              fullWidth>
                                Registrarse
                          </Button>
                    </Grid>
                    <Grid item xs = {12}  >
                          
                    </Grid>
                    <Grid container direction='row' justifyContent='end'>
                      <Link component = { RouterLink } color='inherit' to = "/auth/login">
                      <Typography sx={{ mr:1 }}>¿Ya tienes una cuenta? Ingresar </Typography>
                      </Link>
                    </Grid>
                  </Grid>
                </Grid>
              </form>
              </AuthLayout>
    </>
  )
}
