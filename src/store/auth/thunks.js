import { loginUserWithEmailAndPassword, logoutFirebase, registerUserWithEmailAndPassword, signWithGoogle } from "../../firebase/providers";
import { checkingCredenciales, login,logOut} from "./authSlice"

//thunks gatilla las acciones

export  const chekingAuthentication =(email,password) =>
{
    return async (dispatch) => 
    {
        dispatch(checkingCredenciales());
    }

} 

export  const startGoogleSingnIn =() =>
{
    return async (dispatch) => 
    {
        dispatch(checkingCredenciales());

        const result = await signWithGoogle(); 
        //console.log (result);
        if(!result.ok) return dispatch(logOut(result.errorMessage));

        dispatch(login(result));

    }

} 

export const startCreatingUserWithEmailAndPassword = ({email, password, displayName}) =>{
    return async (dispatch) =>{
        
        dispatch( checkingCredenciales())
       // const respuesta = await registerUserWithEmailAndPassword ({ email,password, displayName,errorMessage });
        const {ok,uid,photoURL,errorMessage,} = await registerUserWithEmailAndPassword ({ email,password, displayName });
       if(!ok) return dispatch(logOut({errorMessage}));
       
       dispatch (login({uid,email,displayName}));
    }
}

export const startLoginWithEmailAndPassword = ({email, password}) =>{
    return async (dispatch) =>{
        
        dispatch( checkingCredenciales())
        
        const result = await loginUserWithEmailAndPassword({ email,password });
       if(!result.ok) return dispatch(logOut({result}));
        dispatch (login({result}));
    }
}

export const startLogOut = () =>{
    return async (dispatch) =>{        
             await logoutFirebase();
             dispatch(logOut());      
       
    }
}