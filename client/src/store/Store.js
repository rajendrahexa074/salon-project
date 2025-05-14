import { configureStore } from "@reduxjs/toolkit";
import authSlice  from './slice/AuthSlice';
import fileUploadSlice  from './slice/FileUploadSlice';
import { facilitySlice } from "./slice/FacilitySlice";


const store= configureStore({
    reducer:{
        auth:authSlice,
        upload:fileUploadSlice,
    }
})


export default store;