import { AddBoxOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import { orange } from '@mui/material/colors'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal/thunks'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView } from '../views/NoteView'
import { NothingSelectedView } from '../views/NothingSelectedView'

export const JournalPage = () => {
  
  const dispatch = useDispatch();

  const {isSaving,active} = useSelector(state => state.journal)

  const onClickNewNote=() =>{
      
    dispatch(startNewNote());

    }

  return (
    

    <JournalLayout>
      {
        (!!active)
        ? <NoteView/>
        : <NothingSelectedView/>

     }
      
      <IconButton
          onClick={onClickNewNote}
          disabled ={isSaving}
          size='large'
          sx={{
          color: 'white',
           backgroundColor: orange.A400,
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
           }}
        >
        <AddBoxOutlined sx={{ fontSize: 55 }} />
        
        </IconButton>
        
    
     </JournalLayout>
  )
}
