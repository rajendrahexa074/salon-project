import { configureStore } from "@reduxjs/toolkit";
import authSlice  from './slice/AuthSlice';
import { facilitySlice } from "./slice/FacilitySlice";


const store= configureStore({
    reducer:{
        auth:authSlice
    }
})


export default store;