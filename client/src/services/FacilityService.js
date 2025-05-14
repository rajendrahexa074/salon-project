import axiosInstance from "../AxiosConfig"


export const getFacilities=async ()=>{
    const response= await axiosInstance.get('service/getAllFacilities');
    return response.data;
}

export const addEditFacility=async (payload)=>{
    const response= await axiosInstance.post('service/addEditService',payload);
    return response.data;
}

export const deleteFacility=async (id)=>{
    const response= await axiosInstance.delete(`service/deleteFacility/${id}`);
    return response.data;
}