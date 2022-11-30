import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: 'No- Authenticated' ,// manejo de estado para loggin - 'cheking'-'No- Authenticated' - 'Authenticated'
        uid:null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage :null,

        },
    reducers: {
        login: (state,  {payload}) => {
            state.status='authenticated',
            state.uid= payload.uid,
            state.email=payload.email,
            state.photoURL=payload.photoURL,
            state.displayName=payload.displayName,
            state.errorMessage = payload.errorMessage;
        },
        logOut: (state, {payload}  ) => {
            state.status='no- authenticated',
            state.uid=null,
            state.displayName=null,
            state.email=null,
            state.photoURL=null,
            state.errorMessage  = payload?.errorMessage;
        },
        checkingCredenciales: (state,  action  ) => {
            state.status='cheking'
        },
    }
});
// ACCIONES DE LA APP
export const { login,logOut,checkingCredenciales } = authSlice.actions;