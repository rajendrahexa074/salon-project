import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser, registerUser } from "../../services/AuthService";

const user = JSON.parse(localStorage.getItem('user'));
export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        return await loginUser(credentials);
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
});


export const signup = createAsyncThunk('auth/register', async (data, thunkAPI) => {
    try {
        return await registerUser(data);
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);
    }
})


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: user || null,
        isAuthenticated: !!user,
        isLoading: false,
        error: null,
    },
    reducers: {
        logOut:(state)=>{
            state.isAuthenticated=false;
            state.user=null;
            localStorage.removeItem('user');
        },

    },
    extraReducers: (builder) => {
        builder

            //login

            .addCase(login.pending, (state, action) => {
                state.isLoading = true;
                state.error = null
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.user = action.payload;
                state.isAuthenticated = true;
                localStorage.setItem('user', JSON.stringify(action.payload))
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
                state.isAuthenticated=true;
            })

            // Signup

            .addCase(signup.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(signup.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuthenticated = true;
                state.isLoading = false;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase(signup.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });

    }
})


export default authSlice.reducer;
export const {logOut}= authSlice.actions;