import axiosInstance from "../AxiosConfig"


export const getFacilities=async ()=>{
    const response= await axiosInstance.get('');
    return response.data;
}

export const addEditFacility=async (payload)=>{
    const response= await axiosInstance.post('',payload);
    return response.data;
}