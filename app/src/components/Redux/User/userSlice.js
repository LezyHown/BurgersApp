import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase';

export const signUp = createAsyncThunk('user/signup', async (credentials) => {
    const { email, password } = credentials;
    const user = (await createUserWithEmailAndPassword(auth, email, password)).user;
    return { name: user.displayName, avatar: user.photoURL, email: user.email };
});

export const signIn = createAsyncThunk('user/signin', async () => {
    const user = (await signInWithPopup(auth, new GoogleAuthProvider())).user; 
    return { name: user.displayName, avatar: user.photoURL, email: user.email };
});

const userSlice = createSlice({
    name: 'user', 
    initialState: {
        user: null,
        status: {
            error: null,
            loading: false
        }
    },
    reducers: {
        signOut(state){
            state.user = null;
        },
        setAvatar(state, action){
            if(state.user && action.payload){
                state.user.avatar = action.payload;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(signIn.pending, (state) => { 
            state.status.loading = true; 
        })
        .addCase(signIn.fulfilled, (state, action) => {
            state.status.loading = false;
            state.user = action.payload;
        })
        .addCase(signIn.rejected, (state, action) => {
            state.status.loading = false;
            action.error = action.payload;
        });
    }
});

export const { signOut, setAvatar } = userSlice.actions;

export default userSlice.reducer;