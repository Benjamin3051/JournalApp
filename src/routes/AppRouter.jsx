import { Navigate , Routes, Route } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { useCheckAuth } from '../hooks'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui'

export const AppRouter = () => {

 const {status} = useCheckAuth(); 
 // el usuario esta chequeado?
 if(status === 'checking'){ return <CheckingAuth/>  }




  return (
  
       
        <>
        <Routes>

          {
            (status === 'authenticated')
            ?  <Route path="/*" element = { <JournalRoutes /> }/>
            :  <Route path="/auth/*" element = { <AuthRoutes /> } />
          }
           
            {/* Otra ruta de aplicación */}
            <Route path="/*" element = { <Navigate to = '/auth/login' /> }/>

        </Routes>

        </>

  )
}