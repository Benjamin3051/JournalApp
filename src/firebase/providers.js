import { AspectRatio } from '@mui/icons-material';
import { createUserWithEmailAndPassword, GoogleAuthProvider , 
         signInWithEmailAndPassword, signInWithPopup, 
         updateProfile } from 'firebase/auth'

import { FirebaseAuth} from './config';

//provider ve la conexion a firebase

const googleProvider = new GoogleAuthProvider();



export const signWithGoogle = async () =>{



    try {



        const results = await signInWithPopup(FirebaseAuth, googleProvider);

        //const credentials = GoogleAuthProvider.credentialFromResult(results);



        const { displayName, email, photoURL, uid} = results.user;

        return{

            ok: true,

            displayName, email, photoURL,uid

        }

        

    } catch (error) {

        const errorCode = error.code;

        const errorMessage = error.message;

        return{

            ok: false,

            errorCode, errorMessage

        }

    }

}

export const registerUserWithEmailAndPassword = async ({email,password,displayName}) => {



    try {

        const respuesta = await createUserWithEmailAndPassword(FirebaseAuth,email,password);

        //const credentials = GoogleAuthProvider.credentialFromResult(results);

        const {photoURL, uid} = respuesta.user;

        //autentificar usuario
        await updateProfile(FirebaseAuth.currentUser,{displayName});

        console.log(respuesta);
         return{
            ok: true,
            displayName, email, photoURL,uid
        }
     
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return{

            ok: false,
            errorCode, errorMessage

        }

    }


}

//logeo 
export const loginUserWithEmailAndPassword = async ({email,password}) => {

    try {
        const respuesta = await signInWithEmailAndPassword(FirebaseAuth,email,password);

        //const credentials = GoogleAuthProvider.credentialFromResult(results);
        const {photoURL, uid,} = respuesta.user;

        //autentificar usuario
        //await updateProfile(FirebaseAuth.currentUser,{displayName});       
         return{
            ok: true,
            email, photoURL
        }
     
    } catch (error) {

        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok: false,
            errorCode, errorMessage
        }
    }

}

export const logoutFirebase = async () =>{

return await FirebaseAuth.signOut();

}