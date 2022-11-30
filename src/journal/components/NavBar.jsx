import React from 'react'
import { AppBar, IconButton, Toolbar,Grid,Typography, Menu } from '@mui/material'
import {  LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { startLogOut } from '../../store/auth/thunks'



export const NavBar = ({drawerWidth =240}) => {

    const dispatch = useDispatch();

    const onLogout = ()=>{
        
     dispatch(startLogOut());
    }

    return (

        <AppBar 
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${ drawerWidth }px)` },
                ml: {sm: `${ drawerWidth }px` }
            }}
        >
            <Toolbar>
                <IconButton color='warning'>
                <MenuOutlined />
        </IconButton>
        
        <Grid container direction='row' justifyContent='space-between' alignItems='center'>

            <Typography variant='h6' noWrap component='div'> Aplicación Journal</Typography>
            <IconButton 
            onClick={onLogout}
            color='warning'>
            <LogoutOutlined/>
            <Typography>LogOut</Typography>
        </IconButton>

</Grid>



        </Toolbar>
        
        </AppBar>


    )
}
