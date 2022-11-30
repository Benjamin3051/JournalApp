import { doc, setDoc,collection } from "firebase/firestore";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers/loadNotes";
import { addNewEmptyNote, 
         savingNewNote,
         setActiveNote, 
         setNote} from "./journalSlice";


export const startNewNote = () =>{

     
    return async(dispatch , getState)=>{
        dispatch(savingNewNote());


     const { uid } = getState().auth;

     //uid de la nota, automatica por firebaseDB
        //Estructura definida DATA
        const newNota= {
            title:'',
            body:'',
            date: new Date().getTime(),
            
        }

        const newDoc = doc(collection(FirebaseDB,`${uid}/journal/notes`))
        const setDocResp= await setDoc(newDoc,newNota);


       


        //Dispatch de creacion de nota y de activación   
        
        dispatch(addNewEmptyNote(newNota));
        dispatch(setActiveNote(newNota));


    }

}

export const startLoadingNote = () =>{ 
    return async(dispatch , getState)=>{
       
     const { uid } = getState().auth;
        if(!uid) throw new Error('El usuario no existe');
     const notes = await loadNotes(uid);
    
     dispatch(setNote(notes));

     

    }

}