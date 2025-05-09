import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addEditFacility, getFacilities } from "../../services/FacilityService";

export const getFacilitieList = createAsyncThunk('facility/getFacilities', async (_, thunkAPI) => {
    try {
        return await getFacilities();
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);
    }
});

export const manageFacility = createAsyncThunk('facility/addEditFacility', async (payload, thunkAPI) => {
    try {
        return await addEditFacility(payload);

    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data.message);

    }
});

const facilitySlice = createSlice({
    name: 'facility',
    initialState: {
        isLoading: false,
        data: [],
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getFacilitieList.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        })
            .addCase(getFacilitieList.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(getFacilitieList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })

            .addCase(manageFacility.pending, (state) => {
                state.isLoading = true;
            })

            .addCase(manageFacility.fulfilled, (state) => {
                state.isLoading = false;
            })

            .addCase(manageFacility.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;

            })
    }

});

export default facilitySlice.reducer;