import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { uploadFiles } from "../../services/FileUploadService";


export const uploadApi = createAsyncThunk('file/uploadFile', async (formdata, thunkAPI) => {
    try {
        return uploadFiles(formdata);
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);

    }
})


const UplaodSlice=createSlice({
    name:'file/uploadFile',
    initialState:{
        isLoading:false,
        data:[],
        error:null
    },
    reducers:{
        
    },
    extraReducers:(builder)=>{
        builder.addCase(uploadApi.pending,(state,action)=>{
            state.isLoading=true;
            state.error=null;
        })
        .addCase(uploadApi.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.isLoading=false;
        })
        .addCase(uploadApi.rejected,(state,action)=>{
            state.error=action.payload;
            state.isLoading=false;
        });
    }
})


export default UplaodSlice.reducer;