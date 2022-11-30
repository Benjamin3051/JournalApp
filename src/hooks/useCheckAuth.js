import { onAuthStateChanged } from 'firebase/auth';
import {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { FirebaseAuth } from '../firebase/config';
import { login, logOut } from '../store/auth';
import { startLoadingNote } from '../store/journal/thunks';


export const useCheckAuth = () => {

  const dispatch = useDispatch();
  const status =   useSelector(state => state.auth);
  
 
   useEffect(() => {
     onAuthStateChanged(FirebaseAuth, async (user) =>{
       if(!user) return dispatch(logOut()); 
 
         const { uid, email, displayName, photoURL } = user;
         dispatch ( login( { uid, email, displayName, photoURL } ));
         dispatch(startLoadingNote());
 
     })
   }, [])

return status

}

//export default useCheckAuth
