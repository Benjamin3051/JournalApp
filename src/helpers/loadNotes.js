import { collection, getDocs } from "firebase/firestore";
import { FirebaseDB } from "../firebase/config";

export const loadNotes= async (uid = '') => {
    if(!uid) throw new Error('El usuario no existe');

    const collectionRef = collection(FirebaseDB,`${uid}/journal/notes`)
    const Notas= await getDocs(collectionRef); 

    const notesRedux =[];


    Notas.forEach(
        doc => {notesRedux.push({id: doc.id, ...doc.data() })
    
               }
        );

    return notesRedux;
    
} 